(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87cd9f46"],{"09fe":function(t,e,i){},"2ed4":function(t,e,i){"use strict";var n=i("c31d"),a=i("d282"),r=i("a142"),o=i("ad06"),c=i("6f2f"),s=i("48f4"),l=i("9884"),d=Object(a["a"])("tabbar-item"),u=d[0],h=d[1];e["a"]=u({mixins:[Object(l["a"])("vanTabbar")],props:Object(n["a"])({},s["c"],{dot:Boolean,icon:String,name:[Number,String],info:[Number,String]}),data:function(){return{active:!1}},computed:{routeActive:function(){var t=this.to,e=this.$route;if(t&&e){var i=Object(r["c"])(t)?t:{path:t},n=i.path===e.path,a=Object(r["b"])(i.name)&&i.name===e.name;return n||a}}},methods:{onClick:function(t){this.parent.onChange(this.name||this.index),this.$emit("click",t),Object(s["b"])(this.$router,this)}},render:function(){var t=arguments[0],e=this.icon,i=this.slots,n=this.parent.route?this.routeActive:this.active,a=this.parent[n?"activeColor":"inactiveColor"];return t("div",{class:h({active:n}),style:{color:a},on:{click:this.onClick}},[t("div",{class:h("icon")},[i("icon",{active:n})||e&&t(o["a"],{attrs:{name:e}}),t(c["a"],{attrs:{dot:this.dot,info:this.info}})]),t("div",{class:h("text")},[i("default",{active:n})])])}})},"44bf":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("d282"),o=i("a142"),c=i("ea8e"),s=i("ad06"),l=Object(r["a"])("image"),d=l[0],u=l[1];e["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(o["b"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(o["b"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(o["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(s["a"],{attrs:{name:"photo-o"},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(s["a"],{attrs:{name:"warning-o"},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",a()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",a()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"537a":function(t,e,i){"use strict";i("68ef"),i("9312")},"66b9":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b")},"66fd":function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("d282"),o=i("a142"),c=i("ba31"),s=i("a3e2"),l=i("44bf"),d=Object(r["a"])("card"),u=d[0],h=d[1];function f(t,e,i,n){var r,d,u,f=e.thumb,b=i.num||Object(o["b"])(e.num),g=i.price||Object(o["b"])(e.price),m=i["origin-price"]||Object(o["b"])(e.originPrice),p=b||g||m||i.bottom;function v(t){Object(c["a"])(n,"click-thumb",t)}function y(){if(i.tag||e.tag)return t("div",{class:h("tag")},[i.tag?i.tag():t(s["a"],{attrs:{mark:!0,type:"danger"}},[e.tag])])}function O(){if(i.thumb||f)return t("a",{attrs:{href:e.thumbLink},class:h("thumb"),on:{click:v}},[i.thumb?i.thumb():t(l["a"],{attrs:{src:f,width:"100%",height:"100%",fit:"contain","lazy-load":e.lazyLoad}}),y()])}function S(){return i.title?i.title():e.title?t("div",{class:[h("title"),"van-multi-ellipsis--l2"]},[e.title]):void 0}function j(){return i.desc?i.desc():e.desc?t("div",{class:[h("desc"),"van-ellipsis"]},[e.desc]):void 0}function k(){var i=e.price.toString().split(".");return t("div",[t("span",{class:h("price-currency")},[e.currency]),t("span",{class:h("price-integer")},[i[0]]),".",t("span",{class:h("price-decimal")},[i[1]])])}function x(){if(g)return t("div",{class:h("price")},[i.price?i.price():k()])}function C(){if(m){var n=i["origin-price"];return t("div",{class:h("origin-price")},[n?n():e.currency+" "+e.originPrice])}}function z(){if(b)return t("div",{class:h("num")},[i.num?i.num():"x"+e.num])}function B(){if(i.footer)return t("div",{class:h("footer")},[i.footer()])}return t("div",a()([{class:h()},Object(c["b"])(n,!0)]),[t("div",{class:h("header")},[O(),t("div",{class:h("content",{centered:e.centered})},[t("div",[S(),j(),null===(r=i.tags)||void 0===r?void 0:r.call(i)]),p&&t("div",{class:"van-card__bottom"},[null===(d=i["price-top"])||void 0===d?void 0:d.call(i),x(),C(),z(),null===(u=i.bottom)||void 0===u?void 0:u.call(i)])])]),B()])}f.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},e["a"]=u(f)},9312:function(t,e,i){},9884:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i.d(e,"b",(function(){return o}));var n=i("2b0e");function a(t){var e=[];function i(t){t.forEach((function(t){e.push(t),t.children&&i(t.children)}))}return i(t),e}function r(t,e){var i,r;void 0===e&&(e={});var o=e.indexKey||"index";return n["a"].extend({inject:(i={},i[t]={default:null},i),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=a(this.parent.slots());t.sort((function(t,i){return e.indexOf(t.$vnode)-e.indexOf(i.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9b7e":function(t,e,i){},"9cb7":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("09fe"),i("9b7e"),i("ea82")},a3e2:function(t,e,i){"use strict";var n=i("2638"),a=i.n(n),r=i("d282"),o=i("ba31"),c=i("b1d2"),s=i("ad06"),l=Object(r["a"])("tag"),d=l[0],u=l[1];function h(t,e,i,n){var r,l,d,h=e.type,f=e.mark,b=e.plain,g=e.color,m=e.round,p=e.size,v=b?"color":"backgroundColor",y=(r={},r[v]=g,r);e.textColor&&(y.color=e.textColor);var O={mark:f,plain:b,round:m};p&&(O[p]=p);var S=e.closeable&&t(s["a"],{attrs:{name:"cross"},class:u("close"),on:{click:function(t){t.stopPropagation(),Object(o["a"])(n,"close")}}});return t("transition",{attrs:{name:e.closeable?"van-fade":null}},[t("span",a()([{key:"content",style:y,class:[u([O,h]),(l={},l[c["d"]]=b,l)]},Object(o["b"])(n,!0)]),[null===(d=i.default)||void 0===d?void 0:d.call(i),S])])}h.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},e["a"]=d(h)},a52c:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("ae73")},ac28:function(t,e,i){"use strict";var n=i("d282"),a=i("9884"),r=i("b1d2"),o=Object(n["a"])("tabbar"),c=o[0],s=o[1];e["a"]=c({mixins:[Object(a["b"])("vanTabbar")],props:{route:Boolean,activeColor:String,inactiveColor:String,safeAreaInsetBottom:Boolean,value:{type:[Number,String],default:0},border:{type:Boolean,default:!0},fixed:{type:Boolean,default:!0},zIndex:{type:Number,default:1}},watch:{value:"setActiveItem",children:"setActiveItem"},methods:{setActiveItem:function(){var t=this;this.children.forEach((function(e,i){e.active=(e.name||i)===t.value}))},onChange:function(t){t!==this.value&&(this.$emit("input",t),this.$emit("change",t))}},render:function(){var t,e=arguments[0];return e("div",{style:{zIndex:this.zIndex},class:[(t={},t[r["f"]]=this.border,t),s({fixed:this.fixed,"safe-area-inset-bottom":this.safeAreaInsetBottom})]},[this.slots()])}})},ae73:function(t,e,i){},b650:function(t,e,i){"use strict";var n=i("c31d"),a=i("2638"),r=i.n(a),o=i("d282"),c=i("ba31"),s=i("b1d2"),l=i("48f4"),d=i("ad06"),u=i("543e"),h=Object(o["a"])("button"),f=h[0],b=h[1];function g(t,e,i,n){var a,o=e.tag,h=e.icon,f=e.type,g=e.color,m=e.plain,p=e.disabled,v=e.loading,y=e.hairline,O=e.loadingText,S={};function j(t){v||p||(Object(c["a"])(n,"click",t),Object(l["a"])(n))}function k(t){Object(c["a"])(n,"touchstart",t)}g&&(S.color=m?g:s["h"],m||(S.background=g),-1!==g.indexOf("gradient")?S.border=0:S.borderColor=g);var x=[b([f,e.size,{plain:m,disabled:p,hairline:y,block:e.block,round:e.round,square:e.square}]),(a={},a[s["d"]]=y,a)];function C(){var n,a=[];return v?a.push(t(u["a"],{class:b("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):h&&a.push(t(d["a"],{attrs:{name:h},class:b("icon")})),n=v?O:i.default?i.default():e.text,n&&a.push(t("span",{class:b("text")},[n])),a}return t(o,r()([{style:S,class:x,attrs:{type:e.nativeType,disabled:p},on:{click:j,touchstart:k}},Object(c["b"])(n)]),[C()])}g.props=Object(n["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=f(g)},bc1b:function(t,e,i){},c3a6:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743")},d74f:function(t,e,i){"use strict";i.r(e);var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:"商城首页"}},[i("van-icon",{attrs:{slot:"right",name:"shopping-cart-o",size:"20",info:t.cart.count},on:{click:function(e){return t.gocart()}},slot:"right"})],1),i("ul",{staticStyle:{"padding-bottom":"50px"}},t._l(t.goodslist,(function(e){return i("li",{key:e.id},[i("van-card",{attrs:{num:e.stock,price:e.price,title:e.name,thumb:e.imageCode}},[i("div",{attrs:{slot:"footer"},slot:"footer"},[i("van-button",{attrs:{size:"mini"},on:{click:function(i){return t.addCart({id:e.id,name:e.name,price:e.price,count:1,imageId:e.imageId,imageCode:e.imageCode,choose:!1})}}},[t._v(" 加入购物车")])],1)])],1)})),0),i("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tabbar-item",{attrs:{icon:"home-o","is-link":"",to:"index"}},[t._v("首页")]),i("van-tabbar-item",{attrs:{icon:"shopping-cart-o",info:t.cart.count,"is-link":"",to:"cart"}},[t._v("购物车")]),i("van-tabbar-item",{attrs:{icon:"manager-o","is-link":"",to:"user"}},[t._v("个人中心")])],1)],1)},r=[],o=(i("4160"),i("b0c0"),i("159b"),i("ade3")),c=(i("c3a6"),i("ad06")),s=(i("a52c"),i("2ed4")),l=(i("537a"),i("ac28")),d=(i("e7e5"),i("d399")),u=(i("5246"),i("6b41")),h=(i("66b9"),i("b650")),f=(i("9cb7"),i("66fd")),b=i("3d71"),g={components:(n={},Object(o["a"])(n,f["a"].name,f["a"]),Object(o["a"])(n,h["a"].name,h["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,l["a"].name,l["a"]),Object(o["a"])(n,s["a"].name,s["a"]),Object(o["a"])(n,c["a"].name,c["a"]),n),data:function(){return{active:0,cart:{count:"0"},goodslist:[]}},methods:{getgoodslist:function(){this.goodslist=[];var t=this.goodslist,e=this.getimage,i={Name:"",OrderParms:[{OrderName:"Name",IsAsc:!0},{OrderName:"IsUpshelf",IsAsc:!0}],PageIndex:1,PageSize:1e3,IsUpshelf:!0};b["a"].ajaxPost("/api/goodsservice/getgoodslist/query",i,(function(i){i.data.data.forEach((function(e){t.push({id:e.id,name:e.name,price:e.price,stock:e.stock,state:e.isUpshelf,stateName:1==e.isUpshelf?"上架":"下架",operateName:1==e.isUpshelf?"下架":"上架",imageId:e.imageId,imageCode:""})})),t.forEach((function(t){e(t)}))}))},addCart:function(t){b["a"].AddShopCart(t),this.cart.count=b["a"].GetShopCart().length>=100?"99+":b["a"].GetShopCart().length},gocart:function(){this.$router.push("/cart")},getimage:function(t){var e=t;b["a"].GetImageById(t.imageId,(function(t){e.imageCode=t}))}},mounted:function(){this.getgoodslist(),this.cart.count=b["a"].GetShopCart().length>=100?"99+":b["a"].GetShopCart().length}},m=g,p=i("2877"),v=Object(p["a"])(m,a,r,!1,null,null,null);e["default"]=v.exports},ea82:function(t,e,i){}}]);
//# sourceMappingURL=chunk-87cd9f46.a5bdbbb6.js.map