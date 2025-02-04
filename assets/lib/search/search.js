    //搜索功能实现
    // 获取 DOM 元素
    const searchInput = document.getElementById("fastSearch");
    const searchResults = document.getElementById("search-results");
  
    // 加载 index.json 数据
    fetch("/index.json")
      .then((response) => response.json())
      .then((data) => {
        // 初始化 Fuse.js
        const fuse = new Fuse(data, {
          keys: ["title", "description", "contents"], // 搜索的字段
          includeScore: true, // 包含匹配分数
          threshold: 0.2, // 匹配阈值
          ignoreLocation: true, // 忽略匹配位置
        });
  
        // 监听输入框输入事件
        searchInput.addEventListener("input", (event) => {
            const query = event.target.value.trim();
          
            if (query.length === 0) {
              searchResults.innerHTML = ""; // 清空结果
              return;
            }
          
            // 执行搜索
            const results = fuse.search(query);
          
            // 清空之前的搜索结果
            searchResults.innerHTML = "";
          
            // 显示搜索结果
            if (results.length > 0) {
              results.forEach((result) => {
                const li = document.createElement("li");
                li.className = "list-group-item";
                li.innerHTML = `
                <a id="search-a" href="${result.item.permalink}">
                  <div class="d-flex align-items-center">
                    <!-- 封面图 -->
                    <div class="flex-shrink-0">
                      <img src="${result.item.cover}" alt="${result.item.title}" class="img-thumbnail" style="width: 100px; height: 60px;object-fit: cover;">
                    </div>
                    <!-- 标题和摘要 -->
                    <div class="flex-grow-1 ms-3">
                      <h5>${result.item.title}</h5>
                      <p>${highlightMatches(result.item.contents, query)}</p>
                    </div>
                  </div>
                  </a>
                `;
                searchResults.appendChild(li);
              });
            } else {
              const li = document.createElement("li");
              li.className = "list-group-item";
              li.textContent = "No results found.";
              searchResults.appendChild(li);
            }
          });
          //搜索栏失去焦点时清空搜索栏
        searchInput.addEventListener("blur", (event) => {
            const relatedTarget = event.relatedTarget; // 获取焦点转移的目标元素
            if (relatedTarget && relatedTarget.tagName === "A") {
              return; // 如果焦点转移到链接，不执行清除操作
            }
            searchInput.value = ""; // 清除搜索框内容
            searchResults.innerHTML="";
        });
      })

      .catch((error) => {
        console.error("Failed to load index.json:", error);
      });
      function highlightMatches(content, query) {
        if (!content) return ""; // 如果 content 为 undefined 或 null，返回空字符串
      
        const regex = new RegExp(`(${query})`, "gi"); // 创建正则表达式
        const match = regex.exec(content); // 查找匹配内容
      
        if (!match) return content.substring(0, 20) + "..."; // 如果没有匹配，返回前 20 个字符
      
        const matchStart = match.index; // 匹配内容的起始位置
        const matchEnd = matchStart + match[0].length; // 匹配内容的结束位置
      
        // 提取匹配内容前后的上下文
        const contextLength = 20; // 上下文长度
        const start = Math.max(0, matchStart - contextLength); // 上下文起始位置
        const end = Math.min(content.length, matchEnd + contextLength); // 上下文结束位置
      
        let excerpt = content.substring(start, end); // 提取摘要
      
        // 如果摘要不是从开头开始，添加省略号
        if (start > 0) {
          excerpt = "..." + excerpt;
        }
      
        // 如果摘要不是到结尾结束，添加省略号
        if (end < content.length) {
          excerpt = excerpt + "...";
        }
      
        // 高亮匹配内容
        excerpt = excerpt.replace(regex, "<mark>$1</mark>");
      
        return excerpt;
      }