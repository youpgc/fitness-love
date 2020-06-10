<template>
    <div class="pt88">
        <head-bar v-bind:head="headData"></head-bar>
        <div class="heados bacgray">
            <Doughnut v-bind:recommend="recommend" total="Recommended 615 - 820 calories"/>
            <BarChart class="meal-item" v-bind:recommend="recommend" :barCup="barCup"/>
            <Nutrition class="meal-item" v-bind:nutrition="nutrition"/>
            <div class="meal-item">
                <div class="meal-idea">What's the ideal macronutrient ratio for Gain weight?</div>
                <div class="meal-up-tip">
                    <div class="meal-up-title">
                        <span class="gradient-back">PRO</span>
                        <label>More nutrition detail need Pro account.</label>
                    </div>
                    <a class="meal-up-href">Upgrade Now.</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headBar from '@/components/common/head';
import Doughnut from '@/components/common/doughnut';
import BarChart from '@/components/common/barChart';
import Nutrition from '@/components/common/nutrition';
import F2 from '@antv/f2';
export default {
    name: 'meal',
    components: {
        headBar,
        Doughnut,
        BarChart,
        Nutrition
    },
    data(){
        return {
            headData: {
                text: 'BreakFast Detail',
                src: require('@/assets/images/icon-27.png')
            },
            recommend: [
                {
                    name: 'Fat',
                    percent: 20,
                    a: '1',
                    value: 168
                }, {
                    name: 'Carbs',
                    percent: 25,
                    a: '1',
                    value: 210
                }, {
                    name: 'Protein',
                    percent: 36,
                    a: '1',
                    value: 303
                }, {
                    name: 'Others',
                    percent: 19,
                    a: '1',
                    value: 161
                }
            ],
            barCup: {
                total: '842 Cal',
                recom: 'Recommended 615 - 820 cal'
            },
            nutrition: [
                {
                    title: 'Fat',
                    total: 10.3,
                    child: ['Saturated fat', 'Unsaturated fat']
                },
                {
                    title: 'Carbs',
                    total: 14.6,
                    child: ['Fiber', 'Sugars']
                },
                {
                    title: 'Protein',
                    total: 23.8,
                    child: []
                },
                {
                    title: 'Others',
                    total: 10.3,
                    child: ['Cholesterol', 'Sodium', 'Potassium']
                },
            ]
        }
    },
    created(){
        
    },
    mounted(){
        const { title } = this.$route.params;
        const str = {
            "BREAKFAST": "BreakFast",
            "LUNCH": "Lunch",
            "DINNER": "Dinner",
            "SNACK": "Snack"
        }
        this.headData.text = (str[title] || str['BREAKFAST']) +' Detail' ;
        this.init();
    },
    methods: {
        init(){
            
        }
    }
}
</script>

<style scoped>
    .bacgray {
        background-color: #F6F8FD;
        padding-bottom: 0.4rem;
    }
    .meal-item {
        margin: 0.24rem 0.32rem 0;
        border-radius: 0.16rem;
        background-color: #ffffff;
        box-shadow: 0 0.05rem 0.2rem 0 rgba(0,0,0,0.1);
    }
    .meal-idea {
        color: #FF5E3A;
        padding: 0.4rem 0.32rem;
        text-align: left;
        font-size: 0.36rem;
        border-bottom: 1px solid #E9E9E9;
    }
    .meal-up-tip {
        padding: 0.4rem 0.32rem;
        text-align: left;
    }
    .meal-up-title {
        display: flex;
        justify-content: space-between;
        font-size: 0.3rem;
        align-items: center;
    }
    .meal-up-title span {
        padding: 0.06rem 0.16rem;
        border-radius: 0.2rem;
        font-size: 0.24rem;
    }
    .meal-up-href {
        display: block;
        padding-left: 1.06rem;
        font-size: 0.36rem;
        color: #FF5E3A;
        margin-top: 0.2rem;
    }
</style>