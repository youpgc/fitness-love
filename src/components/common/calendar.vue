<template>
    <div class="calendar" @touchstart.capture="touchstart" @touchend.capture="touchend">
        <div class="calendar-title">{{months[month-1]}}, {{year}}</div>
        <div class="calendar-cont">
            <div class="calendar-head dflex-between">
                <div class="calendar-head-item" v-for="(item,index) in weeks" :key="index">{{item}}</div>
            </div>
            <div class="calendar-table" :style="'height:'+(0.9*table.length)+'rem'">
                <div class="calendar-th dflex-between" v-for="(item,index) in table" :key="index">
                    <div class="calendar-td" v-for="(date,i) in item" :key="i" @click="changeView(date)">
                        <span :class="{'active':date.on, 'today':date.default}">{{date.day}}</span>
                        <div class="calendar-tag" v-if="date.default">
                            <i :style="'background-color:'+color[0]"></i>
                            <i :style="'background-color:'+color[1]"></i>
                            <i :style="'background-color:'+color[2]"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["list"],
  name: "calendar",
  data() {
    return {
      months:['Jan','Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'],
      weeks: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
      color: ['#5ac8fb','#44db5e', '#ff9500', '#5856d6', '#d81159', '#ff5e3a', '#4083ff'],
      year: 2019,//当前年份
      month: 4,//当前月份
      week: 3,//星期几
      today: 25,//当前日期
      firstWeek: 4,//当月首日星期
      weekIndex: 5,//月周期
      hrtnDay: 30,//当月总日数
      dayList: [],
      table: [],
      full: true,
      propData: {},
      startY: 0,
      endY: 0
    };
  },
  created(){
      this.initPage();
      this.propData = {list: this.list}
  },
  watch: {
      dayList: {
          handler(val, oldVal){
              
          },
          deep: true
      }
  },
  methods: {
    initPage(){
        this.initDate();
        this.initList();
        this.render(this.full);
    },
    initDate(){
        var data= new Date();
        this.month = data.getMonth() + 1;
        this.year = data.getFullYear();
        var str = data.toString();
        var _str = str.split(" ")[0];
        this.weeks.some((item,index)=>{
            if(_str == this.weeks[index]){
                return this.week = index;
            }
        })
        this.today = data.getDate();
        this.firstWeek = new Date(this.year, this.month-1, 1).getDay();
        switch (this.month) {
            case 1:; case 3:; case 5:; case 7:; case 8:; case 10:; case 12: this.hrtnDay = 31; break;
            case 4:; case 6:; case 9:; case 11: this.hrtnDay = 30; break;
            case 2: if (this.year % 4 == 0 && this.year % 100 != 0 || this.year % 400 == 0) { this.hrtnDay = 29; } else { this.hrtnDay = 28; }; break;
            default: break;
        }
    },
    initList(){
        var dayList = [];
        var dayIndex = 1;
        var _length = this.hrtnDay+this.firstWeek;
        for(let i=0;i<_length;i++){
            var status = false;
            if(i==this.today+this.firstWeek-1){
                status = true;
            }
            if(i<this.firstWeek){//头部处理
                dayList.push({day: '', default: status, tag: [], on: status})
            }else{
                dayList.push({day: dayIndex, default: status, tag: [], on: status})
                dayIndex ++;
            }
        }
        this.dayList = dayList;
        if(_length>35){
            this.weekIndex = 6;
        }
        if(_length <= 28){
            this.weekIndex = 4;
        }
    },
    render(status){
        var tableArr = [];
        for(let i=0;i<this.weekIndex;i++){
            var arr = [];
            for(let x=0;x<this.dayList.length;x++){
                if(x > (i * 7 - 1) && x < ((i + 1) * 7)){
                    arr.push(this.dayList[x]);
                }
            }
            if(status){
                tableArr.push(arr);
            }else{
                arr.some(item=>{
                    item.on ? tableArr.push(arr) : '';
                })
            }
        }
        //尾部处理
        var _table = tableArr[tableArr.length-1]
        for(let i=0;i<8;i++){
            if(_table.length<i){
                _table.push({day: '', default: false, tag: [], on: false})
            }
        }
        this.table = tableArr;
        this.$emit('viewStick',this.table.length);
    },
    changeView(data){
        if(data.day){
            this.dayList.map(item=>{
                item.day == data.day ? item.on = true : item.on = false;
            })
        }
    },
    touchstart(e){
        this.startY = e.touches[0].clientY;
    },
    touchend(e){
        let parentElement = e.currentTarget.parentElement;
        this.endY = e.changedTouches[0].clientY;
        //上滑
        if(this.startY - this.endY > 30 ){
            this.restSlide(false);
        }
        // 下滑
        if(this.startY - this.endY < -30 ){
            this.restSlide(true);
        }
        this.startY = 0;
        this.endY = 0;
    },
    restSlide(status){
        this.full = status;
        this.$emit('viewStick',this.table.length);
        this.render(this.full);
    }
  }
};
</script>

<style scoped>
    .calendar{
        background: #fff;
        overflow: hidden;
    }
    .calendar-title{
        height: 0.8rem;
        line-height: 0.8rem;
        padding-left: 0.5rem;
        font-size: 0.6rem;
        font-weight: bold;
        text-align: left;
        color: #282c37;
    }
    .calendar-cont{
        width: 100%;
        line-height: 0.8rem;
        padding: 0 0.3rem 0.2rem;
        border-spacing: 0;
    }
    .calendar-head{
        width: 100%;
    }
    .calendar-head-item{
        width: 100%;
        color: #6d819c;
        font-weight: normal;
    }
    .calendar-table{
        overflow: hidden;
        transition: 0.3s;
    }
    .calendar-th{
        overflow: hidden;
    }
    .calendar-td{
        width: 100%;
        height: 0.9rem;
        position: relative;
    }
    .calendar-td span{
        width: 0.56rem;
        height: 0.56rem;
        line-height: 0.56rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.3rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .today{
        background: #5ac8fb;
        color: #fff;
    }
    .active{
        color: #fff;
        background: linear-gradient(left, #ff6649, #ff0776);
    }
    .calendar-tag{
        display: flex;
        position: absolute;
        bottom: 0.02rem;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .calendar-tag i{
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        margin: 0 0.03rem;
        border-radius: 50%;
        background: #ccc;
        transform: scale(0.8);
    }
</style>
