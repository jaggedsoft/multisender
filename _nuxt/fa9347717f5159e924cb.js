(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1441:function(t,e,r){"use strict";r(273);var n={props:{activeStep:{type:Number,default:0},lastStepLabel:{type:String,default:"push"}},computed:{label:function(){return"pull"===this.lastStepLabel?this.$t("createPool"):this.$t("multisend")}}},o=r(13),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-steps",{attrs:{type:"is-primary","has-navigation":!1},model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[r("b-step-item",{attrs:{label:t.$t("prepare")}}),t._v(" "),r("b-step-item",{attrs:{label:t.$t("approve")}}),t._v(" "),r("b-step-item",{attrs:{label:t.label}})],1)}),[],!1,null,null,null);e.a=component.exports},1449:function(t,e,r){"use strict";r.r(e);r(59),r(36),r(32),r(23),r(54),r(37);var n=r(5),o=r(26),c=r(73);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={components:{Steps:r(1441).a},data:function(){return{columns:[{field:"ENSName",label:this.$t("ensColumn"),width:200},{field:"address",label:this.$t("address")},{field:"balance",label:this.$t("amount"),centered:!0,width:100}],isLoading:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)("distribution",["badContributors","currentCheck","strategy"]),{},Object(c.c)("token",["toDecimals"]),{},Object(c.c)("ENS",["getENSNameByAddress"]),{badContibutorsToRender:function(){var t=this;return this.badContributors.map((function(e){return{ENSName:t.getENSNameByAddress(e.address),address:e.address,balance:t.toDecimals(e.balance)}}))}}),mounted:function(){this.$nuxt.$loading.finish()},beforeCreate:function(){0===this.$store.state.distribution.badContributors.length&&this.$store.dispatch("router/goToIndex")},methods:{nextPage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,t.$store.dispatch("distribution/removeBadAddresses"),e.next=4,t.$store.dispatch("distribution/prepareTxs");case 4:"summary",t.$store.dispatch("router/setNextPageAndGo",{nextPage:"summary"}),t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},abordMission:function(){this.$store.dispatch("router/goToIndex")}}},m=r(13),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-container"},[r("Steps",{attrs:{"active-step":0,"last-step-label":t.strategy}}),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.$t("addressesCannotBeProcessed")))]),t._v(" "),r("b-table",{staticClass:"is-bad",attrs:{data:t.badContibutorsToRender,columns:t.columns}}),t._v(" "),r("div",{staticClass:"title"},[t._v(t._s(t.$t("proceedWirhRestOfAddresses")))]),t._v(" "),r("div",{staticClass:"buttons is-centered"},[r("b-button",{staticClass:"is-next",attrs:{id:"confirm-proceed-button",type:"is-primary",loading:t.isLoading},on:{click:t.nextPage}},[t._v("\n      "+t._s(t.$t("yes"))+"\n    ")]),t._v(" "),r("b-button",{staticClass:"is-next",attrs:{id:"confirm-reject-button",type:"is-primary",outlined:""},on:{click:t.abordMission}},[t._v("\n      "+t._s(t.$t("no"))+"\n    ")])],1),t._v(" "),r("b-notification",{attrs:{type:"is-primary",closable:!1,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[t._v("\n    "+t._s(t.$t(t.currentCheck.method))+" "+t._s(t.$t("from"))+" "+t._s(t.currentCheck.from)),t.currentCheck.to?r("span",[t._v(" "+t._s(t.$t("to"))+" ")]):t._e(),t._v(" "+t._s(t.currentCheck.to)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);