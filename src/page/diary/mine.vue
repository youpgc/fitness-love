<template>
    <div class="pt88">
        <head-bar v-bind:head="headData" @headfun="getMsg()" class="gradient"></head-bar>
        <div class="heados" style="margin-top: -1px">
            <div class="mine-via">
                <div class="mine-via-img"><img :src="icon.via"/></div>
            </div>
            <div class="mine">
                <info-html v-bind:info="infoData" class="diary-temp"></info-html>
            </div>
            <div class="menu">
                <div class="diary-temp">
                    <div class="menu-head">MENU</div>
                    <div class="menu-list">
                        <router-link :to="item.href" class="menu-item btse9" v-for="(item,index) in menu" :key="index">
                            <div class="menu-item-icon">
                                <img :src="item.icon" :style="'width:'+item.width+'; height:'+item.height">
                            </div>
                            <div class="menu-item-title ellipsis">{{item.title}}</div>
                            <div class="menu-item-next">
                                <img :src="icon.next"/>
                            </div>
                        </router-link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headBar from '@/components/common/head';
import infoHtml from '@/components/dairy/info';
export default {
    name: 'mine',
    components: {
        headBar,
        infoHtml
    },
    data(){
        return {
            headData: {
                text: 'Youpgc',
                src: require('@/assets/images/icon-29.png'),
                icon: require('@/assets/images/icon-02.png'),
                iconclass: 'icon-msg'
            },
            icon: {
                via: require('@/assets/images/head.png'),
                next: require('@/assets/images/icon-46.png')
            },
            infoData: {
                goal: 'Gain weight',
                date: 'Jan 22',
                weight: '74'
            },
            menu: [
                {icon: require('@/assets/images/icon-52.png'), title: 'Upgrade Professional', href: '/', width: '0.48rem', height: '0.64rem', default: true},
                {icon: require('@/assets/images/icon-53.png'), title: 'Edit Profile', href: '/', width: '0.6rem', height: '0.6rem', default: true},
                {icon: require('@/assets/images/icon-54.png'), title: 'Change Goal', href: '/', width: '0.64rem', height: '0.64rem', default: true},
                {icon: require('@/assets/images/icon-55.png'), title: 'My Progress Photo', href: '/', width: '0.56rem', height: '0.64rem', default: true},
                {icon: require('@/assets/images/icon-56.png'), title: 'Blog Bookmark', href: '/', width: '0.46rem', height: '0.64rem', default: true},
                {icon: require('@/assets/images/icon-57.png'), title: 'Invite friend and family', href: '/', width: '0.65rem', height: '0.6rem', default: true},
            ]
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){

        },
        getMsg(){
            this.$router.push({
                name: 'msgIndex',
                path: '/msgIndex'
            })
        }
    }
}
</script>

<style scoped>
.gradient {
    color: #fff !important;
    background: -webkit-linear-gradient(left, #fdf6f5, #ff2a67) !important;
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #ff5d3a, #ff2a67) !important;
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #ff5d3a, #ff2a67) !important;
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #ff5d3a, #ff2a67) !important;
    /* 标准的语法 */
}
.mine, .menu{
    padding: 0.3rem 0.3rem 0;
}
.mine-via{
    width: 100%;
    height: 3.4rem;
    background-image: url('../../assets/images/back-07.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% 3rem;
    position: relative;
}
.mine-via-img{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 2.5rem;
    height: 2.5rem;
    border: 0.06rem solid #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 0.2rem 0 rgba(0, 0, 0, 0.5);
}
.menu-head{
    height: 1rem;
    line-height: 0.9rem;
    font-size: 0.32rem;
    font-weight: bold;
    text-align: left;
    padding: 0.1rem 0.5rem 0;
    color: #282c37;
}
.menu-list{
    overflow: hidden;
}
.menu-item{
    height: 1.3rem;
    padding: 0 0.32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu-item-icon{
    display: flex;
    width: 0.8rem;
    align-items: center;
    justify-content: center;
}
.menu-item-title{
    font-size: 0.36rem;
    text-align: left;
    flex: 1;
    padding: 0 0.2rem;
}
.menu-item-next{
    width: 0.18rem;
    height: 0.3rem;
}
</style>