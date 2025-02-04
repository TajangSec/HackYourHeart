document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
      // 直接获取相邻的highlight元素
      var highlightDiv = this.parentElement.parentElement.parentElement.nextElementSibling;
      
      // 验证元素有效性
      if (highlightDiv && highlightDiv.classList.contains('highlight')) {
        this.classList.toggle('active');
        highlightDiv.classList.toggle('hide');
      }
    });
  });