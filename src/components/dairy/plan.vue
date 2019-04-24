<template>
    <div class="diary-plan diary-temp">
        <div class="plan-head">
            <div class="plan-head-title">{{plan.title}}</div>
            <router-link to="/addplan" class="plan-head-add" v-if="plan.type != 3"><img :src="icon.add"/> <span> ADD {{plan.type == 1 ? 'PLAN' : 'FOOD'}}</span></router-link>
        </div>
        <div class="plan-cont bbse9" data-type='0' v-for="(item,index) in plan.list" :key="index">
            <div class="plan-cont-item" @touchstart.capture="touchstart" @touchend.capture="touchend" @click="skip(item,index)" v-if="plan.type == 1">
                <div class="plan-item-time">{{item.date}}</div>
                <div class="plan-item-ready ellipsis">{{item.text}}</div>
                <div class="plan-ready-cont">
                    <div class="plan-ready-item">
                        <img :src="icon.time"/>
                        <span>{{item.time}}</span>
                    </div>
                    <div class="plan-ready-item">
                        <img :src="icon.status"/>
                        <span>{{item.status}}</span>
                    </div>
                </div>
            </div>
            <div class="plan-cont-item" @touchstart.capture="touchstart" @touchend.capture="touchend" @click="skip(index)" v-if="plan.type == 2">
                <div class="plan-cont-AZ" :style="'background-color:'+getAZ(item.index,true)">{{getAZ(item.index)}}</div>
                <div class="plan-cont-title ellipsis">{{item.title}}</div>
                <div class="plan-cont-result">
                    <div class="plan-result-item">
                        <img class="plan-icon-cal" :src="icon.cal"/>
                        <span>{{item.cal}}</span>
                    </div>
                    <div class="plan-result-item">
                        <img class="plan-icon-eat" :src="icon.eat"/>
                        <span>{{item.eat}}</span>
                    </div>
                </div>
            </div>
            <div class="plan-cont-item" v-if="plan.type == 3">
                <div class="plan-cups">
                    <div class="plan-cups-img" v-for="(item,index) in plan.list" :key="index"><img :src="icon.cup"/></div>
                    <div class="plan-cups-img"><img :src="icon.cupAdd"/></div>
                    <div class="plan-cups-img" v-for="item in plan.empty" :key="item"><img :src="icon.cupEp"/></div>
                </div>
            </div>
            <div class="plan-operat gradient-back dflex-between" v-if="plan.type != 3">
                <div class="plan-operat-item">
                    <img :src="icon.delet"/>
                    <span>delete</span>
                </div>
                <div class="plan-operat-item">
                    <img :src="icon.active"/>
                    <span>active</span>
                </div>
            </div>
        </div>
        <div class="plan-recom dflex-between" v-if="plan.type != 1">
            <div class="plan-recom-real"><span>{{plan.sum}}</span><img :src='icon.warn'/></div>
            <div class="plan-recom-txt">Recommended {{plan.recom}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["plan"],
    name: 'plan',
    data(){
        return {
            icon: { 
                add: require('@/assets/images/icon-06.png'),
                time: require('@/assets/images/icon-07.png'),
                status: require('@/assets/images/icon-08.png'),
                cal: require('@/assets/images/icon-09.png'),
                eat: require('@/assets/images/icon-10.png'),
                warn: require('@/assets/images/icon-12.png'),
                cup: require('@/assets/images/pic-02.png'),
                cupAdd: require('@/assets/images/pic-03.png'),
                cupEp: require('@/assets/images/pic-04.png'),
                delet: require('@/assets/images/icon-13.png'),
                active: require('@/assets/images/icon-14.png')
            },
            list: [],
            clientX: 0,
            endX: 0,
        }
    },
    created(){
        this.plan.list.map(item => {
            this.list.push({
                status: item.operat
            })
        })
    },
    methods: {
        skip(index){
            if( this.checkSlide() ){
                this.restSlide();
            }else{
                console.log(this.plan,index);
            }
        },
        touchstart(e){
            this.startX = e.touches[0].clientX;
        },
        touchend(e){
            let parentElement = e.currentTarget.parentElement;
            this.endX = e.changedTouches[0].clientX;
            //左滑
            if( parentElement.dataset.type == 0 && this.startX - this.endX > 30 ){
                this.restSlide();
                parentElement.dataset.type = 1;
            }
            // 右滑
            if( parentElement.dataset.type == 1 && this.startX - this.endX < -30 ){
                this.restSlide();
                parentElement.dataset.type = 0;
            }
            this.startX = 0;
            this.endX = 0;
        },
        checkSlide(){//判断当前是否有滑块处于滑动状态
            let listItems = document.querySelectorAll('.plan-cont');
            for( let i = 0 ; i < listItems.length ; i++){
                if( listItems[i].dataset.type == 1 ) {
                    return true;
                }
            }
            return false;
        },
        restSlide(){//复位滑动状态
            let listItems = document.querySelectorAll('.plan-cont');
            for( let i = 0 ; i < listItems.length ; i++){
                listItems[i].dataset.type = 0;
            }
        },
        getAZ(index,type){
            var color = ['#5856d6', '#d81159', '#ff9500', '#ff5e3a', '#26cb00', '#00bacb', '#3955ff'];
            var AZ = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
            if(type){
                return color[index];
            }else{
                return AZ[index];
            }
        },
    }
}
</script>

<style scoped>
 .diary-plan{
     width: 100%;
     height: auto;
     overflow: hidden;
     position: relative;
 }
 .plan-head{
     width: 100%;
     height: 1rem;
     line-height: 1rem;
     padding: 0 0.3rem;
     font-size: 0.28rem;
     text-align: left;
     border-bottom: 1px solid #e9e9e9;
     overflow: hidden;
 }
 .plan-head-title{
     float: left;
     font-weight: bold;
 }
 .plan-head-add{
     display: block;
     float:right;
     color: #ff5e3a;
 }
 .plan-head-add img{
     width: 0.2rem;
     height: 0.2rem;
 }
 .plan-cont{
     position: relative;
     transition: 0.3s;
 }
 .plan-cont[data-type="0"]{
     transform: translate3d(0,0,0);
 }
 .plan-cont[data-type="1"]{
     transform: translate3d(-2.6rem,0,0);
 }
 .plan-cont-item{
     text-align: left;
     padding: 0.2rem 0.3rem;
     position: relative;
     transition: 0.3s;
 }
 .plan-item-time{
     height: 0.6rem;
     line-height: 0.6rem;
     font-size: 0.28rem;
     color: #6d819c;
     padding-left: 0.3rem;
     position: relative;
 }
 .plan-item-time::before{
     content: '';
     width: 0.2rem;
     height: 0.2rem;
     border-radius: 50%;
     background: #5856d6;
     position: absolute;
     left: 0;
     top: 50%;
     transform: translate(0,-50%);
 }
 .plan-item-ready{
     font-size: 0.5rem;
 }
 .plan-ready-cont{
     margin-top: 0.1rem;
 }
 .plan-ready-item,.plan-result-item{
     display: inline;
     margin-right: 0.5rem;
 }
 .plan-ready-item img{
     width: 0.25rem;
     height: 0.25rem;
 }
 .plan-icon-cal{
     width: 0.2rem;
     height: 0.29rem;
 }
 .plan-icon-eat{
     width: 0.28rem;
     height: 0.23rem;
 }
 .plan-ready-item span, .plan-result-item span{
     font-size: 0.28rem;
     color: #6d819c;
 }
 .plan-recom{
     height: 1.3rem;
     line-height: 1.3rem;
     padding: 0 0.3rem;
 }
 .plan-recom-real{
     font-size: 0.5rem;
 }
 .plan-recom-real img{
     width: 0.4rem;
     height: 0.4rem;
     margin-left: 0.16rem;
 }
 .plan-recom-txt{
     font-size: 0.28rem;
 }
 .plan-cont-title, .plan-cont-result{
     height: 0.5rem;
     padding-left: 0.84rem;
 }
 .plan-cont-AZ{
     width: 0.48rem;
     height: 0.48rem;
     line-height: 0.48rem;
     text-align: center;
     border-radius: 50%;
     font-size: 0.24rem;
     font-weight: bold;
     color: #fff;
     position: absolute;
     left: 0.3rem;
     top: 0.24rem;
 }
 .plan-cups{
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
 }
 .plan-cups-img{
     width: 100%;
     text-align: center;
 }
 .plan-cups-img img{
     width: 0.74rem;
     height: 1.04rem;
 }
 .plan-operat{
     width: 2.6rem;
     height: 100%;
     font-size: 0.24rem;
     position: absolute;
     top: 0;
     right: -2.6rem;
 }
 .plan-operat-item{
     width: 100%;
     line-height: 0.36rem;
     display: flex;
     align-items: center;
     flex-direction: column;
     justify-content: center;
 }
 .plan-operat-item img{
     width: 0.64rem;
     height: 0.64rem;
 }
</style>