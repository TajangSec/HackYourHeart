/* 修改后的 lazy-load.js */
window.initLazyLoad = function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // 检查是否已经设置，避免对已处理的图片进行重复操作
        if (img.getAttribute('loading') !== 'lazy') {
            img.setAttribute('loading', 'lazy');
        }
    });
};

// 页面正常加载时执行（针对未加密内容）
document.addEventListener('DOMContentLoaded', window.initLazyLoad);