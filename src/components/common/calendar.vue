<template>
  <div>
    <div class="calendar">
        <div class="calendar-title">{{months[month-1]}}, {{year}}</div>
        <div class="calendar-cont">
            <div class="calendar-head dflex-between">
                <div class="calendar-head-item" v-for="(item,index) in weeks" :key="index">{{item}}</div>
            </div>
            <div class="calendar-table">
                <div class="calendar-th dflex-between">
                    <div class="calendar-td">
                        <span class="active">1</span>
                        <div class="calendar-tag">
                            <i></i><i></i><i></i>
                        </div>
                    </div>
                    <div class="calendar-td"><span>2</span></div>
                    <div class="calendar-td"><span>3</span></div>
                    <div class="calendar-td"><span>4</span></div>
                    <div class="calendar-td"><span>5</span></div>
                    <div class="calendar-td"><span>6</span></div>
                    <div class="calendar-td"><span>7</span></div>
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
      today: 1,//当前日期
      firstWeek: 4,//当月首日星期
      hrtnDay: 30,//当月总日数
      table: []
    };
  },
  created(){
      this.init();
  },
  methods: {
    init(){
        var data = new Date();
        // this.year = 2019;
        // this.month = 5;
        this.year = data.getFullYear();
        this.month = data.getMonth() + 1;
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
        var dayList = [];
        var dayIndex = 1;
        var _length = this.hrtnDay+this.firstWeek;
        for(let i=0;i<_length;i++){
            if(i<this.firstWeek){
                dayList.push({day: '', default: false, tag: []})
            }else{
                dayList.push({day: dayIndex, default: true, tag: []})
                dayIndex ++;
            }
        }
        // var weekIndex = 5;
        // for(let i=0;i<weekIndex;i++){
        //     var arr = [];
        //     dayList.some((item,index)=>{
        //         if(index<weekIndex*7){
        //             return arr.push(item);
        //         }
        //     })
        //     this.table.push(arr);
        // }
        // console.log(this.table);
    }
  }
};
</script>

<style scoped>
    .calendar{

    }
    .calendar-title{
        height: 1rem;
        line-height: 1rem;
        padding-left: 0.5rem;
        font-size: 0.6rem;
        font-weight: bold;
        text-align: left;
        color: #282c37;
    }
    .calendar-cont{
        width: 100%;
        line-height: 1rem;
        padding: 0 0.3rem;
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

    }
    .calendar-th{

    }
    .calendar-td{
        width: 100%;
        height: 1rem;
        position: relative;
    }
    .calendar-td span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .active{
        width: 0.64rem;
        height: 0.64rem;
        line-height: 0.64rem;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background: linear-gradient(left, #ff6649, #ff0776);
    }
    .calendar-tag{
        display: flex;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
    }
    .calendar-tag i{
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        margin: 0 0.01rem;
        border-radius: 50%;
        background: #ccc;
    }
</style>
