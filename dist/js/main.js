function preventLinkDefault(){for(var t=document.getElementsByClassName("routing"),e=0;e<t.length;e++)t[e].addEventListener("click",function(t){t.preventDefault(),router.navigateTo(t.target.getAttribute("href"))})}function getEventListener(){var t=rates.getElementId("tab--info"),e=rates.getElementId("tab--services"),r=rates.getElementId("tab__content--info"),n=rates.getElementId("tab__content--services");t.classList.add("active"),r.classList.add("active");var o=function(){rates.toggleClass(t,"active"),rates.toggleClass(e,"active"),rates.toggleClass(r,"active"),rates.toggleClass(n,"active")};rates.eventHandler(t,"click",o),rates.eventHandler(e,"click",o);for(var i=rates.getElementClassName("tab__keypoints"),a=0;a<i.length;a++){console.log(a);var s=i[a];console.log(s),rates.eventHandler(s,"click",function(t){console.log(t),t.target.classList.contains("active")?(t.target.classList.remove("active"),t.target.nextElementSibling.setAttribute("aria-hidden",!0)):rates.accordion(t.target,"tab__keypoints","active","tab__description")},!1)}}var $jscomp$this=this;!function(t,e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():t.anime=e()}(this,function(){function t(t){if(!j.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t){return t.reduce(function(t,r){return t.concat(j.arr(r)?e(r):r)},[])}function r(e){return j.arr(e)?e:(j.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function n(t,e){return t.some(function(t){return t===e})}function o(t){var e,r={};for(e in t)r[e]=t[e];return r}function i(t,e){var r,n=o(t);for(r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function a(t,e){var r,n=o(t);for(r in e)n[r]=j.und(t[r])?e[r]:t[r];return n}function s(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var r=parseInt(e[2],16),e=parseInt(e[3],16);return"rgb("+t+","+r+","+e+")"}function u(t){function e(t,e,r){return 0>r&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:.5>r?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);t=parseInt(r[1])/360;var n=parseInt(r[2])/100,r=parseInt(r[3])/100;if(0==n)n=r=t=r;else{var o=.5>r?r*(1+n):r+n-r*n,i=2*r-o,n=e(i,o,t+1/3),r=e(i,o,t);t=e(i,o,t-1/3)}return"rgb("+255*n+","+255*r+","+255*t+")"}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function h(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}function l(t,e){return j.fnc(t)?t(e.target,e.id,e.total):t}function f(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return j.dom(t)&&n($,e)?"transform":j.dom(t)&&(t.getAttribute(e)||j.svg(t)&&t[e])?"attribute":j.dom(t)&&"transform"!==e&&f(t,e)?"css":null!=t[e]?"object":void 0}function p(t,e){var r=h(e),r=-1<e.indexOf("scale")?1:0+r;if(!(t=t.style.transform))return r;for(var n=[],o=[],i=[],a=/(\w+)\((.+?)\)/g;n=a.exec(t);)o.push(n[1]),i.push(n[2]);return t=i.filter(function(t,r){return o[r]===e}),t.length?t[0]:r}function g(t,e){switch(d(t,e)){case"transform":return p(t,e);case"css":return f(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function m(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r)return t;var n=c(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(r[0],"")),r[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function y(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function v(t){t=t.points;for(var e,r=0,n=0;n<t.numberOfItems;n++){var o=t.getItem(n);0<n&&(r+=y(e,o)),e=o}return r}function _(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return y({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return v(t);case"polygon":var e=t.points;return v(t)+y(e.getItem(e.numberOfItems-1),e.getItem(0))}}function b(t){return j.obj(t)&&t.hasOwnProperty("totalLength")}function k(t,e){function r(r){return r=void 0===r?0:r,t.el.getPointAtLength(1<=e+r?e+r:0)}var n=r(),o=r(-1),i=r(1);switch(t.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function w(t,e){var r,n=/-?\d*\.?\d+/g;if(r=b(t)?t.totalLength:t,j.col(r))r=j.rgb(r)?r:j.hex(r)?s(r):j.hsl(r)?u(r):void 0;else{var o=c(r),o=o?r.substr(0,r.length-o.length):r;r=e&&!/\s/g.test(r)?o+e:o}return r+="",{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:j.str(t)||e?r.split(n):[]}}function x(t,e){return 0===e.length?t[0]:e.reduce(function(e,r,n){return e+t[n-1]+(r||" ")})}function P(t){return(t?e(j.arr(t)?t.map(r):r(t)):[]).filter(function(t,e,r){return r.indexOf(t)===e})}function C(t){var e=P(t);return e.map(function(t,r){return{target:t,id:r,total:e.length}})}function S(t,e){var n=o(e);if(j.arr(t)){var i=t.length;2!==i||j.obj(t[0])?j.fnc(e.duration)||(n.duration=e.duration/i):t={value:t}}return r(t).map(function(t,r){return r=r?0:e.delay,t=j.obj(t)&&!b(t)?t:{value:t},j.und(t.delay)&&(t.delay=r),t}).map(function(t){return a(t,n)})}function I(t,e){var r,n={};for(r in t){var o=l(t[r],e);j.arr(o)&&(o=o.map(function(t){return l(t,e)}),1===o.length&&(o=o[0])),n[r]=o}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function L(t){return j.arr(t)?Q.apply(this,t):N[t]}function E(t,e){var r;return t.tweens.map(function(n){n=I(n,e);var o=n.value,i=g(e.target,t.name),a=r?r.to.original:i,a=j.arr(o)?o[0]:a,s=m(j.arr(o)?o[1]:o,a),i=c(s)||c(a)||c(i);return n.isPath=b(o),n.from=w(a,i),n.to=w(s,i),n.start=r?r.end:t.offset,n.end=n.start+n.delay+n.duration,n.easing=L(n.easing),n.elasticity=(1e3-Math.min(Math.max(n.elasticity,1),999))/1e3,j.col(n.from.original)&&(n.round=1),r=n})}function A(t,r){return e(t.map(function(t){return r.map(function(e){var r=d(t.target,e.name);if(r){var n=E(e,t);e={type:r,property:e.name,animatable:t,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})).filter(function(t){return!j.und(t)})}function M(t,e,r){var n="delay"===t?Math.min:Math.max;return e.length?n.apply(Math,e.map(function(e){return e[t]})):r[t]}function H(t){var e,r=i(O,t),n=i(R,t),o=C(t.targets),s=[],u=a(r,n);for(e in t)u.hasOwnProperty(e)||"targets"===e||s.push({name:e,offset:u.offset,tweens:S(t[e],n)});return t=A(o,s),a(r,{children:[],animatables:o,animations:t,duration:M("duration",t,n),delay:M("delay",t,n)})}function T(t){function e(){return window.Promise&&new Promise(function(t){return h=t})}function r(t){return d.reversed?d.duration-t:t}function n(t){for(var e=0,r={},n=d.animations,o={};e<n.length;){var i=n[e],a=i.animatable,s=i.tweens;o.tween=s.filter(function(e){return t<e.end})[0]||s[s.length-1],s=Math.min(Math.max(t-o.tween.start-o.tween.delay,0),o.tween.duration)/o.tween.duration,o.eased=isNaN(s)?1:o.tween.easing(s,o.tween.elasticity),o.round=o.tween.round,s=x(o.tween.to.numbers.map(function(t){return function(e,r){return r=t.tween.from.numbers[r],e=r+t.eased*(e-r),t.tween.isPath&&(e=k(t.tween.value,e)),t.round&&(e=Math.round(e*t.round)/t.round),e}}(o)),o.tween.to.strings),U[i.type](a.target,i.property,s,r,a.id),i.currentValue=s,e++,o={tween:o.tween,eased:o.eased,round:o.round}}if(r)for(var u in r)F||(F=f(document.body,"transform")?"transform":"-webkit-transform"),d.animatables[u].target.style[F]=r[u].join(" ");d.currentTime=t,d.progress=t/d.duration*100}function o(t){d[t]&&d[t](d)}function i(){d.remaining&&!0!==d.remaining&&d.remaining--}function a(t){var a=d.duration,f=d.offset,p=d.delay,g=d.currentTime,m=d.reversed,y=r(t);if(d.children.length){var v=d.children;if(y>=d.currentTime)for(var _=0;_<v.length;_++)v[_].seek(y);else for(_=v.length;_--;)v[_].seek(y)}y>=p&&(o("run"),d.began||(d.began=!0,o("begin"))),y>f&&y<a?n(y):(y<=f&&0!==g&&(n(0),m&&i()),y>=a&&g!==a&&(n(a),m||i())),o("update"),t>=a&&(d.remaining?(u=s,"alternate"===d.direction&&(d.reversed=!d.reversed)):(d.pause(),d.completed||(d.completed=!0,o("complete"),"Promise"in window&&(h(),l=e()))),c=0)}t=void 0===t?{}:t;var s,u,c=0,h=null,l=e(),d=H(t);return d.reset=function(){var t=d.direction,e=d.loop;for(d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.completed=!1,d.reversed="reverse"===t,d.remaining="alternate"===t&&1===e?2:e,n(0),t=d.children.length;t--;)d.children[t].reset()},d.tick=function(t){s=t,u||(u=s),a((c+s-u)*T.speed)},d.seek=function(t){a(r(t))},d.pause=function(){var t=B.indexOf(d);-1<t&&B.splice(t,1),d.paused=!0},d.play=function(){d.paused&&(d.paused=!1,u=0,c=r(d.currentTime),B.push(d),q||Z())},d.reverse=function(){d.reversed=!d.reversed,u=0,c=r(d.currentTime)},d.restart=function(){d.pause(),d.reset(),d.play()},d.finished=l,d.reset(),d.autoplay&&d.play(),d}var F,O={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},R={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},$="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),j={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||j.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return j.hex(t)||j.rgb(t)||j.hsl(t)}},Q=function(){function t(t,e,r){return(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t}return function(e,r,n,o){if(0<=e&&1>=e&&0<=n&&1>=n){var i=new Float32Array(11);if(e!==r||n!==o)for(var a=0;11>a;++a)i[a]=t(.1*a,e,n);return function(a){if(e===r&&n===o)return a;if(0===a)return 0;if(1===a)return 1;for(var s=0,u=1;10!==u&&i[u]<=a;++u)s+=.1;--u;var u=s+(a-i[u])/(i[u+1]-i[u])*.1,c=3*(1-3*n+3*e)*u*u+2*(3*n-6*e)*u+3*e;if(.001<=c){for(s=0;4>s&&0!==(c=3*(1-3*n+3*e)*u*u+2*(3*n-6*e)*u+3*e);++s)var h=t(u,e,n)-a,u=u-h/c;a=u}else if(0===c)a=u;else{var u=s,s=s+.1,l=0;do{h=u+(s-u)/2,c=t(h,e,n)-a,0<c?s=h:u=h}while(1e-7<Math.abs(c)&&10>++l);a=h}return t(a,r,o)}}}}(),N=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,r="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),n={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,r){return 1-t(1-e,r)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,r){return.5>e?t(2*e,r)/2:1-t(-2*e+2,r)/2}]},o={linear:Q(.25,.25,.75,.75)},i={};for(e in n)i.type=e,n[i.type].forEach(function(t){return function(e,n){o["ease"+t.type+r[n]]=j.fnc(e)?e:Q.apply($jscomp$this,e)}}(i)),i={type:i.type};return o}(),U={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,o){n[o]||(n[o]=[]),n[o].push(e+"("+r+")")}},B=[],q=0,Z=function(){function t(){q=requestAnimationFrame(e)}function e(e){var r=B.length;if(r){for(var n=0;n<r;)B[n]&&B[n].tick(e),n++;t()}else cancelAnimationFrame(q),q=0}return t}();return T.version="2.1.0",T.speed=1,T.running=B,T.remove=function(t){t=P(t);for(var e=B.length;e--;)for(var r=B[e],o=r.animations,i=o.length;i--;)n(t,o[i].animatable.target)&&(o.splice(i,1),o.length||r.pause())},T.getValue=g,T.path=function(e,r){var n=j.str(e)?t(e)[0]:e,o=r||100;return function(t){return{el:n,property:t,totalLength:_(n)*(o/100)}}},T.setDashoffset=function(t){var e=_(t);return t.setAttribute("stroke-dasharray",e),e},T.bezier=Q,T.easings=N,T.timeline=function(t){var e=T(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(r){var n=a(r,i(R,t||{}));n.targets=n.targets||t.targets,r=e.duration;var o=n.offset;n.autoplay=!1,n.offset=j.und(o)?r:m(o,r),e.began=!0,e.completed=!0,e.seek(n.offset),n=T(n),n.began=!0,n.completed=!0,n.duration>r&&(e.duration=n.duration),e.children.push(n)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},T.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},T}),function(t){"use strict";function e(e){var r=this._getSettings(e);return this.routes=r.routes,this.notFoundHandler=r.page404,this.mode=t.history&&t.history.pushState?r.mode:"hash",this.root="/"===r.root?"/":"/"+this._trimSlashes(r.root)+"/",this.beforeHook=r.hooks.before,this.securityHook=r.hooks.secure,this._pageState=null,this._currentPage=null,this._skipCheck=!1,this._action=null,"hash"===this.mode&&(this._historyStack=[],this._historyIdx=0,this._historyState="add"),this}e.Page=function(t,e,r,n,o){this.uri=t||"",this.query=e||{},this.params=r||[],this.state=n||null,this.options=o||{}},e.prototype._getSettings=function(t){var e={},r={routes:[],mode:"history",root:"/",hooks:{before:function(){},secure:function(){return!0}},page404:function(t){console.error({page:t,message:"404. Page not found"})}};return t=t||{},["routes","mode","root","page404","hooks"].forEach(function(n){e[n]=t[n]||r[n]}),e},e.prototype._getHistoryFragment=function(){var e=decodeURI(t.location.pathname);return"/"!==this.root&&(e=e.replace(this.root,"")),this._trimSlashes(e)},e.prototype._getHashFragment=function(){var e=t.location.hash.substr(1).replace(/(\?.*)$/,"");return this._trimSlashes(e)},e.prototype._getFragment=function(){return"history"===this.mode?this._getHistoryFragment():this._getHashFragment()},e.prototype._trimSlashes=function(t){return"string"!=typeof t?"":(""+t).replace(/\/$/,"").replace(/^\//,"")},e.prototype._page404=function(t){this._currentPage=new e.Page(t),this.notFoundHandler(t)},e.prototype._parseRouteRule=function(t){if("string"!=typeof t)return t;var e=this._trimSlashes(t),r=e.replace(/([\\\/\-\_\.])/g,"\\$1").replace(/\{[a-zA-Z]+\}/g,"(:any)").replace(/\:any/g,"[\\w\\-\\_\\.]+").replace(/\:word/g,"[a-zA-Z]+").replace(/\:num/g,"\\d+");return RegExp("^"+r+"$","i")},e.prototype._parseQuery=function(t){var e={};return"string"!=typeof t?e:("?"===t[0]&&(t=t.substr(1)),this._queryString=t,t.split("&").forEach(function(t){var r=t.split("=");""!==r[0]&&(void 0===r[1]&&(r[1]=!0),e[decodeURIComponent(r[0])]=r[1])}),e)},e.prototype._getHistoryQuery=function(){return this._parseQuery(t.location.search)},e.prototype._getHashQuery=function(){var e=t.location.hash.indexOf("?"),r=-1!==e?t.location.hash.substr(e):"";return this._parseQuery(r)},e.prototype._getQuery=function(){return"history"===this.mode?this._getHistoryQuery():this._getHashQuery()},e.prototype.add=function(t,e,r){return this.routes.push({rule:this._parseRouteRule(t),handler:e,options:r}),this},e.prototype.remove=function(t){var e=this;return"string"==typeof t&&(t=""+this._parseRouteRule(t)),this.routes.some(function(r,n){return(r.handler===t||""+r.rule===t)&&(e.routes.splice(n,1),!0)}),this},e.prototype.reset=function(){return this.routes=[],this.mode=null,this.root="/",this._pageState={},this.removeUriListener(),this},e.prototype._pushHistory=function(){var t=this,e=this._getFragment();"hash"===this.mode&&("add"===this._historyState&&(this._historyIdx!==this._historyStack.length-1&&this._historyStack.splice(this._historyIdx+1),this._historyStack.push({path:e,state:t._pageState}),this._historyIdx=this._historyStack.length-1),this._historyState="add")},e.prototype._unloadCallback=function(t){var e;return this._skipCheck?!t||Promise.resolve(!0):this._currentPage&&this._currentPage.options&&this._currentPage.options.unloadCb?(e=this._currentPage.options.unloadCb(this._currentPage,t),!t||e instanceof Promise?e:e?Promise.resolve(e):Promise.reject(e)):!t||Promise.resolve(!0)},e.prototype._findRoute=function(){var r=this,n=this._getFragment();return this.routes.some(function(o){var i=n.match(o.rule);if(i){i.shift();var a=r._getQuery(),s=new e.Page(n,a,i,r._pageState,o.options);return!!r.securityHook(s)&&(r._currentPage=s,r._skipCheck?(r._skipCheck=!1,!0):(r.beforeHook(s),o.handler.apply(s,i),r._pageState=null,t.onbeforeunload=function(t){return r._unloadCallback(!1)?void 0:(t.returnValue=!0,!0)},!0))}return!1})},e.prototype._treatAsync=function(){var t;t=this._currentPage.options.unloadCb(this._currentPage,!0),t instanceof Promise||(t=t?Promise.resolve(t):Promise.reject(t)),t.then(this._processUri.bind(this)).catch(this._resetState.bind(this))},e.prototype._resetState=function(){this._skipCheck=!0,this.navigateTo(this._current,this._currentPage.state,!0)},e.prototype._processUri=function(){var t=this._getFragment();this._current=t,this._pushHistory(),this._findRoute.call(this)||this._page404(t)},e.prototype.check=function(){return this._skipCheck?this:(this._currentPage&&this._currentPage.options&&this._currentPage.options.unloadCb?this._treatAsync():this._processUri(),this)},e.prototype.addUriListener=function(){return"history"===this.mode?t.onpopstate=this.check.bind(this):t.onhashchange=this.check.bind(this),this},e.prototype.removeUriListener=function(){return t.onpopstate=null,t.onhashchange=null,this},e.prototype.navigateTo=function(e,r,n){return e=this._trimSlashes(e)||"",this._pageState=r||null,this._skipCheck=!!n,"history"===this.mode?(history.pushState(r,null,this.root+this._trimSlashes(e)),this.check()):(t.location.hash=e,this)},e.prototype.refresh=function(){if(!this._currentPage)return this;var t=this._currentPage.uri+"?"+this._queryString;return this.navigateTo(t,this._currentPage.state)},e.prototype.back=function(){return"history"===this.mode?(t.history.back(),this):this.go(this._historyIdx-1)},e.prototype.forward=function(){return"history"===this.mode?(t.history.forward(),this):this.go(this._historyIdx+1)},e.prototype.go=function(e){if("history"===this.mode)return t.history.go(e),this;var r=this._historyStack[e];return r?(this._historyIdx=e,this._historyState="hold",this.navigateTo(r.path,r.state)):this},t.Router=e}(window);var rates={modalClose:document.getElementById("modal--close"),getElementId:function(t){return document.getElementById(t)},getElementClassName:function(t){return document.getElementsByClassName(t)},eventHandler:function(t,e,r){t.addEventListener(e,r,!1)},removeClasses:function(t,e){var r=this.getElementClassName(t);console.log(r);for(var n=0;n<r.length;n++)r[n].classList.remove(e)},addClass:function(t,e){t.classList.add(e)},toggleClass:function(t,e){t.classList.toggle(e)},removeAttr:function(t,e,r){var n=this.getElementClassName(t);console.log(n);for(var o=0;o<n.length;o++)n[o].setAttribute(e,r)},closeModal:function(){document.body.classList.remove("modal--open"),document.getElementById("modal").classList.remove("open")},openModal:function(t,e,r){document.body.classList.add("modal--open"),this.removeClasses(e,r),document.getElementById("modal").classList.add("open"),this.addClass(t,r)},accordion:function(t,e,r,n){this.removeClasses(e,r),this.removeAttr(n,"aria-hidden",!0),this.addClass(t,r),t.nextElementSibling.setAttribute("aria-hidden",!1)}},router=new Router({mode:"history",page404:function(t){console.log('"/'+t+'" Page not found')}}),xmlhttp=new XMLHttpRequest,method="GET",content__container=document.getElementById("content__container"),getRoute=function(t){content__container.innerHTML="",xmlhttp.open(method,t,!0),xmlhttp.onload=function(){content__container.innerHTML=xmlhttp.response},xmlhttp.send()};router.add("",function(){console.log("home page"),getRoute("homepage.html"),setTimeout(function(){preventLinkDefault(),console.log("prevent default!")},250)}).add("seniorcare",function(){console.log("senior care page"),getRoute("seniorcare.html"),setTimeout(function(){getEventListener()},250)}).add("childcare",function(){console.log("childcare page"),getRoute("childcare.html"),setTimeout(function(){getEventListener()},250)}).check().addUriListener(),window.router=router;