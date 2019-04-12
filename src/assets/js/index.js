window.onresize = function() {
    calcFontSize();
};

window.onload = function() {
    calcFontSize();
};

function calcFontSize() {
    var w = document.body.clientWidth;
    var fs = (Math.max(320, w) / 750) * 100;
    document.body.style.fontSize = fs + 'px';
}