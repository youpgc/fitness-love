<template>
    <div>
        <div class="meal-title">
            <span>NUTRITION DETAIL</span>
            <a>More Nutrition Facts</a>
        </div>
        <div class="meal-nutrition">
            <div class="nutrition-item" v-for="(item,index) in nutrition" :key="index">
                <div class="nutrition-title">
                    <span>{{item.title}}</span>
                    <label>{{item.total}} g</label>
                </div>
                <div class="nutrition-unit" v-for="(unit, i) in item.child" :key="i">
                    <label>{{unit}}</label>
                    <span class="gradient-back">PRO</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["nutrition"],
  name: "nutrition",
  data() {
    return {
        
    };
  },
  mounted() {
      
  },
  methods: {
      
  }
};
</script>

<style scoped>
    .meal-title {
        display: flex;
        justify-content: space-between;
        line-height: 0.8rem;
        font-size: 0.28rem;
        padding: 0 0.32rem;
        border-bottom: 1px solid #E9E9E9;
    }

    .meal-title span{
        font-weight: bold;
    }

    .meal-title a {
        color: #FF5E3A;
    }

    .meal-nutrition {
        padding: 0.5rem 0.32rem;
    }

    .nutrition-item {
        margin-bottom: 0.8rem;
    }

    .nutrition-item:last-child {
        margin-bottom: 0;
    }

    .nutrition-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.32rem;
        font-weight: bold;
        color: #282C37;
    }

    .nutrition-title::before {
        content: '';
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
    }

    .nutrition-item:nth-child(1) .nutrition-title::before {
        background-color: #5AC8FB;
    }

    .nutrition-item:nth-child(2) .nutrition-title::before {
        background-color: #5856D6;
    }

    .nutrition-item:nth-child(3) .nutrition-title::before {
        background-color: #FF5E3A;
    }

    .nutrition-item:nth-child(4) .nutrition-title::before {
        background-color: #D81159;
    }

    .nutrition-title span{
        flex: 1;
        text-align: left;
        padding-left: 0.2rem;
    }

    .nutrition-unit {
        display: flex;
        justify-content: space-between;
        font-size: 0.28rem;
        padding-left: 0.4rem;
        margin-top: 0.32rem;
    }

    .nutrition-unit span {
        padding: 0.06rem 0.2rem;
        border-radius: 0.2rem;
        font-size: 0.24rem;
    }
</style>    
