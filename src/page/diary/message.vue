<template>
    <div class="pt88">
        <head-bar v-bind:head="headData"></head-bar>
        <div class="heados">
            <div>{{msg}}</div>
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
                text: 'message',
                src: require('@/assets/images/icon-30.png')
            },
            msg: 'message'
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){

        }
    }
}
</script>

<style scoped>
</style>