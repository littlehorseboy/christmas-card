webpackJsonp([0],{A5qe:function(t,e,r){(function(r){var n,a,i,o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,r){if(r.get||r.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=r.value)},o.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:void 0!==r&&null!=r?r:t},o.global=o.getGlobal(this),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(t){return o.SYMBOL_PREFIX+(t||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var t=o.global.Symbol.iterator;t||(t=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(t){var e=0;return o.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},o.iteratorPrototype=function(t){return o.initSymbolIterator(),(t={next:t})[o.global.Symbol.iterator]=function(){return this},t},o.array=o.array||{},o.iteratorFromArray=function(t,e){o.initSymbolIterator(),t instanceof String&&(t+="");var r=0,n={next:function(){if(r<t.length){var a=r++;return{value:e(a,t[a]),done:!1}}return n.next=function(){return{done:!0,value:void 0}},n.next()}};return n[Symbol.iterator]=function(){return n},n},o.polyfill=function(t,e,r,n){if(e){for(r=o.global,t=t.split("."),n=0;n<t.length-1;n++){var a=t[n];a in r||(r[a]={}),r=r[a]}(e=e(n=r[t=t[t.length-1]]))!=n&&null!=e&&o.defineProperty(r,t,{configurable:!0,writable:!0,value:e})}},o.polyfill("Array.prototype.keys",function(t){return t||function(){return o.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var u=this;a=[],void 0===(i="function"==typeof(n=function(){function t(t){if(!_.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var r=t.length,n=2<=arguments.length?arguments[1]:void 0,a=[],i=0;i<r;i++)if(i in t){var o=t[i];e.call(n,o,i,t)&&a.push(o)}return a}function r(t){return t.reduce(function(t,e){return t.concat(_.arr(e)?r(e):e)},[])}function n(e){return _.arr(e)?e:(_.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function a(t,e){return t.some(function(t){return t===e})}function i(t){var e,r={};for(e in t)r[e]=t[e];return r}function o(t,e){var r,n=i(t);for(r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function s(t,e){var r,n=i(t);for(r in e)n[r]=_.und(t[r])?e[r]:t[r];return n}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function f(t,e){return _.fnc(t)?t(e.target,e.id,e.total):t}function l(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function d(t,e){return _.dom(t)&&a(C,e)?"transform":_.dom(t)&&(t.getAttribute(e)||_.svg(t)&&t[e])?"attribute":_.dom(t)&&"transform"!==e&&l(t,e)?"css":null!=t[e]?"object":void 0}function p(t,r){switch(d(t,r)){case"transform":return function(t,r){var n=function(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(r);if(n=-1<r.indexOf("scale")?1:0+n,!(t=t.style.transform))return n;for(var a=[],i=[],o=[],u=/(\w+)\((.+?)\)/g;a=u.exec(t);)i.push(a[1]),o.push(a[2]);return(t=e(o,function(t,e){return i[e]===r})).length?t[0]:n}(t,r);case"css":return l(t,r);case"attribute":return t.getAttribute(r)}return t[r]||0}function g(t,e){var r=/^(\*=|\+=|-=)/.exec(t);if(!r)return t;var n=c(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(r[0],"")),r[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function h(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function v(t){t=t.points;for(var e,r=0,n=0;n<t.numberOfItems;n++){var a=t.getItem(n);0<n&&(r+=h(e,a)),e=a}return r}function m(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return h({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return v(t);case"polygon":var e=t.points;return v(t)+h(e.getItem(e.numberOfItems-1),e.getItem(0))}}function y(t,e){function r(r){return r=void 0===r?0:r,t.el.getPointAtLength(1<=e+r?e+r:0)}var n=r(),a=r(-1),i=r(1);switch(t.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(i.y-a.y,i.x-a.x)/Math.PI}}function b(t,e){var r,n=/-?\d*\.?\d+/g;if(r=_.pth(t)?t.totalLength:t,_.col(r))if(_.rgb(r)){var a=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);r=a?"rgba("+a[1]+",1)":r}else r=_.hex(r)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,r,n){return e+e+r+r+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+(t=parseInt(e[1],16))+","+parseInt(e[2],16)+","+(e=parseInt(e[3],16))+",1)"}(r):_.hsl(r)?function(t){function e(t,e,r){return 0>r&&(r+=1),1<r&&--r,r<1/6?t+6*(e-t)*r:.5>r?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(r[1])/360;var n=parseInt(r[2])/100,a=parseInt(r[3])/100;if(r=r[4]||1,0==n)a=n=t=a;else{var i=.5>a?a*(1+n):a+n-a*n,o=2*a-i;a=e(o,i,t+1/3),n=e(o,i,t),t=e(o,i,t-1/3)}return"rgba("+255*a+","+255*n+","+255*t+","+r+")"}(r):void 0;else a=(a=c(r))?r.substr(0,r.length-a.length):r,r=e&&!/\s/g.test(r)?a+e:a;return{original:r+="",numbers:r.match(n)?r.match(n).map(Number):[0],strings:_.str(t)||e?r.split(n):[]}}function w(t){return e(t=t?r(_.arr(t)?t.map(n):n(t)):[],function(t,e,r){return r.indexOf(t)===e})}function x(t,e){var r=i(e);if(_.arr(t)){var a=t.length;2!==a||_.obj(t[0])?_.fnc(e.duration)||(r.duration=e.duration/a):t={value:t}}return n(t).map(function(t,r){return r=r?0:e.delay,t=_.obj(t)&&!_.pth(t)?t:{value:t},_.und(t.delay)&&(t.delay=r),t}).map(function(t){return s(t,r)})}function A(t,e){var r;return t.tweens.map(function(n){var a=(n=function(t,e){var r,n={};for(r in t){var a=f(t[r],e);_.arr(a)&&1===(a=a.map(function(t){return f(t,e)})).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(n,e)).value,i=p(e.target,t.name),o=r?r.to.original:i,u=(o=_.arr(a)?a[0]:o,g(_.arr(a)?a[1]:a,o));i=c(u)||c(o)||c(i);return n.from=b(o,i),n.to=b(u,i),n.start=r?r.end:t.offset,n.end=n.start+n.delay+n.duration,n.easing=function(t){return _.arr(t)?E.apply(this,t):$[t]}(n.easing),n.elasticity=(1e3-Math.min(Math.max(n.elasticity,1),999))/1e3,n.isPath=_.pth(a),n.isColor=_.col(n.from.original),n.isColor&&(n.round=1),r=n})}function M(t,e,r,n){var a="delay"===t;return e.length?(a?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):a?n.delay:r.offset+n.delay+n.duration}function I(t){var n,a=o(P,t),i=o(k,t),u=function(t){var e=w(t);return e.map(function(t,r){return{target:t,id:r,total:e.length}})}(t.targets),c=[],f=s(a,i);for(n in t)f.hasOwnProperty(n)||"targets"===n||c.push({name:n,offset:f.offset,tweens:x(t[n],i)});return t=function(t,n){return e(r(t.map(function(t){return n.map(function(e){var r=d(t.target,e.name);if(r){var n=A(e,t);e={type:r,property:e.name,animatable:t,tweens:n,duration:n[n.length-1].end,delay:n[0].delay}}else e=void 0;return e})})),function(t){return!_.und(t)})}(u,c),s(a,{children:[],animatables:u,animations:t,duration:M("duration",t,a,i),delay:M("delay",t,a,i)})}function O(t){function r(){return window.Promise&&new Promise(function(t){return d=t})}function n(t){return g.reversed?g.duration-t:t}function a(t){for(var r=0,n={},a=g.animations,i=a.length;r<i;){var o=a[r],u=o.animatable,s=(c=o.tweens)[p=c.length-1];p&&(s=e(c,function(e){return t<e.end})[0]||s);for(var c=Math.min(Math.max(t-s.start-s.delay,0),s.duration)/s.duration,f=isNaN(c)?1:s.easing(c,s.elasticity),d=(c=s.to.strings,s.round),p=[],h=void 0,v=(h=s.to.numbers.length,0);v<h;v++){var m=void 0,b=(m=s.to.numbers[v],s.from.numbers[v]);m=s.isPath?y(s.value,f*m):b+f*(m-b);d&&(s.isColor&&2<v||(m=Math.round(m*d)/d)),p.push(m)}if(s=c.length)for(h=c[0],f=0;f<s;f++)d=c[f+1],v=p[f],isNaN(v)||(h=d?h+(v+d):h+(v+" "));else h=p[0];j[o.type](u.target,o.property,h,n,u.id),o.currentValue=h,r++}if(r=Object.keys(n).length)for(a=0;a<r;a++)S||(S=l(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[a].target.style[S]=n[a].join(" ");g.currentTime=t,g.progress=t/g.duration*100}function i(t){g[t]&&g[t](g)}function o(){g.remaining&&!0!==g.remaining&&g.remaining--}function u(t){var e=g.duration,u=g.offset,l=u+g.delay,h=g.currentTime,v=g.reversed,m=n(t);if(g.children.length){var y=g.children,b=y.length;if(m>=g.currentTime)for(var w=0;w<b;w++)y[w].seek(m);else for(;b--;)y[b].seek(m)}(m>=l||!e)&&(g.began||(g.began=!0,i("begin")),i("run")),m>u&&m<e?a(m):(m<=u&&0!==h&&(a(0),v&&o()),(m>=e&&h!==e||!e)&&(a(e),v||o())),i("update"),t>=e&&(g.remaining?(c=s,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,i("complete"),"Promise"in window&&(d(),p=r()))),f=0)}t=void 0===t?{}:t;var s,c,f=0,d=null,p=r(),g=I(t);return g.reset=function(){var t=g.direction,e=g.loop;for(g.currentTime=0,g.progress=0,g.paused=!0,g.began=!1,g.completed=!1,g.reversed="reverse"===t,g.remaining="alternate"===t&&1===e?2:e,a(0),t=g.children.length;t--;)g.children[t].reset()},g.tick=function(t){s=t,c||(c=s),u((f+s-c)*O.speed)},g.seek=function(t){u(n(t))},g.pause=function(){var t=L.indexOf(g);-1<t&&L.splice(t,1),g.paused=!0},g.play=function(){g.paused&&(g.paused=!1,c=0,f=n(g.currentTime),L.push(g),F||T())},g.reverse=function(){g.reversed=!g.reversed,c=0,f=n(g.currentTime)},g.restart=function(){g.pause(),g.reset(),g.play()},g.finished=p,g.reset(),g.autoplay&&g.play(),g}var S,P={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},k={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},C="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),_={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return _.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||_.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return _.hex(t)||_.rgb(t)||_.hsl(t)}},E=function(){function t(t,e,r){return(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t}return function(e,r,n,a){if(0<=e&&1>=e&&0<=n&&1>=n){var i=new Float32Array(11);if(e!==r||n!==a)for(var o=0;11>o;++o)i[o]=t(.1*o,e,n);return function(o){if(e===r&&n===a)return o;if(0===o)return 0;if(1===o)return 1;for(var u=0,s=1;10!==s&&i[s]<=o;++s)u+=.1;s=u+(o-i[--s])/(i[s+1]-i[s])*.1;var c=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e;if(.001<=c){for(u=0;4>u&&0!==(c=3*(1-3*n+3*e)*s*s+2*(3*n-6*e)*s+3*e);++u){var f=t(s,e,n)-o;s=s-f/c}o=s}else if(0===c)o=s;else{s=u,u=u+.1;var l=0;do{0<(c=t(f=s+(u-s)/2,e,n)-o)?u=f:s=f}while(1e-7<Math.abs(c)&&10>++l);o=f}return t(o,r,a)}}}}(),$=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,r="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),n={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,r){return 1-t(1-e,r)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,r){return.5>e?t(2*e,r)/2:1-t(-2*e+2,r)/2}]},a={linear:E(.25,.25,.75,.75)},i={};for(e in n)i.type=e,n[i.type].forEach(function(t){return function(e,n){a["ease"+t.type+r[n]]=_.fnc(e)?e:E.apply(u,e)}}(i)),i={type:i.type};return a}(),j={css:function(t,e,r){return t.style[e]=r},attribute:function(t,e,r){return t.setAttribute(e,r)},object:function(t,e,r){return t[e]=r},transform:function(t,e,r,n,a){n[a]||(n[a]=[]),n[a].push(e+"("+r+")")}},L=[],F=0,T=function(){function t(){F=requestAnimationFrame(e)}function e(e){var r=L.length;if(r){for(var n=0;n<r;)L[n]&&L[n].tick(e),n++;t()}else cancelAnimationFrame(F),F=0}return t}();return O.version="2.2.0",O.speed=1,O.running=L,O.remove=function(t){t=w(t);for(var e=L.length;e--;)for(var r=L[e],n=r.animations,i=n.length;i--;)a(t,n[i].animatable.target)&&(n.splice(i,1),n.length||r.pause())},O.getValue=p,O.path=function(e,r){var n=_.str(e)?t(e)[0]:e,a=r||100;return function(t){return{el:n,property:t,totalLength:m(n)*(a/100)}}},O.setDashoffset=function(t){var e=m(t);return t.setAttribute("stroke-dasharray",e),e},O.bezier=E,O.easings=$,O.timeline=function(t){var e=O(t);return e.pause(),e.duration=0,e.add=function(r){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),n(r).forEach(function(r){var n=s(r,o(k,t||{}));n.targets=n.targets||t.targets,r=e.duration;var a=n.offset;n.autoplay=!1,n.direction=e.direction,n.offset=_.und(a)?r:g(a,r),e.began=!0,e.completed=!0,e.seek(n.offset),(n=O(n)).began=!0,n.completed=!0,n.duration>r&&(e.duration=n.duration),e.children.push(n)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},O.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},O})?n.apply(e,a):n)||(t.exports=i)}).call(e,r("DuR2"))},"EQ+E":function(t,e){},Gh4O:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("A5qe"),a=r.n(n),i={name:"card3d",data:function(){return{chapter:"one"}},methods:{clickCard:function(){"one"===this.chapter?this.chapter="two":"two"===this.chapter&&(this.chapter="three",this.$nextTick(function(){var t=this;a()({targets:this.$refs.gift,scale:1.4,delay:550});var e=function(e,r,n){a.a.remove(t.$refs.gift),a()({targets:t.$refs.gift,scale:e,duration:r,elasticity:n})},r=function(){e(1.4,800,400)},n=function(){e(1.2,600,300)};setTimeout(function(){t.$refs.gift.addEventListener("mouseenter",r,!1),t.$refs.gift.addEventListener("mouseleave",n,!1),t.$refs.gift.addEventListener("click",function(){a()({targets:t.$refs.paper,opacity:.9,scale:{value:1.1,duration:800},delay:50})})},800)}))}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card3d"},[n("div",{staticClass:"scene",on:{click:t.clickCard}},[n("div",{staticClass:"panel",class:{one:"one"===t.chapter,two:"two"===t.chapter,top:"three"===t.chapter}},[n("div",{staticClass:"front"}),t._v(" "),n("div",{staticClass:"back"})]),t._v(" "),n("div",{staticClass:"panel",class:{one:"one"===t.chapter,two:"two"===t.chapter,bottom:"three"===t.chapter}}),t._v(" "),"three"===t.chapter?n("div",{ref:"paper",staticClass:"paper"},[n("div",{staticClass:"paper__container"},[t._v("\n        要填什麼內容，之前說的我忘了\n      ")])]):t._e()]),t._v(" "),"three"===t.chapter?n("div",{staticClass:"gift"},[n("img",{ref:"gift",attrs:{src:r("H6UH")}})]):t._e()])},staticRenderFns:[]};var u=r("VU/8")(i,o,!1,function(t){r("EQ+E")},"data-v-dfaea238",null);e.default=u.exports},H6UH:function(t,e,r){t.exports=r.p+"static/img/c_gift.2d3f06d.png"}});
//# sourceMappingURL=0.96b2b8ebd19f4665f882.js.map