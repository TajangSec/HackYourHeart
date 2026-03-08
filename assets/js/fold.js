/* 修改后的 fold.js */
window.initCodeFolding = () => {
    document.querySelectorAll('.icon').forEach(icon => {
        // 防止重复绑定
        if (icon.dataset.foldBound) return;
        icon.dataset.foldBound = "true";

        icon.addEventListener('click', function() {
            // 直接获取相邻的 highlight 元素
            var highlightDiv = this.parentElement.parentElement.parentElement.nextElementSibling;
            
            // 验证元素有效性
            if (highlightDiv && highlightDiv.classList.contains('highlight')) {
                this.classList.toggle('active');
                highlightDiv.classList.toggle('hide');
            }
        });
    });
};

// 页面加载时尝试初始化（针对非加密文章）
document.addEventListener('DOMContentLoaded', window.initCodeFolding);