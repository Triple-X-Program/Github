// SMOOTH
function init(){if(document.body){var e=document.body,t=document.documentElement,n=window.innerHeight,o=e.scrollHeight;if(root=document.compatMode.indexOf("CSS")>=0?t:e,activeElement=e,initdone=!0,top!=self)frame=!0;else if(o>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){var r=!1,a=function(){r||t.scrollHeight==document.height||(r=!0,setTimeout(function(){t.style.height=document.height+"px",r=!1},500))};if(t.style.height="",setTimeout(a,10),addEvent("DOMNodeInserted",a),addEvent("DOMNodeRemoved",a),root.offsetHeight<=n){var i=document.createElement("div");i.style.clear="both",e.appendChild(i)}}if(document.URL.indexOf("mail.google.com")>-1){var l=document.createElement("style");l.innerHTML=".iu { visibility: hidden }",(document.getElementsByTagName("head")[0]||t).appendChild(l)}fixedback||disabled||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}function scrollArray(e,t,n,o){if(o||(o=1e3),directionCheck(t,n),acceleration){var r=+new Date,a=r-lastScroll;if(accelDelta>a){var i=(1+30/a)/2;i>1&&(i=Math.min(i,accelMax),t*=i,n*=i)}lastScroll=+new Date}if(que.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!pending){var l=e===document.body,c=function(){for(var r=+new Date,a=0,i=0,s=0;s<que.length;s++){var d=que[s],u=r-d.start,m=u>=animtime,f=m?1:u/animtime;pulseAlgorithm&&(f=pulse(f));var h=d.x*f-d.lastX>>0,p=d.y*f-d.lastY>>0;a+=h,i+=p,d.lastX+=h,d.lastY+=p,m&&(que.splice(s,1),s--)}l?window.scrollBy(a,i):(a&&(e.scrollLeft+=a),i&&(e.scrollTop+=i)),t||n||(que=[]),que.length?requestFrame(c,e,o/framerate+1):pending=!1};requestFrame(c,e,0),pending=!0}}function wheel(e){initdone||init();var t=e.target,n=overflowingAncestor(t);if(!n||e.defaultPrevented||isNodeName(activeElement,"embed")||isNodeName(t,"embed")&&/\.pdf/i.test(t.src))return!0;var o=e.wheelDeltaX||0,r=e.wheelDeltaY||0;o||r||(r=e.wheelDelta||0),Math.abs(o)>1.2&&(o*=stepsize/120),Math.abs(r)>1.2&&(r*=stepsize/120),scrollArray(n,-o,-r),e.preventDefault()}function keydown(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==key.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(isNodeName(t,"button")&&e.keyCode===key.spacebar)return!0;var o,r=0,a=0,i=overflowingAncestor(activeElement),l=i.clientHeight;switch(i==document.body&&(l=window.innerHeight),e.keyCode){case key.up:a=-arrowscroll;break;case key.down:a=arrowscroll;break;case key.spacebar:o=e.shiftKey?1:-1,a=-o*l*.9;break;case key.pageup:a=.9*-l;break;case key.pagedown:a=.9*l;break;case key.home:a=-i.scrollTop;break;case key.end:var c=i.scrollHeight-i.scrollTop-l;a=c>0?c+10:0;break;case key.left:r=-arrowscroll;break;case key.right:r=arrowscroll;break;default:return!0}scrollArray(i,r,a),e.preventDefault()}function mousedown(e){activeElement=e.target}function setCache(e,t){for(var n=e.length;n--;)cache[uniqueID(e[n])]=t;return t}function overflowingAncestor(e){var t=[],n=root.scrollHeight;do{var o=cache[uniqueID(e)];if(o)return setCache(t,o);if(t.push(e),n===e.scrollHeight){if(!frame||root.clientHeight+10<n)return setCache(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return setCache(t,e)}while(e=e.parentNode)}function addEvent(e,t,n){window.addEventListener(e,t,n||!1)}function removeEvent(e,t,n){window.removeEventListener(e,t,n||!1)}function isNodeName(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function directionCheck(e,t){e=e>0?1:-1,t=t>0?1:-1,(direction.x!==e||direction.y!==t)&&(direction.x=e,direction.y=t,que=[],lastScroll=0)}function pulse_(e){var t,n,o;return e*=pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*pulseNormalize}function pulse(e){return e>=1?1:0>=e?0:(1==pulseNormalize&&(pulseNormalize/=pulse_(1)),pulse_(e))}if(!jQuery(".enable_smoothscroll").length&&jQuery(window).width()>1024){var framerate=150,animtime=4e3,stepsize=200,pulseAlgorithm=!0,pulseScale=25,pulseNormalize=1,acceleration=!1,accelDelta=10,accelMax=1,keyboardsupport=!0,disableKeyboard=!1,arrowscroll=50,exclude="",disabled=!1,frame=!1,direction={x:0,y:0},initdone=!1,fixedback=!0,root=document.documentElement,activeElement,key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},que=[],pending=!1,lastScroll=+new Date,cache={};setInterval(function(){cache={}},1e4);var uniqueID=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),requestFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}();addEvent("mousedown",mousedown),addEvent("mousewheel",wheel),addEvent("load",init)}

// START USE STRICT
(function($) {
    "use strict"; // Start of use strict	
	
	$('.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

	
$(window).bind('scroll', function() {	
	// Offset for Main Navigation
	$('#mainNav').affix({
		offset: {
			top: 600
		}
	});
});


	// Initialize WOW.js Scrolling Animations
  $(window).load(function() {
   var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)  
		live:         false,       // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();
	});

	// Page Loader
	setTimeout(function(){
		$('body').addClass('loaded')
	}, 1000);
	
})(jQuery); // End of use strict