webpackJsonp([1],{Gh4O:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c={name:"card3d",computed:{chapter:function(){return this.$store.getters.getChapter}},methods:{clickCard:function(){"one"===this.chapter?this.$store.dispatch("updateCardChapter"):"two"===this.chapter&&this.$store.dispatch("updateCardChapter")}},mounted:function(){var t=this;setTimeout(function(){t.clickCard(),setTimeout(function(){t.clickCard()},1e3)},2e3)}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card3d"},[a("div",{staticClass:"scene",on:{click:t.clickCard}},[a("div",{staticClass:"panel",class:{one:"one"===t.chapter,two:"two"===t.chapter,top:"three"===t.chapter}},[a("div",{staticClass:"front"}),t._v(" "),a("div",{staticClass:"back"})]),t._v(" "),a("div",{staticClass:"panel",class:{one:"one"===t.chapter,two:"two"===t.chapter,bottom:"three"===t.chapter}})])])},staticRenderFns:[]};var r=a("VU/8")(c,s,!1,function(t){a("U7X3")},"data-v-5c754158",null);e.default=r.exports},U7X3:function(t,e){}});
//# sourceMappingURL=1.5f96d1468a82112fba16.js.map