(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/refund/refund"],{6071:function(e,n,t){"use strict";var u=t("bc83"),a=t.n(u);a.a},"813c":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return a})},"96b0":function(e,n,t){"use strict";t.r(n);var u=t("813c"),a=t("bd17");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);t("6071");var c=t("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,"9521d506",null);n["default"]=o.exports},bc83:function(e,n,t){},bd17:function(e,n,t){"use strict";t.r(n);var u=t("edf2"),a=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=a.a},edf2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(t("5791"));function a(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{items:[{value:"refund1",name:"本单相应商品(如有)已退回；"},{value:"refund2",name:"本单赠送积分348，将会作废；"},{value:"refund3",name:"本单赠送卡卷XXX，将会作废；"},{value:"refund4",name:"本单赠送卡卷XXX已使用，则在退款金额中扣除;"},{value:"refund5",name:"本单赠送礼品XXX，已退回；"},{value:"refund6",name:"本单赠送礼品XXX不能回收，则在退款金额中扣除;"}],refund_price:""}},methods:{checkboxChange:function(e){for(var n=this.items,t=e.detail.value,u=0,a=n.length;u<a;++u){var r=n[u];t.includes(r.value)?this.$set(r,"checked",!0):this.$set(r,"checked",!1)}console.log(t)}},onLoad:function(e){u.default.get("",{}).then(function(e){console.log(e.data)}).catch(function(e){})}};n.default=r}},[["f755","common/runtime","common/vendor"]]]);