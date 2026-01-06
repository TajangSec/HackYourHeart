// 在typora中缩放图片时，插入图片的格式从markdown变成<img style="zoom:50%" src=>这种语法，导致img上没有data-fancybox属性
// 此js给无data-fancybox的img自动添加它

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.post-html img');
    images.forEach(img => {
        if (!img.hasAttribute('data-fancybox')) {
            img.setAttribute('data-fancybox', 'gallery');
        }
    });
});