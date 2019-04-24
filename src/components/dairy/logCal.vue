<template>
    <div class="">
        <div class="per100" ref="message"></div>
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'logCal',
    props: ['cal'],
    data(){
        return {
            percent: 0,
            msg: 'logCal',
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            var _this = this;
            _this.percent = ((_this.cal.eaten / _this.cal.calories).toFixed(2))*100;
            var detail = _this.$refs.message;
            var myChart = echarts.init(detail);
            
            myChart.setOption({
                title: {
                    textAlign: "center",
                    left: '48%',
                    bottom: '0',//字体的位置
                    text: 'DETAIL',
                    textStyle: {
                        fontWeight: 'bold',
                        color: '#6d819c',
                        fontSize: 12
                    },
                },
                series: [{
                        name: '',
                        type: 'pie',
                        radius: ['90%', '100%'],
                        avoidLabelOverlap: false,
                        startAngle: 235,
                        color: [{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0.1,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(255,148,0,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(255,94,56,1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }, 'none'],
                        hoverAnimation: false,//是否开启 hover 在扇区上的放大动画效果。
                        legendHoverLink: false,//是否启用图例 hover 时的联动高亮。
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            value: 3,
                            name: '1'
                        }, {
                            value: 1,
                            name: '2'
                        }]
                    }, {
                        name: '',
                        type: 'pie',
                        radius: ['90%', '100%'],
                        avoidLabelOverlap: false,
                        startAngle: 305,
                        color: '#e9e9e9',
                        hoverAnimation: false,
                        legendHoverLink: false,
                        clockwise: false,//饼图的扇区是否是顺时针排布。
                        z: 10,
                        label: {
                            "normal": {
                                "show": false,
                                "position": 'center'
                            },

                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [{
                            value: (100 - _this.percent) * 360 / 360,
                            label: {
                                normal: {
                                    formatter: function(res){
                                        return _this.cal.calories;
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '24',
                                        fontWeight: 'bold',
                                        color: '#282c37'
                                    }
                                }
                            },
                            name: ''
                        }, {
                            value: 1,
                            label: {
                                normal: {
                                    formatter: function(res){
                                        return '\n'+'\n'+'\n'+'\n'+'Calories left'
                                    },
                                    show: true,
                                    textStyle: {
                                        fontSize: '12',
                                        fontWeight: 'normal',
                                        color: '#6d819c',
                                    }
                                },
                            },
                            name: ''
                        }, {
                            value: 100 - (100 - _this.percent) * 270 / 360,
                            name: ''
                        }]
                    }, 
                ]
            });
        }
    }
}
</script>

<style scoped>
    .per100{
        width: 100%;
        height: 100%;
    }
</style>