// Modified From: https://github.com/alicelieutier/smoothScroll/blob/master/smoothscroll.js
// The core code was not modified; only the three buttons—go home, back, and go top—were adapted.
(function (root, smoothScroll) {
  'use strict';

  var SCROLL_CONFIG = {
      duration: 360, // 统一控制点击跳转、回到顶部、后退的速度 (ms),Smooth speed
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
    // 使用全局变量作为默认值
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
        ev.preventDefault();

        if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
        
        var node = document.getElementById(this.hash.substring(1))
        if (!node) return; 

        
        smoothScroll(node, SCROLL_CONFIG.duration, function (el) {
            location.replace('#' + el.id)
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
            var node = document.getElementById(hash.substring(1));
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