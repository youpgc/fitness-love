<template>
    <div class="pt88">
        <head-bar v-bind:head="headData"></head-bar>
        <div class="heados">
            <div class="tab dflex-between shadow">
                <div class="tab-item" @click="changeTab(index)" :class="{'active':item.on}" v-for="(item,index) in tab" :key="index">{{item.title}}</div>
            </div>
            <div class="list">
                <div class="list-item shadow" v-for="(item,index) in notifications" :key="index">
                    <div class="list-item-via"><img :src="item.via"></div>
                    <div class="list-item-cont">
                        <div class="list-item-text">{{item.title}}</div>
                        <div class="list-item-time">{{item.time}}</div>
                    </div>
                </div>
                <div class="list-empty" v-if="notifications.length == 0">empty</div>
            </div>
        </div>
    </div>
</template>

<script>
import headBar from '@/components/common/head';
export default {
    name: 'message',
    components: {
        headBar
    },
    data(){
        return {
            headData: {
                text: 'Notifications',
                src: require('@/assets/images/icon-30.png')
            },
            tab: [
                {title: 'INVITE PLAN', on: true, list: [
                    {via: require('@/assets/images/pic-26.png'), title: 'Gary Reyes accepted you invite in "Weider (Chest Special)"', time: 'Jan 22, 2018'},
                    {via: require('@/assets/images/pic-27.png'), title: 'Adelaide Harris accepted you invite in "Abs Home Workout"', time: 'Jan 22, 2018'},
                    {via: require('@/assets/images/pic-28.png'), title: 'Rodney Stickland accepted you invite in "Abs Home Workout"', time: 'Jan 22, 2018'},
                    {via: require('@/assets/images/pic-29.png'), title: 'Christina Smith accepted you invite in "Weider (Chest Special)"', time: 'Jan 22, 2018'},
                    {via: require('@/assets/images/pic-30.png'), title: 'Fannie Hanson accepted you invite in "Weider (Chest Special)"', time: 'Jan 22, 2018'},
                    {via: require('@/assets/images/pic-31.png'), title: 'Evan Jacobs accepted you invite in "Abs Home Workout"', time: 'Jan 22, 2018'}
                ]},
                {title: 'WORKOUT', on: false, list: []},
                {title: 'NUTRTION', on: false, list: []}
            ],
            notifications: []
        }
    },
    created(){
        this.notifications = this.tab[0].list;
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){

        },
        changeTab(index){
            this.tab.map(item=>{
                item.on = false;
            })
            this.tab[index].on = true;
            this.notifications = this.tab[index].list;
        }
    }
}
</script>

<style scoped>
    .tab{
        height: 1rem;
        line-height: 1rem;
    }
    .tab-item{
        width: 100%;
        font-size: 0.26rem;
        font-weight: bold;
        color: #6d819c;
    }
    .tab .active{
        color: #ff5e3a;
        border-bottom: 0.04rem solid #ff5e3a;
    }
    .list{
        padding: 0.3rem 0.3rem 0 0.3rem;
        overflow: scroll;
        height: calc(100% - 1rem);
    }
    .list-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.32rem;
        text-align: left;
        border-radius: 0.2rem;
        margin-bottom: 0.3rem;
    }
    .list-item-via{
        width: 0.96rem;
        height: 0.96rem;
    }
    .list-item-cont{
        flex: 1;
        padding-left: 0.3rem;
    }
    .list-item-text{
        font-size: 0.3rem;
        line-height: 1.4;
    }
    .list-item-time{
        font-size: 0.3rem;
        color: #6d819c;
        padding: 0.2rem 0 0 0.3rem;
        background-image: url(../../assets/images/icon-07.png);
        background-position: left 0.24rem;
        background-repeat: no-repeat;
        background-size: 0.25rem 0.25rem;
    }
    .list-empty{
        color: #ddd;
        line-height: 1rem;
    }
</style>