// 在typora中缩放图片时，插入图片的格式从markdown变成<img style="zoom:50%" src=>
// 这种html语法，不会触发 render-image.html ,导致img上没有data-fancybox属性
// 此js给无data-fancybox的img自动添加它
// 注意，只给post-html下的 img 添加，故正文的图片有，而 about 页面的头像未被添加
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.post-html img');
    images.forEach(img => {
        // 增加逻辑：如果父元素或祖先元素已经是 <a> 标签且带 data-fancybox，则跳过
        if (!img.closest('a[data-fancybox]') && !img.hasAttribute('data-fancybox')) {
            img.setAttribute('data-fancybox', 'gallery');
        }
    });
});