(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb1641de","chunk-8124a9b0","chunk-96454674"],{"0d16":function(t,e,r){},"2e10":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-container"},[r("h4",[t._v("1. 基础用法")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo0"),t._m(0)],1),r("h4",[t._v("2. 使用插槽指定文字")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo1"),t._m(1)],1),r("h4",[t._v("3. 进度条颜色")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo2"),t._m(2)],1),r("h4",[t._v("4. 进度条方向")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo3"),t._m(3)],1),r("h4",[t._v("5. 进度条高度")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo4"),t._m(4)],1),r("h4",[t._v("6. 是否使用进度条圆角")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo5"),t._m(5)],1),r("h4",[t._v("7. 指定最小宽度")]),r("div",{staticClass:"vue-demo-wrapper"},[r("Com3lkur1kul21hu4hgDemo6"),t._m(6)],1),r("h3",[t._v("API")]),t._m(7)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <s-progress :percent=\"50\"></s-progress>\n</template>\n \n<script>\nimport SProgress from '@/packages/progress'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n")])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v("<template>\n  <s-progress :percent=\"50\">这是指定的插槽文字</s-progress>\n</template>\n \n<script>\nimport SProgress from '@/packages/progress'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n")])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <s-progress :percent="50" strokeColor="pink" style="margin-bottom: 10px"></s-progress>\n    <s-progress :percent="50" strokeColor="pink" background="white"></s-progress>\n  </div>\n</template>\n \n<script>\nimport SProgress from \'@/packages/progress\'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n')])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <s-progress :percent="50" direction="right"></s-progress>\n</template>\n \n<script>\nimport SProgress from \'@/packages/progress\'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n')])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <s-progress :percent="50" :height="30"></s-progress>\n</template>\n \n<script>\nimport SProgress from \'@/packages/progress\'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n')])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <s-progress :percent="50" :strokeRadius="false" :containerRadius="false"></s-progress>\n</template>\n \n<script>\nimport SProgress from \'@/packages/progress\'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n')])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-demo-highlight"},[r("div",{staticClass:"vue-demo-highlight-content"},[r("pre",[r("code",{pre:!0,attrs:{class:"html"}},[t._v('<template>\n  <div>\n    <s-progress \n      :percent="100" \n      :minWidth="50" \n      :strokeRadius="true" \n      :containerRadius="true"    \n      style="margin-bottom: 10px"\n    >\n    </s-progress>\n    <s-progress \n      :percent="60" \n      :minWidth="50"     \n      style="margin-bottom: 10px"\n    >\n    </s-progress>\n    <s-progress \n      :percent="10" \n      :minWidth="50"    \n      style="margin-bottom: 10px"\n    >\n    </s-progress>\n    <s-progress \n      :percent="0" \n      :minWidth="50"     \n      style="margin-bottom: 10px"\n    >\n    </s-progress>\n  </div>\n</template>\n \n<script>\nimport SProgress from \'@/packages/progress\'\nexport default {\n  components: {\n    SProgress,\n  }\n}\n<\/script>\n')])])]),r("div",{staticClass:"code-folder"},[t._v("显示代码")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),r("th",[t._v("说明")]),r("th",[t._v("类型")]),r("th",[t._v("可选参数")]),r("th",[t._v("默认值")])])]),r("tbody",[r("tr",[r("td",[t._v("percent")]),r("td",[t._v("百分比")]),r("td",[t._v("Number")]),r("td",[t._v("-")]),r("td",[t._v("0")])]),r("tr",[r("td",[t._v("direction")]),r("td",[t._v("方向")]),r("td",[t._v("String")]),r("td",[t._v("left/right")]),r("td",[t._v("left")])]),r("tr",[r("td",[t._v("strokeColor")]),r("td",[t._v("进度条颜色")]),r("td",[t._v("String")]),r("td",[t._v("-")]),r("td",[t._v("green")])]),r("tr",[r("td",[t._v("background")]),r("td",[t._v("背景颜色")]),r("td",[t._v("String")]),r("td",[t._v("-")]),r("td",[t._v("#ebeef5")])]),r("tr",[r("td",[t._v("height")]),r("td",[t._v("高度")]),r("td",[t._v("Number")]),r("td",[t._v("-")]),r("td",[t._v("20 "),r("code",[t._v("px")])])]),r("tr",[r("td",[t._v("strokeRadius")]),r("td",[t._v("进度条是否使用圆角")]),r("td",[t._v("Boolean")]),r("td",[t._v("-")]),r("td",[t._v("true")])]),r("tr",[r("td",[t._v("containerRadius")]),r("td",[t._v("进度条容器是否使用圆角")]),r("td",[t._v("Boolean")]),r("td",[t._v("-")]),r("td",[t._v("true")])]),r("tr",[r("td",[t._v("minWidth")]),r("td",[t._v("最小长度")]),r("td",[t._v("Number")]),r("td",[t._v("-")]),r("td",[t._v("0 "),r("code",[t._v("px")])])]),r("tr",[r("td",[t._v("resizeDebounce")]),r("td",[t._v("resize节流时间系数，当 "),r("code",[t._v("minWidth")]),t._v(" 不为 "),r("code",[t._v("0")]),t._v(" 时，增加resize可以提升性能")]),r("td",[t._v("Number")]),r("td",[t._v("-")]),r("td",[t._v("0 "),r("code",[t._v("ms")])])])])])}],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("s-progress",{attrs:{percent:50}})},i=[],a=r("76d0"),l={components:{SProgress:a["default"]}},c=l,d=r("2877"),p=Object(d["a"])(c,o,i,!1,null,null,null),u=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("s-progress",{attrs:{percent:50}},[t._v("这是指定的插槽文字")])},h=[],v={components:{SProgress:a["default"]}},g=v,_=Object(d["a"])(g,m,h,!1,null,null,null),f=_.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("s-progress",{staticStyle:{"margin-bottom":"10px"},attrs:{percent:50,strokeColor:"pink"}}),r("s-progress",{attrs:{percent:50,strokeColor:"pink",background:"white"}})],1)},k=[],b={components:{SProgress:a["default"]}},x=b,y=Object(d["a"])(x,C,k,!1,null,null,null),S=y.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("s-progress",{attrs:{percent:50,direction:"right"}})},W=[],w={components:{SProgress:a["default"]}},$=w,D=Object(d["a"])($,P,W,!1,null,null,null),E=D.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("s-progress",{attrs:{percent:50,height:30}})},j=[],O={components:{SProgress:a["default"]}},N=O,z=Object(d["a"])(N,R,j,!1,null,null,null),B=z.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("s-progress",{attrs:{percent:50,strokeRadius:!1,containerRadius:!1}})},M=[],J={components:{SProgress:a["default"]}},L=J,A=Object(d["a"])(L,H,M,!1,null,null,null),I=A.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("s-progress",{staticStyle:{"margin-bottom":"10px"},attrs:{percent:100,minWidth:50,strokeRadius:!0,containerRadius:!0}}),r("s-progress",{staticStyle:{"margin-bottom":"10px"},attrs:{percent:60,minWidth:50}}),r("s-progress",{staticStyle:{"margin-bottom":"10px"},attrs:{percent:10,minWidth:50}}),r("s-progress",{staticStyle:{"margin-bottom":"10px"},attrs:{percent:0,minWidth:50}})],1)},q=[],F={components:{SProgress:a["default"]}},G=F,K=Object(d["a"])(G,T,q,!1,null,null,null),Q=K.exports,U={name:"ComponentDoc",components:{Com3lkur1l5l21hu4ybDemo0:u,Com3lkur1l5l21hu4ybDemo1:f,Com3lkur1l5l21hu4ybDemo2:S,Com3lkur1l5l21hu4ybDemo3:E,Com3lkur1l5l21hu4ybDemo4:B,Com3lkur1l5l21hu4ybDemo5:I,Com3lkur1l5l21hu4ybDemo6:Q}},V=U,X=Object(d["a"])(V,s,n,!1,null,null,null);e["default"]=X.exports},3685:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.percent,r("div",{ref:"progressContainerRef",staticClass:"s-progress",style:{width:"calc(100%)",height:t.height+"px",background:t.background,"line-height":t.height+"px","justify-content":"left"===t.direction?"flex-start":"flex-end","border-radius":!0===t.containerRadius?t.height/2+"px":"0px"}},[r("div",{staticClass:"s-progress-content",style:{background:t.strokeColor,width:t.progressContentWidth,"text-align":"right"===t.direction?"left":"right","border-radius":!0===t.strokeRadius?t.height/2+"px":"0px"}},[t.$slots.default?[r("div",{style:{"margin-right":"left"===t.direction?"10px":0,"margin-left":"right"===t.direction?"10px":0}},[t._t("default")],2)]:[r("div",{style:{"margin-right":"left"===t.direction?"10px":0,"margin-left":"right"===t.direction?"10px":0}},[t._v(" "+t._s(t.percent)+"% ")])]],2)])},n=[],o=(r("a9e3"),{name:"SProgress",props:{percent:{type:Number,default:0},direction:{type:String,default:"left",validator:function(t){return-1!==["left","right"].indexOf(t)}},strokeColor:{type:String,default:"green"},background:{type:String,default:"#ebeef5"},height:{type:Number,default:20},strokeRadius:{type:Boolean,default:!0},containerRadius:{type:Boolean,default:!0},minWidth:{type:Number,default:0},resizeDebounce:{type:Number,default:0}},data:function(){return{progressContentWidth:"0%"}},components:{},watch:{percent:{immediate:!0,handler:function(){this.minWidth?this.calProgressHasMinWidthContentWidth():this.progressContentWidth=this.percent+"%"}}},computed:{},created:function(){},mounted:function(){var t=this;this.minWidth&&(window.addEventListener("resize",this.calProgressHasMinWidthContentWidth,this.resizeDebounce),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("resize",t.calProgressHasMinWidthContentWidth)})))},methods:{calProgressHasMinWidthContentWidth:function(){var t=this;this.$nextTick((function(){var e=t.$refs.progressContainerRef,r=e.getBoundingClientRect().width,s=r-t.minWidth||0;t.progressContentWidth=t.minWidth+t.percent/100*s+"px"}))}},beforeDestroy:function(){}}),i=o,a=(r("c2f3"),r("2877")),l=Object(a["a"])(i,s,n,!1,null,"0cf3d02d",null);e["default"]=l.exports},"76d0":function(t,e,r){"use strict";r.r(e);r("b0c0");var s=r("3685");s["default"].install=function(t){t.component(s["default"].name,s["default"])},e["default"]=s["default"]},c2f3:function(t,e,r){"use strict";r("0d16")}}]);