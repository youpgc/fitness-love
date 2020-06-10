<template>
    <div class="doughnut-chart" v-if="recommend">
        <div class="doughnut-recom">{{total}}</div>
        <canvas id="doughnut"></canvas>
    </div>
</template>
<script>
import F2 from '@antv/f2';
export default {
  props: ["recommend", "total"],
  name: "doughnut",
  data() {
    return {
        
    };
  },
  mounted() {
      this.getDoughnut();
  },
  methods: {
    getDoughnut() {
        const map = {};
            this.recommend.forEach(function(obj) {
            map[obj.name] = obj.percent + '%';
            map[obj.name + '_val'] = obj.value + ' cal';
        });

        const chart = new F2.Chart({
            id: 'doughnut',
            pixelRatio: window.devicePixelRatio,
            padding: [ 0, 'auto' ]
        });
        chart.source(this.recommend, {
            percent: {
                formatter: function formatter(val) {
                    return val + '%';
                }
            }
        });
        chart.tooltip(false);
        chart.legend({
            position: 'right',
            itemFormatter: function itemFormatter(val) {
                return '\n' + val + '\n' + map[val]+ ' ~ ' + map[val + '_val'];
            }
        });
        chart.coord('polar', {
            transposed: true,
            innerRadius: 0.8,
            radius: 0.9
        });
        chart.axis(false);
        chart.interval()
        .position('a*percent')
        .color('name', [ '#5AC8FB', '#5856D6', '#FF5E3A', '#D81159' ])
        .adjust('stack');

        chart.guide().html({
            position: [ '50%', '55%' ],
            html: `<div style="width: 3.6rem; height: auto; text-align: center;">
                <div style="font-size: 0.8rem; color: #282C37">842</div>
                <div style="font-size: 0.36rem; color: #70849E">Calories</div>
                <div style="font-size: 0.36rem; line-height: 0.8rem; color: #FF5F3B">So Great!</div>
                </div>`
        });
        chart.render();
    }
  }
};
</script>

<style scoped>
    .doughnut-chart {
        width: 100%;
        height: 5.1rem;
        background: #ffffff;
        box-shadow: 0 -0.05rem 0.24rem 0 rgba(0,0,0,0.3);
    }
    .doughnut-recom {
        color: #6D819C;
        line-height: 0.6rem;
        font-size: 0.3rem;
    }
    .doughnut-chart canvas {
        width: 100%;
        height: calc(100% - 0.6rem);
    }
</style>
