<template>
    <div class="diary-plan diary-temp">
        <div class="plan-head">
            <div class="plan-head-title">{{plan.title}}</div>
            <router-link to="/addplan" class="plan-head-add" v-if="plan.type == 1 || plan.type == 2"><img :src="icon.add"/> <span> ADD {{plan.type == 1 ? 'PLAN' : 'FOOD'}}</span></router-link>
        </div>
        <div class="plan-cont bbse9" v-for="(item,index) in plan.list" :key="index" @click="itemDelet($event,item,index)">
            <div class="plan-cont-item" :ref="plan.ref+'-'+index" v-if="plan.type == 1">
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
            <div class="plan-cont-item" :ref="plan.ref + '-' + index" v-if="plan.type == 2">
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
                    <img :src="icon.cup" v-for="(item,index) in plan.list" :key="index"/>
                    <img :src="icon.cupAdd"/>
                    <img :src="icon.cupEp" v-for="item in plan.empty"/>
                </div>
            </div>
            <div class="plan-operat gradient-back dflex-between" v-if="list[index].status">
                <div class="plan-operat-item">delete</div>
                <div class="plan-operat-item">active</div>
            </div>
        </div>
        <div class="plan-recom dflex-between" v-if="plan.type == 2 || plan.type == 3">
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
                cupEp: require('@/assets/images/pic-04.png')
            },
            list: [],
            touchData: {}
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
        itemDelet(e,item,index){
            var str = this.plan.ref +'-'+ index;
            var status = this.list[index].status;
            // console.log(this.$refs[str][0]);
            if(status){
                this.list[index].status = !status;
                this.$refs[str][0].style = 'margin-left: 0';
            }else{
                this.$refs[str][0].style = 'margin-left: -1.7rem';
                setTimeout(() => {
                    this.list[index].status = !status;
                },300)
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
        start(e){
            console.log('start')
        }
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
     overflow: hidden;
 }
 .plan-cont-item{
     float: left;
     width: 100%;
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
     overflow: hidden;
 }
 .plan-cups img{
     width: 0.74rem;
     height: 1.04rem;
     margin-right: 0.26rem;
 }
 .plan-operat{
     float: left;
     width: 1.7rem;
     height: 2.14rem;
     font-size: 0.24rem;
 }
 .plan-operat-item{
     width: 100%;
 }
</style>