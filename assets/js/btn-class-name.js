// 负责首页分类模块的圆角以及根据分类长度动态设置
// 当flex子项（分类按钮）发生换行时，首行末尾按钮，中间行首尾两个按钮，末行首个按钮会显示出直角边框，所以这个js是给这些元素添加类名，以便设置样式

// 添加类名的主要函数
function AddClassName() {
    const container = document.querySelector('.btn-group');
    const items = container.querySelectorAll('.btn');
    const rowTopPositions = [];
    const rows = [];

    // 找出每行元素
    items.forEach(item => {
        const top = item.offsetTop;
        if (!rowTopPositions.includes(top)) {
            rowTopPositions.push(top);
            rows.push([]);
        }
        const currentRowIndex = rowTopPositions.indexOf(top);
        rows[currentRowIndex].push(item);
    });

    // 清除之前的类名
    items.forEach(item => {
        item.classList.remove('row-first', 'row-last');
    });

    // 为第一行最后一个元素添加类名
    if (rows.length > 0) {
        const firstRow = rows[0];
        if (firstRow.length > 0) {
            firstRow[firstRow.length - 1].classList.add('row-last');
        }
    }

    // 为中间行的第一个和最后一个元素添加类名
    if (rows.length > 2) {
        for (let i = 1; i < rows.length - 1; i++) {
            const row = rows[i];
            if (row.length > 0) {
                row[0].classList.add('row-first');
                row[row.length - 1].classList.add('row-last');
            }
        }
    }

    // 为最后一行第一个元素添加类名
    if (rows.length > 0) {
        const lastRow = rows[rows.length - 1];
        if (lastRow.length > 0) {
            lastRow[0].classList.add('row-first');
        }
    }
}

// 在页面加载时调用一次
window.addEventListener('load', AddClassName);

// 在改变分辨率时调用 AddClassName

window.addEventListener('resize', function() {
    AddClassName();
});