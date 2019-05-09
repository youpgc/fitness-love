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

const tool = {
    dataURItoBlob: function(dataURI) { // base64 解码
        let byteString = window.atob(dataURI.split(',')[1]);
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        let T = mimeString.split('/')[1];
        let ab = new ArrayBuffer(byteString.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    },
    getFileURL: function(file) { //文件生成链接
        var getUrl = null;  
        if (window.createObjectURL != undefined) { // basic
                  getUrl = window.createObjectURL(file);   } else if (window.URL != undefined) { // mozilla(firefox)
                  getUrl = window.URL.createObjectURL(file);   } else if (window.webkitURL != undefined) { // webkit or chrome
                  getUrl = window.webkitURL.createObjectURL(file);   }  
        return getUrl;
    }
}

export default tool;