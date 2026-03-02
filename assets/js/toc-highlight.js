/* 修改后的 toc-highlight.js */
window.initTocHighlight = () => {
    // 重新获取解密后生成的 DOM 元素
    const tocLinks = document.querySelectorAll('nav#TableOfContents a');
    const headers = document.querySelectorAll('main h1, main h2, main h3, main h4');
    
    if (tocLinks.length === 0 || headers.length === 0) return;

    let isClickScrolling = false;
    let scrollTimeout;

    const highlightTOC = (id) => {
        if (!id) return;
        tocLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active-toc', isActive);
        });
    };

    // --- 1. 点击处理 ---
    tocLinks.forEach(link => {
        link.addEventListener('click', () => {
            isClickScrolling = true;
            const id = link.getAttribute('href').substring(1);
            highlightTOC(id);

            window.addEventListener('scroll', function handler() {
                window.clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isClickScrolling = false;
                    window.removeEventListener('scroll', handler);
                }, 100);
            });
        });
    });

    // --- 2. 观察器逻辑 ---
    const observer = new IntersectionObserver(entries => {
        if (isClickScrolling) return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                highlightTOC(entry.target.id);
            }
        });
    }, { rootMargin: '-5% 0px -85% 0px', threshold: [0, 1.0] });

    headers.forEach(header => observer.observe(header));

    // --- 3. 初始化位置检查 ---
    const scrollPosition = window.scrollY;
    let currentId = '';
    for (const header of headers) {
        if (header.offsetTop <= scrollPosition + 150) {
            currentId = header.id;
        } else { break; }
    }
    highlightTOC(currentId);
};

// 页面正常加载时依然尝试初始化（针对未加密文章）
document.addEventListener('DOMContentLoaded', window.initTocHighlight);