document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.querySelector('.main-right .toc-div');
    const tocLinks = document.querySelectorAll('nav#TableOfContents a');
    const headers = document.querySelectorAll('main h1, main h2, main h3, main h4');
    
    // --- 核心变量：点击锁和计时器 ---
    let isClickScrolling = false;
    let scrollTimeout;

    const highlightTOC = (id) => {
        if (!id) return;
        tocLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active-toc', isActive);
            if (isActive) {
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    };

    // --- 1. 点击处理：彻底锁定并立即高亮 ---
    tocLinks.forEach(link => {
        link.addEventListener('click', () => {
            isClickScrolling = true; // 上锁
            const id = link.getAttribute('href').substring(1);
            highlightTOC(id); // 立即高亮点击项

            // 监听窗口滚动停止
            window.addEventListener('scroll', function handler() {
                window.clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isClickScrolling = false; // 只有完全停止滚动后才解锁
                    window.removeEventListener('scroll', handler);
                }, 100); // 100ms 无滚动即视为停止
            });
        });
    });

    // --- 2. 观察器逻辑 ---
    const observerOptions = {
        root: null,
        rootMargin: '-5% 0px -85% 0px', 
        threshold: [0, 1.0]
    };

    const observer = new IntersectionObserver(entries => {
        // 如果是由点击引起的自动滚动，直接无视所有经过的标题
        if (isClickScrolling) return;

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                highlightTOC(entry.target.id);
            }
        });
    }, observerOptions);

    headers.forEach(header => observer.observe(header));

    // --- 3. 初始化逻辑 ---
    const scrollPosition = window.scrollY;
    if (scrollPosition < 100) {
        if (headers.length > 0) highlightTOC(headers[0].id);
    } else {
        let currentId = '';
        for (const header of headers) {
            if (header.offsetTop <= scrollPosition + 150) {
                currentId = header.id;
            } else {
                break;
            }
        }
        highlightTOC(currentId);
    }
});