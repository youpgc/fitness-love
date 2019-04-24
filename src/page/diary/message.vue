<template>
    <div class="pt88">
        <head-bar v-bind:head="headData"></head-bar>
        <div class="heados bf4">
            <canvas id="progress"></canvas>
        </div>
    </div>
</template>

<script>
import headBar from '@/components/common/head';
import F2 from '@antv/f2';
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
            cal: 0,
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            var _this = this;
            var _F = F2,
                Shape = _F.Shape,
                G = _F.G,
                Util = _F.Util,
                Global = _F.Global;
            var Vector2 = G.Vector2;

            // 极坐标下带圆角的柱子，只对极坐标生效

            Shape.registerShape('interval', 'polar-tick', {
                draw: function draw(cfg, container) {
                var points = this.parsePoints(cfg.points);
                var style = Util.mix({
                    stroke: cfg.color
                }, Global.shape.interval, cfg.style);

                var newPoints = points.slice(0);
                if (this._coord.transposed) {
                    newPoints = [points[0], points[3], points[2], points[1]];
                }

                var center = cfg.center;
                var x = center.x,
                    y = center.y;


                var v = [1, 0];
                var v0 = [newPoints[0].x - x, newPoints[0].y - y];
                var v1 = [newPoints[1].x - x, newPoints[1].y - y];
                var v2 = [newPoints[2].x - x, newPoints[2].y - y];

                var startAngle = Vector2.angleTo(v, v1);
                var endAngle = Vector2.angleTo(v, v2);
                var r0 = Vector2.length(v0);
                var r = Vector2.length(v1);

                if (startAngle >= 1.5 * Math.PI) {
                    startAngle = startAngle - 2 * Math.PI;
                }

                if (endAngle >= 1.5 * Math.PI) {
                    endAngle = endAngle - 2 * Math.PI;
                }

                var lineWidth = r - r0;
                var newRadius = r - lineWidth / 2;

                return container.addShape('Arc', {
                    className: 'interval',
                    attrs: Util.mix({
                    x: x,
                    y: y,
                    startAngle: startAngle,
                    endAngle: endAngle,
                    r: newRadius,
                    lineWidth: lineWidth,
                    lineCap: 'round'
                    }, style)
                });
                }
            });
            var data = [{
                const: 'a',
                actual: 75,
                expect: 100
            }];
            var chart = new F2.Chart({
                id: 'progress',
                padding: [0, 30, 60],
                pixelRatio: window.devicePixelRatio
            });
            chart.source(data, {
                actual: {
                max: 100,
                min: 0,
                nice: false
                }
            });
            chart.coord('polar', {
                transposed: true,
                innerRadius: 0.8,
                startAngle: -Math.PI,
                endAngle: 0
            });
            chart.axis(false);
            chart.interval().position('const*expect').shape('polar-tick').size(10).color('#e9e9e9').animate(false); // 背景条
            chart.interval().position('const*actual').shape('polar-tick').size(10).color('#ff5e38').animate({
                appear: {
                duration: 1100,
                easing: 'linear',
                animation: function animation(shape, animateCfg) {
                    var startAngle = shape.attr('startAngle');
                    var endAngle = shape.attr('endAngle');
                    if (startAngle > endAngle) {
                    // -Math.PI/2 到 0
                    endAngle += Math.PI * 2;
                    }
                    shape.attr('endAngle', startAngle);
                    shape.animate().to(Util.mix({
                    attrs: {
                        endAngle: endAngle
                    }
                    }, animateCfg)).onUpdate(function(frame) {
                        document.getElementById("text").innerHTML = parseInt(frame * 75) + '%';
                    });
                }
                }
            }); // 实际进度
            chart.guide().html({
                position: ['50%', '80%'],
                html: '<div style="width: 120px;color: #999;white-space: nowrap;text-align:center;">' + '<p style="font-size: 18px;margin:0;">本月进度</p>' + '<p id="text" style="font-size: 48px;margin:0;font-weight: bold;">'+_this.cal+'%</p>' + '</div>'
            });
            chart.render();
        }
    }
}
</script>

<style scoped>

</style>