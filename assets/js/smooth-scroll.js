// Modified From: https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js
// The core code was not modified; only the three buttons—go home, back, and go top—were adapted.
(function (root, smoothScroll) {
  'use strict';

  // --- 这里的变量你可以自由调节 ---
  var SCROLL_CONFIG = {
      duration: 350, // 统一控制点击跳转、回到顶部、后退的速度 (ms)，Smooth speed
  };

  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }

  if (typeof define === 'function' && define.amd) {
    define(function() { return smoothScroll(SCROLL_CONFIG); });
  } else if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = smoothScroll(SCROLL_CONFIG);
  } else {
    root.smoothScroll = smoothScroll(SCROLL_CONFIG);
  }

})(this, function(SCROLL_CONFIG){
'use strict';

if (typeof window !== 'object') return;

if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }

// 核心修复：解码中文锚点
var getElementByHash = function(hash) {
    if (!hash) return null;
    // 去掉开头的 #，并进行 URL 解码
    var id = decodeURIComponent(hash.substring(1));
    return document.getElementById(id);
};

var getTop = function(element, start) {
    if(element.nodeName === 'HTML') return -start
    return element.getBoundingClientRect().top + start
}

var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

var position = function(start, end, elapsed, duration) {
    if (elapsed > duration) return end;
    return start + (end - start) * easeInOutCubic(elapsed / duration);
}

var smoothScroll = function(el, duration, callback, context){
    duration = duration || SCROLL_CONFIG.duration;
    context = context || window;
    var start = context.scrollTop || window.pageYOffset;

    if (typeof el === 'number') {
      var end = parseInt(el);
    } else {
      var end = getTop(el, start);
    }

    var clock = Date.now();
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function(fn){window.setTimeout(fn, 15);};

    var step = function(){
        var elapsed = Date.now() - clock;
        if (context !== window) {
          context.scrollTop = position(start, end, elapsed, duration);
        }
        else {
          window.scroll(0, position(start, end, elapsed, duration));
        }

        if (elapsed > duration) {
            if (typeof callback === 'function') {
                callback(el);
            }
        } else {
            requestAnimationFrame(step);
        }
    }
    step();
}

var linkHandler = function(ev) {
    if (!ev.defaultPrevented) {
        // 只有当目标元素存在时才拦截默认行为
        var node = getElementByHash(this.hash);
        if (!node) return; 

        ev.preventDefault();

        if (location.hash !== this.hash) window.history.pushState(null, null, this.hash);
        
        smoothScroll(node, SCROLL_CONFIG.duration, function (el) {
            location.replace('#' + el.id);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'), a;
    for(var i=internal.length; a=internal[--i];){
        a.addEventListener("click", linkHandler, false);
    }

    var goTopBtn = document.querySelector('.gotop');
    if (goTopBtn) {
        goTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(0, SCROLL_CONFIG.duration);
        });
    }

    window.addEventListener('popstate', function (event) {
        var hash = location.hash;
        if (hash) {
            var node = getElementByHash(hash);
            if (node) {
                setTimeout(function() {
                    smoothScroll(node, SCROLL_CONFIG.duration); 
                }, 10);
            }
        } else {
            setTimeout(function() {
                smoothScroll(0, SCROLL_CONFIG.duration);
            }, 10);
        }
    });
});

return smoothScroll;

});