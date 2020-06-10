<template>
    <div class="bar-chart" v-if="recommend">
        <canvas id="barChart"></canvas>
        <div class="bar-cup" v-if="barCup">
            <div class="bar-total">{{barCup.total}}</div>
            <div class="bar-recom">{{barCup.recom}}</div>
        </div>
    </div>
</template>
<script>
import F2 from '@antv/f2';
export default {
  props: ["recommend", "barCup"],
  name: "barChart",
  data() {
    return {
        
    };
  },
  mounted() {
      this.getBar();
  },
  methods: {
    getBar() {
        const chart = new F2.Chart({
            id: 'barChart',
            pixelRatio: window.devicePixelRatio
        });

        chart.source(this.recommend, {
            value: {
                ticks: [ 0, 200, 400, 600, 800, 1000 ]
            },
            sales: {
                tickCount: 5
            }
        });
        chart.tooltip({
            showItemMarker: false,
            onShow: function onShow(ev) {
                const items = ev.items;
                items[0].name = null;
                items[0].name = items[0].title;
                items[0].value = items[0].value + 'cal';
            }
        });
        this.recommend.forEach((obj)=> {
            chart.guide().text({
                position: [obj.name, obj.value],
                content: obj.value,
                style: {
                    textAlign: 'center',
                    textBaseline: 'bottom'
                },
                offsetY: -4
            })
        })
        chart.legend(false);
        chart.interval()
        .position('name*value')
        .color('name', [ '#5AC8FB', '#5856D6', '#FF5E3A', '#44DB5E' ]);
        chart.render();
    }
  }
};
</script>

<style scoped>
    .bar-chart {
        padding: 0.2rem;
        height: auto;
    }
    .bar-chart canvas{
        width: 100%;
        height: calc(100% - 1.82rem);
    }
    .bar-cup {
        width: 100%;
        height: 1.82rem;
        background-image: url('../../assets/images/pic-05.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        padding-left: 0.4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .bar-total{ 
        font-size: 0.8rem;
    }
    .bar-recom {
        font-size: 0.3rem;
    }
</style>
