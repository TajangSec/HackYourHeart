document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.querySelector('.main-right .toc-div'); // 你的TOC容器
    const tocLinks = document.querySelectorAll('nav#TableOfContents a');
    const headers = document.querySelectorAll('main h1, main h2, main h3, main h4');

    // --- 核心高亮函数 ---
    const highlightTOC = (id) => {
        if (!id) return;
        tocLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active-toc', isActive);
            if (isActive) {
                // 自动滚动 TOC 容器，确保高亮项可见
                link.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    };

    // --- 1. 使用 IntersectionObserver 监听滚动 ---
    const observerOptions = {
        root: null,
        rootMargin: '-5% 0px -85% 0px', // 灵敏度控制：触发线在屏幕上方 5%-15% 处
        threshold: [0, 1.0]
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // 当标题进入设定的触发区域时
            if (entry.isIntersecting) {
                highlightTOC(entry.target.id);
            }
        });
    }, observerOptions);

    headers.forEach(header => observer.observe(header));

    // --- 2. 修复 Bug：页面初始化时的逻辑 ---
    // 如果页面已经在顶部或某个位置，手动寻找当前最合适的标题
    const scrollPosition = window.scrollY;

    if (scrollPosition < 100) {
        // 如果在页面顶部，直接高亮第一个标题
        if (headers.length > 0) {
            highlightTOC(headers[0].id);
        }
    } else {
        // 如果页面刷新在中间，寻找当前视口上方最近的一个标题
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