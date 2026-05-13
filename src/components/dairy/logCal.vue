<template>
    <div>
        <canvas class="per100" :id="cal.date"></canvas>
    </div>
</template>

<script>
import F2 from '@antv/f2';
export default {
    name: 'logCal',
    props: ['cal'],
    data(){
        return {
            percent: 0,
        }
    },
    mounted(){
        this.init();
    },
    methods: {
        init(){
            const _this = this;
            const calories = Number(_this.cal.calories) || 1;
            _this.percent = Math.min(((_this.cal.eaten / calories).toFixed(2)) * 100, 100);
            const _F = F2,
                Shape = _F.Shape,
                G = _F.G,
                Util = _F.Util,
                Global = _F.Global;
            const Vector2 = G.Vector2;
            Shape.registerShape('interval', 'polar-tick', {
                draw: function draw(cfg, container) {
                    const points = this.parsePoints(cfg.points);
                    const style = Util.mix({
                        stroke: cfg.color
                    }, Global.shape.interval, cfg.style);

                    let newPoints = points.slice(0);
                    if (this._coord.transposed) {
                        newPoints = [points[0], points[3], points[2], points[1]];
                    }

                    const center = cfg.center;
                    const x = center.x,
                        y = center.y;
                    const v = [1, 0];
                    const v0 = [newPoints[0].x - x, newPoints[0].y - y];
                    const v1 = [newPoints[1].x - x, newPoints[1].y - y];
                    const v2 = [newPoints[2].x - x, newPoints[2].y - y];

                    let startAngle = Vector2.angleTo(v, v1);
                    let endAngle = Vector2.angleTo(v, v2);
                    const r0 = Vector2.length(v0);
                    const r = Vector2.length(v1);

                    if (startAngle >= 1.5 * Math.PI) {
                        startAngle = startAngle - 2 * Math.PI;
                    }

                    if (endAngle >= 1.5 * Math.PI) {
                        endAngle = endAngle - 2 * Math.PI;
                    }

                    const lineWidth = r - r0;
                    const newRadius = r - lineWidth / 2;
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
            const data = [{
                const: 'a',
                actual: _this.percent,
                expect: 100
            }];
            _this.chart = new F2.Chart({
                id: _this.cal.date,
                padding: [0,0,0,0],
                pixelRatio: window.devicePixelRatio
            });
            _this.chart.source(data, {
                actual: {
                    max: 100,
                    min: 0,
                    nice: false
                }
            });
            _this.chart.coord('polar', {
                transposed: true,
                innerRadius: 0.8,
                startAngle: - 1.3 * Math.PI,
                endAngle: 0.3 * Math.PI
            });
            _this.chart.axis(false);
            _this.chart.interval().position('const*expect').shape('polar-tick').size(8).color('#e9e9e9').animate(false); // 背景条
            _this.chart.interval().position('const*actual').shape('polar-tick').size(8).color('l(0) 0:#ff5e38 1:#ffaf41').animate({
                appear: {
                    duration: 1100,
                    easing: 'linear',
                    animation: function animation(shape, animateCfg) {
                        let startAngle = shape.attr('startAngle');
                        let endAngle = shape.attr('endAngle');
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
                            const str = document.getElementById(_this.cal.date+'1');
                            if(str){
                                str.innerHTML = parseInt(frame * _this.cal.calories);
                            }
                        });
                    }
                }
            }); // 实际进度
            const str = `<div class="log-master">
                            <div class="log-master-label" id="${_this.cal.date+'1'}">0</div>
                            <div class="log-master-span">Calories left</div>
                            <div class="log-master-tag">DETAIL</div>
                        </div>`
            _this.chart.guide().html({
                position: ['50%', '80%'],
                // html: '<div style="width: 3rem;color: #ccc;white-space: nowrap;text-align:center;">' + '<p style="font-size: 18px;margin:0;">Calories left</p>' + '<p id="'+_this.cal.date+'1" style="font-size: 0.48rem;color:#282c37;margin:0;font-weight: bold;">0</p>' + '</div>'
                html: str
            });
            _this.chart.render();
        }
    },
    beforeDestroy(){
        if(this.chart){
            this.chart.destroy();
        }
    }
}
</script>

<style>
    .per100{
        width: 100%;
        height: 100%;
    }
    .log-master{
        width: 3rem;
        height: 2.6rem;
        position: relative;
    }
    .log-master-label{
        font-size: 0.68rem;
        color: #282c37;
    }
    .log-master-span{
        font-size: 0.26rem;
        color: #6d819c;
    }
    .log-master-tag{
        position: absolute;
        padding: 0 0.1rem;
        line-height: 0.3rem;
        border-radius: 0.15rem;
        border: 1px solid #ddd;
        font-size: 0.2rem;
        font-weight: bold;
        color: #6d819c;
        left: 50%;
        bottom: 32%;
        transform: translate(-50%,0);
    }
</style>