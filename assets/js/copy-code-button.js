window.initCopyButtons = (clipboard) => {
    document.querySelectorAll("pre > code").forEach(function (codeBlock) {
        // 避免重复添加按钮
        if (codeBlock.parentElement.querySelector(".copy-code-button")) return;

        var button = document.createElement("button");
        button.className = "copy-code-button";
        button.innerText = "Copy";

        button.addEventListener("click", function () {
           const children = codeBlock.childNodes;
           let codeText = "";
           children.forEach(node => {
               codeText += (node.nodeType === Node.TEXT_NODE) ? node.textContent : node.childNodes[1].textContent;
           });

            clipboard.writeText(codeText).then(() => {
                button.innerText = "Copied!";
                setTimeout(() => { button.innerText = "Copy"; }, 2000);
            });
        });

        var codelan = codeBlock.parentElement.parentElement.previousElementSibling?.children[0]?.children[0];
        if (codelan) {
            codelan.insertAdjacentElement("afterend", button);
        } else {
            var highlight = codeBlock.parentNode.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        }
    });
};

document.addEventListener('DOMContentLoaded', () => {
    if (navigator && navigator.clipboard) {
        window.initCopyButtons(navigator.clipboard);
    }
});