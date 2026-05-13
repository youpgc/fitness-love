/**
 * 工具函数集合
 */

// 使用 addEventListener 避免覆盖其他脚本的事件监听
window.addEventListener('resize', calcFontSize);
window.addEventListener('load', calcFontSize);

/**
 * 计算根元素字体大小（移动端适配）
 */
function calcFontSize() {
    const w = document.body.clientWidth;
    const fs = (Math.max(320, w) / 750) * 100;
    document.body.style.fontSize = fs + 'px';
}

const tool = {
    /**
     * Base64 转 Blob
     * @param {string} dataURI - base64 编码的字符串
     * @returns {Blob|null}
     */
    dataURItoBlob(dataURI) {
        if (!dataURI || !dataURI.includes(',')) {
            return null;
        }
        const byteString = window.atob(dataURI.split(',')[1]);
        const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    },

    /**
     * 生成文件预览 URL
     * @param {Blob|File} file - 文件对象
     * @returns {string}
     */
    getFileURL(file) {
        if (!file) return '';
        try {
            return URL.createObjectURL(file);
        } catch (e) {
            console.error('生成文件URL失败:', e);
            return '';
        }
    }
};

export default tool;
