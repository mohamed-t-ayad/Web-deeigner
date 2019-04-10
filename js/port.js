/* global console $ */

/**** Function for animat scroll*******/
/*------------------------ animateScrollTopTo ---------------------------*/
var animateScrollTopTo = (function () {
    "use strict";
    var requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {return setTimeout(callback, 1000 / 60); };
    function getHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
    }
    function getMaxScrollTop() {
        return getHeight() - window.innerHeight;
    }
    function getScrollTop() {
        return window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
    }
    function animateScrollTopTo(y) {
        if (animateScrollTopTo.isAnimate) {return false; }
        animateScrollTopTo.isAnimate = true;
        var scrollTop = getScrollTop(),
            maxScrollTop = getMaxScrollTop(),
            t = 0,
            max = 100;
        if (y < 0) {y = 0; }
        if (y > maxScrollTop) {y = maxScrollTop; }
        function update() {
            window.scrollTo(0, (y - scrollTop) * t / max + scrollTop);
            if (t >= max || getScrollTop() === y) {
                window.scrollTo(0, y);
                animateScrollTopTo.isAnimate = false;
            } else {
                requestAnimationFrame(update);
            }
            t += 1;
        }
        requestAnimationFrame(update);
    }
    animateScrollTopTo.isAnimate = false;
    return animateScrollTopTo;
}());
/******* Start scroll to li  ************/
function animateScrollTopTo(y) {
    "use strict";
    if (animateScrollTopTo.isAnimate) {return false; }
    function funcX1ToX2(x1, x2, max, t) {// t in [0, max]
        return Math.round((x2 - x1) * (1 - Math.cos(Math.PI * t / max)) / 2 + x1);
    }
    function getHeight() {
        var body = document.body,
            html = document.documentElement;
        return Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
    );
  }
  function getMaxScrollTop() {
    return getHeight() - window.innerHeight;
  }
  function getScrollTop() {
    var t = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
    return (t === undefined) ? (0) : (t);
  }
  animateScrollTopTo.isAnimate = true;
  var scrollTop = getScrollTop(),
      maxScrollTop = getMaxScrollTop(),
      t = 0,
      max = 60,
      u = Date.now();
  if (y < 0) {y = 0; }
  if (y > maxScrollTop) {y = maxScrollTop; }
  function interval() {
    window.scrollTo(0, funcX1ToX2(scrollTop, y, max, t));
    if (!(t >= max || getScrollTop() === y)) {
      window.requestAnimationFrame(interval);
    } else {
      window.scrollTo(0, y);
      animateScrollTopTo.isAnimate = false;
      //window.console.log((Date.now() - u) / 1000);
    }
    t += 1;
  }
  window.requestAnimationFrame(interval);
}
animateScrollTopTo.isAnimate = false;

/*---------- how to use ----------*/
Array.prototype.forEach.call(document.querySelectorAll("nav a"), function (a) {
  "use strict";
  a.addEventListener("click", function (e) {
  	e.preventDefault();
    animateScrollTopTo(document.querySelector(this.getAttribute("href")).offsetTop);
  });
});













// start top button


var topButton = document.getElementById('top');

window.onscroll = function () {
    
    'use strict';
    
    
    
    if (window.pageYOffset >= 2000) {
        
        topButton.style.display = 'block';
        
    } else {
         
        topButton.style.display = "none";
    }
};

// Trriger the button 

topButton.onclick = function totop() {
    
    'use strict';
    
    animateScrollTopTo(0);
    
};


/************* Start Jquery *****/
// trigger Slider for what people Say 

(function autoslider() {
    
    'use strict';
    
    $(".testmonials .slide .shown").each(function () {
        
        if (!$(this).is(':last-child')) {
            
            $(this).delay(3000).fadeOut(1000, function () {
                
                $(this).removeClass('shown').next().addClass('shown').fadeIn();
                
                autoslider();
            });
        } else {
            
            $(this).delay(3000).fadeOut(1000, function () {
                
                $(this).removeClass('shown');
                
                $('.testmonials .slide div').eq(0).addClass('shown').fadeIn();
                
                autoslider();
            });
        }
    });
}());




// Start nice scroll side 
//$("html").niceScroll();


$(document).ready(

    function () {
        
        'use strict';
        
        $("html").niceScroll({
            
            cursorcolor: '#4aabf0',
            
            cursorwidth: '6px',
            zindex: '9999'
            
        });
    }
);


 /*************************** Start Loading section ****************************/

$(window).on('load', function () {
    
    'use strict';
    
    var i = 0;

    function typescript() {
    
        var typewriter = setInterval(function () {
        
            var mytext = 'Welcom to \"MOHAMED AYAD\" Worled Please wait the website is Now Loading',
    
                para = document.getElementById('text');
    
                
        
            para.textContent += mytext[i];
            
            i = i + 1;
        
            if (i > mytext.length - 1) {
            
                clearInterval(typewriter);
            }
        }, 100);
    }
    typescript();
    
    $(".load").fadeOut(1000);
    
});
















