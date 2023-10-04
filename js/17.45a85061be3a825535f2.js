(window.webpackJsonp=window.webpackJsonp||[]).push([[17,105],{112:function(t,n,e){"use strict";e.r(n);e(23);var o={name:"ListView",computed:{},mounted(){let t=[];for(let n=0;n<400;n++){let n=[];for(let t=10;t<50;t++)n.push({date:"19"+t,event:{label:"HRA PHARMA",phase:"批准上市",status:t%3==0?"批准上市":"在研",title:"米托坦"}});t.push(n)}this.milestoneData=t},data:()=>({milestoneData:[]}),components:{VirtualScrollMilestoneTable:e(248).default},methods:{}},a=(e(636),e(9)),l={name:"ComponentDoc",components:{Comcyhs1kylnblwlzvDemo0:Object(a.a)(o,(function(){var t=this,n=t._self._c;return n("virtual-scroll-milestone-table",{attrs:{data:t.milestoneData,contentHeight:300,title:"相关药物"},scopedSlots:t._u([{key:"contentSlot",fn:function({record:e}){return n("div",{staticClass:"content-slot"},[e.event?[n("i",{class:["dot",{research:"在研"==e.event.status}]}),t._v(" "),n("div",{staticClass:"text-content"},[n("p",{domProps:{textContent:t._s(e.event.title)}}),t._v(" "),n("p",[n("span",{domProps:{textContent:t._s(e.event.label)}}),t._v(" "),n("span",[t._v("("+t._s(e.event.phase)+")")])])])]:t._e()],2)}}])},[t._v(" "),n("div",{staticClass:"footSlot",attrs:{slot:"footSlot"},slot:"footSlot"},[n("ul",[n("li",[n("i",{staticClass:"dot approved"}),t._v(" "),n("span",[t._v("上市")])]),t._v(" "),n("li",[n("i",{staticClass:"dot research"}),t._v(" "),n("span",[t._v("在研")])])])])])}),[],!1,null,"4d12919b",null).exports}},s=Object(a.a)(l,(function(){var t=this._self._c;return t("div",{staticClass:"vue-demo-container"},[t("h4",[this._v("1. 使用案例")]),this._v(" "),t("div",{staticClass:"vue-demo-wrapper"},[t("Comcyhs1kylnblwlzvDemo0"),this._v(" "),this._m(0)],1),this._v(" "),t("h3",[this._v("API")]),this._v(" "),this._m(1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"vue-demo-highlight"},[t("div",{staticClass:"vue-demo-highlight-content"},[t("pre",[t("code",{pre:!0,attrs:{class:"html"}},[this._v('<template>\n  <virtual-scroll-milestone-table\n    :data="milestoneData"\n    :contentHeight="300"\n    title="相关药物"\n  >\n    <div slot="contentSlot" slot-scope="{ record }" class="content-slot">\n      <template v-if="record.event">\n        <i\n          :class="[\n            \'dot\',\n            { research: record.event.status == \'在研\' ? true : false },\n          ]"\n        ></i>\n        <div class="text-content">\n          <p v-text="record.event.title"></p>\n          <p>\n            <span v-text="record.event.label"></span>\n            <span>({{ record.event.phase }})</span>\n          </p>\n        </div>\n      </template>\n    </div>\n    <div slot="footSlot" class="footSlot">\n      <ul>\n        <li>\n          <i class="dot approved"></i>\n          <span>上市</span>\n        </li>\n        <li>\n          <i class="dot research"></i>\n          <span>在研</span>\n        </li>\n      </ul>\n    </div>\n  </virtual-scroll-milestone-table>\n</template>\n\n<script>\nimport VirtualScrollMilestoneTable from "@/packages/virtual-scroll-milestone-table";\nexport default {\n  name: "ListView",\n  computed: {},\n  mounted() {\n    let data = [];\n    for (let row = 0; row < 400; row++) {\n      let rowData = [];\n      for (let col = 10; col < 50; col++) {\n        rowData.push({\n          date: `19` + col,\n          event: {\n            label: "HRA PHARMA",\n            phase: "批准上市",\n            status: col % 3 === 0 ? "批准上市" : "在研",\n            title: "米托坦",\n          },\n        });\n      }\n      data.push(rowData);\n    }\n    this.milestoneData = data;\n    // console.log("this.milestoneData:", this.milestoneData);\n  },\n  data() {\n    return {\n      milestoneData: [],\n    };\n  },\n  components: {\n    VirtualScrollMilestoneTable,\n  },\n  methods: {},\n};\n<\/script>\n\n<style lang="less" scoped>\n.dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: red;\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.approved {\n  background: red !important;\n}\n.research {\n  background: #34b800 !important;\n}\n.content-slot {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 20px;\n  p {\n    margin-bottom: 0;\n    margin-top: 0;\n    font-size: 14px;\n    font-weight: 400;\n    color: #333333;\n    line-height: 20px;\n  }\n}\n.footSlot {\n  li:first-child {\n    margin-right: 140px;\n  }\n  li {\n    display: flex;\n    align-items: center;\n    span {\n      font-size: 16px;\n      font-weight: 400;\n      color: #333333;\n      line-height: 12px;\n    }\n  }\n}\n</style>\n')])])]),this._v(" "),t("div",{staticClass:"code-folder"},[this._v("显示代码")])])},function(){var t=this,n=t._self._c;return n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("渲染数据")]),t._v(" "),n("td",[n("code",[t._v("Array<Array> ")])]),t._v(" "),n("td",[n("code",[t._v("[[]]")]),t._v(" 格式： "),n("code",[t._v("[[{date:xxx,event:{}}]]")])])]),t._v(" "),n("tr",[n("td",[t._v("tdHeight")]),t._v(" "),n("td",[t._v("每个格子的高度")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("80 "),n("code",[t._v("px")])])]),t._v(" "),n("tr",[n("td",[t._v("tdWidth")]),t._v(" "),n("td",[t._v("每个格子的宽度")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("230 "),n("code",[t._v("px")])])]),t._v(" "),n("tr",[n("td",[t._v("contentHeight")]),t._v(" "),n("td",[t._v("表格的高度")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("300 "),n("code",[t._v("px")])])]),t._v(" "),n("tr",[n("td",[t._v("noFullScreen")]),t._v(" "),n("td",[t._v("没有放大功能")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("fullScreenTitle")]),t._v(" "),n("td",[t._v("放大弹窗的title")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("相关药物")])])])])}],!1,null,null,null);n.default=s.exports},248:function(t,n,e){"use strict";e.r(n);var o=e(249);o.default.install=function(t){t.component(o.default.name,o.default)},n.default=o.default},385:function(t,n,e){var o=e(2),a=e(637);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var l={insert:"head",singleton:!1};o(a,l);t.exports=a.locals||{}},636:function(t,n,e){"use strict";e(385)},637:function(t,n,e){(n=e(3)(!1)).push([t.i,".dot[data-v-4d12919b] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background: red;\n  border-radius: 50%;\n  margin-right: 8px;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.approved[data-v-4d12919b] {\n  background: red !important;\n}\n.research[data-v-4d12919b] {\n  background: #34b800 !important;\n}\n.content-slot[data-v-4d12919b] {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 20px;\n}\n.content-slot p[data-v-4d12919b] {\n  margin-bottom: 0;\n  margin-top: 0;\n  font-size: 14px;\n  font-weight: 400;\n  color: #333333;\n  line-height: 20px;\n}\n.footSlot li[data-v-4d12919b]:first-child {\n  margin-right: 140px;\n}\n.footSlot li[data-v-4d12919b] {\n  display: flex;\n  align-items: center;\n}\n.footSlot li span[data-v-4d12919b] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #333333;\n  line-height: 12px;\n}\n",""]),t.exports=n}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD8wMjRjIiwid2VicGFjazovLy9zcmMvcGFja2FnZXMtZXhhbXBsZXMvdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD9hM2JlIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy1leGFtcGxlcy92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kPzRkZmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzLWV4YW1wbGVzL3ZpcnR1YWxTY3JvbGwtbWlsZXN0b25lVGFibGUubWQ/ZmY2YyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvdmlydHVhbC1zY3JvbGwtbWlsZXN0b25lLXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy1leGFtcGxlcy92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kP2ZjYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzLWV4YW1wbGVzL3ZpcnR1YWxTY3JvbGwtbWlsZXN0b25lVGFibGUubWQ/MTVkNCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMtZXhhbXBsZXMvdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD8xZTI0Il0sIm5hbWVzIjpbIm5hbWUiLCJjb21wdXRlZCIsIm1vdW50ZWQiLCJkYXRhIiwicm93Iiwicm93RGF0YSIsImNvbCIsInB1c2giLCJkYXRlIiwiZXZlbnQiLCJsYWJlbCIsInBoYXNlIiwic3RhdHVzIiwidGl0bGUiLCJtaWxlc3RvbmVEYXRhIiwiY29tcG9uZW50cyIsIlZpcnR1YWxTY3JvbGxNaWxlc3RvbmVUYWJsZSIsIm1ldGhvZHMiLCJfdm0iLCJ0aGlzIiwiX2MiLCJfc2VsZiIsImF0dHJzIiwic2NvcGVkU2xvdHMiLCJfdSIsImtleSIsImZuIiwicmVjb3JkIiwic3RhdGljQ2xhc3MiLCJjbGFzcyIsInJlc2VhcmNoIiwiX3YiLCJkb21Qcm9wcyIsIl9zIiwiX2UiLCJzbG90IiwiX20iLCJwcmUiLCJTTWlsZXN0b25lVGFibGUiLCJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwiYXBpIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibW9kdWxlIiwiaSIsIm9wdGlvbnMiLCJleHBvcnRzIiwibG9jYWxzIiwiX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIl0sIm1hcHBpbmdzIjoiNEdBQUEsSUNBNlEsRUN3QzlQLENBQ2ZBLEtBQUEsV0FDQUMsU0FBQSxHQUNBQyxVQUNBLElBQUFDLEVBQUEsR0FDQSxRQUFBQyxFQUFBLEVBQUFBLEVBQUEsSUFBQUEsSUFBQSxDQUNBLElBQUFDLEVBQUEsR0FDQSxRQUFBQyxFQUFBLEdBQUFBLEVBQUEsR0FBQUEsSUFDQUQsRUFBQUUsS0FBQSxDQUNBQyxLQUFBLEtBQUFGLEVBQ0FHLE1BQUEsQ0FDQUMsTUFBQSxhQUNBQyxNQUFBLE9BQ0FDLE9BQUFOLEVBQUEsaUJBQ0FPLE1BQUEsU0FJQVYsRUFBQUksS0FBQUYsR0FFQSxLQUFBUyxjQUFBWCxHQUdBQSxVQUNBLENBQ0FXLGNBQUEsS0FHQUMsV0FBQSxDQUNBQyw0QixPQUFBQSxTQUVBQyxRQUFBLEksZ0JDdkV1UCxFRHFNdlAsQ0FDQWpCLEtBQUEsZUFDQWUsV0FBQSxDQUNBLHdCRWhNZ0IsWUFDZCxHSlRXLFdBQWtCLElBQUlHLEVBQUlDLEtBQUtDLEVBQUdGLEVBQUlHLE1BQU1ELEdBQUcsT0FBT0EsRUFBRyxpQ0FBaUMsQ0FBQ0UsTUFBTSxDQUFDLEtBQU9KLEVBQUlKLGNBQWMsY0FBZ0IsSUFBSSxNQUFRLFFBQVFTLFlBQVlMLEVBQUlNLEdBQUcsQ0FB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LEtBQUtYLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLFVBQVViLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNBLEVBQUcsT0FBTyxDQUFDRixFQUFJYSxHQUFHLHFCQUFxQmIsRUFBSWEsR0FBRyxLQUFLWCxFQUFHLEtBQUssQ0FBQ0EsRUFBRyxPQUFPLENBQUNGLEVBQUlhLEdBQUcsVUFBVWIsRUFBSWEsR0FBRyxTQUFTWCxFQUFHLE9BQU8sQ0FBQ0YsRUFBSWEsR0FBRyxpQ0FBaUNiLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNBLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLGNBQWNiLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsYUFBYWIsRUFBSWEsR0FBRyxLQUFLWCxFQUFHLEtBQUssQ0FBQ0YsRUFBSWEsR0FBRyxZQUFZYixFQUFJYSxHQUFHLEtBQUtYLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLE9BQU9YLEVBQUcsT0FBTyxDQUFDRixFQUFJYSxHQUFHLFlBQVliLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNBLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLGFBQWFiLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsYUFBYWIsRUFBSWEsR0FBRyxLQUFLWCxFQUFHLEtBQUssQ0FBQ0YsRUFBSWEsR0FBRyxZQUFZYixFQUFJYSxHQUFHLEtBQUtYLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLFFBQVFYLEVBQUcsT0FBTyxDQUFDRixFQUFJYSxHQUFHLFlBQVliLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNBLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLG1CQUFtQmIsRUFBSWEsR0FBRyxLQUFLWCxFQUFHLEtBQUssQ0FBQ0YsRUFBSWEsR0FBRyxXQUFXYixFQUFJYSxHQUFHLEtBQUtYLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLFlBQVliLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsUUFBUVgsRUFBRyxPQUFPLENBQUNGLEVBQUlhLEdBQUcsWUFBWWIsRUFBSWEsR0FBRyxLQUFLWCxFQUFHLEtBQUssQ0FBQ0EsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsa0JBQWtCYixFQUFJYSxHQUFHLEtBQUtYLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLFlBQVliLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsYUFBYWIsRUFBSWEsR0FBRyxLQUFLWCxFQUFHLEtBQUssQ0FBQ0YsRUFBSWEsR0FBRyxhQUFhYixFQUFJYSxHQUFHLEtBQUtYLEVBQUcsS0FBSyxDQUFDQSxFQUFHLEtBQUssQ0FBQ0YsRUFBSWEsR0FBRyxxQkFBcUJiLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsZ0JBQWdCYixFQUFJYSxHQUFHLEtBQUtYLEVBQUcsS0FBSyxDQUFDRixFQUFJYSxHQUFHLFlBQVliLEVBQUlhLEdBQUcsS0FBS1gsRUFBRyxLQUFLLENBQUNGLEVBQUlhLEdBQUcsbUJLUXo1QyxFQUNBLEtBQ0EsS0FDQSxNQUlhLFksMENDbEJmLG9CQVVBTyxVQUFnQkMsUUFBVSxTQUFVQyxHQUNoQ0EsRUFBSUMsVUFBVUgsVUFBZ0J0QyxLQUFNc0MsWUFHekJBLFlBQWUsUyxvQkNkOUIsSUFBSUksRUFBTSxFQUFRLEdBQ0ZDLEVBQVUsRUFBUSxLQUlDLGlCQUZ2QkEsRUFBVUEsRUFBUUMsV0FBYUQsRUFBUUUsUUFBVUYsS0FHL0NBLEVBQVUsQ0FBQyxDQUFDRyxFQUFPQyxFQUFJSixFQUFTLE1BRzlDLElBQUlLLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQTixFQUFJQyxFQUFTSyxHQUkxQkYsRUFBT0csUUFBVU4sRUFBUU8sUUFBVSxJLGlDQ2xCbkMsUSxxQkNFQUQsRUFEa0MsRUFBUSxFQUNoQ0UsRUFBNEIsSUFFOUI1QyxLQUFLLENBQUN1QyxFQUFPQyxFQUFJLGcyQkFBaTJCLEtBRTEzQkQsRUFBT0csUUFBVUEiLCJmaWxlIjoianMvMTcuNDVhODUwNjFiZTNhODI1NTM1ZjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCl7dmFyIF92bT10aGlzLF9jPV92bS5fc2VsZi5fYztyZXR1cm4gX2MoJ3ZpcnR1YWwtc2Nyb2xsLW1pbGVzdG9uZS10YWJsZScse2F0dHJzOntcImRhdGFcIjpfdm0ubWlsZXN0b25lRGF0YSxcImNvbnRlbnRIZWlnaHRcIjozMDAsXCJ0aXRsZVwiOlwi55u45YWz6I2v54mpXCJ9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImNvbnRlbnRTbG90XCIsZm46ZnVuY3Rpb24oeyByZWNvcmQgfSl7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRlbnQtc2xvdFwifSxbKHJlY29yZC5ldmVudCk/W19jKCdpJyx7Y2xhc3M6W1xuICAgICAgICAgICdkb3QnLFxuICAgICAgICAgIHsgcmVzZWFyY2g6IHJlY29yZC5ldmVudC5zdGF0dXMgPT0gJ+WcqOeglCcgPyB0cnVlIDogZmFsc2UgfSxcbiAgICAgICAgXX0pLF92bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGV4dC1jb250ZW50XCJ9LFtfYygncCcse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKHJlY29yZC5ldmVudC50aXRsZSl9fSksX3ZtLl92KFwiIFwiKSxfYygncCcsW19jKCdzcGFuJyx7ZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MocmVjb3JkLmV2ZW50LmxhYmVsKX19KSxfdm0uX3YoXCIgXCIpLF9jKCdzcGFuJyxbX3ZtLl92KFwiKFwiK192bS5fcyhyZWNvcmQuZXZlbnQucGhhc2UpK1wiKVwiKV0pXSldKV06X3ZtLl9lKCldLDIpfX1dKX0sW192bS5fdihcIiBcIiksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZm9vdFNsb3RcIixhdHRyczp7XCJzbG90XCI6XCJmb290U2xvdFwifSxzbG90OlwiZm9vdFNsb3RcIn0sW19jKCd1bCcsW19jKCdsaScsW19jKCdpJyx7c3RhdGljQ2xhc3M6XCJkb3QgYXBwcm92ZWRcIn0pLF92bS5fdihcIiBcIiksX2MoJ3NwYW4nLFtfdm0uX3YoXCLkuIrluIJcIildKV0pLF92bS5fdihcIiBcIiksX2MoJ2xpJyxbX2MoJ2knLHtzdGF0aWNDbGFzczpcImRvdCByZXNlYXJjaFwifSksX3ZtLl92KFwiIFwiKSxfYygnc3BhbicsW192bS5fdihcIuWcqOeglFwiKV0pXSldKV0pXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbWFya2Rvd24tdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0xIS4vdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZmZW5jZSZjb21wb25lbnRJbmRleD0wXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL3ZpcnR1YWxTY3JvbGwtbWlsZXN0b25lVGFibGUubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiIiwibW9kdWxlLmV4cG9ydHMgPSBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZ1ZS1kZW1vLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoND4xLiDkvb/nlKjmoYjkvos8L2g0PlxuPGRpdiBjbGFzcz1cInZ1ZS1kZW1vLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxDb21jeWhzMWt5bG5ibHdsenZEZW1vMD48L0NvbWN5aHMxa3lsbmJsd2x6dkRlbW8wPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2dWUtZGVtby1oaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2dWUtZGVtby1oaWdobGlnaHQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwcmU+PGNvZGUgY2xhc3M9XCJodG1sXCIgdi1wcmUgPiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O3ZpcnR1YWwtc2Nyb2xsLW1pbGVzdG9uZS10YWJsZVxuICAgIDpkYXRhPSZxdW90O21pbGVzdG9uZURhdGEmcXVvdDtcbiAgICA6Y29udGVudEhlaWdodD0mcXVvdDszMDAmcXVvdDtcbiAgICB0aXRsZT0mcXVvdDvnm7jlhbPoja/niakmcXVvdDtcbiAgJmd0O1xuICAgICZsdDtkaXYgc2xvdD0mcXVvdDtjb250ZW50U2xvdCZxdW90OyBzbG90LXNjb3BlPSZxdW90O3sgcmVjb3JkIH0mcXVvdDsgY2xhc3M9JnF1b3Q7Y29udGVudC1zbG90JnF1b3Q7Jmd0O1xuICAgICAgJmx0O3RlbXBsYXRlIHYtaWY9JnF1b3Q7cmVjb3JkLmV2ZW50JnF1b3Q7Jmd0O1xuICAgICAgICAmbHQ7aVxuICAgICAgICAgIDpjbGFzcz0mcXVvdDtbXG4gICAgICAgICAgICAnZG90JyxcbiAgICAgICAgICAgIHsgcmVzZWFyY2g6IHJlY29yZC5ldmVudC5zdGF0dXMgPT0gJ+WcqOeglCcgPyB0cnVlIDogZmFsc2UgfSxcbiAgICAgICAgICBdJnF1b3Q7XG4gICAgICAgICZndDsmbHQ7L2kmZ3Q7XG4gICAgICAgICZsdDtkaXYgY2xhc3M9JnF1b3Q7dGV4dC1jb250ZW50JnF1b3Q7Jmd0O1xuICAgICAgICAgICZsdDtwIHYtdGV4dD0mcXVvdDtyZWNvcmQuZXZlbnQudGl0bGUmcXVvdDsmZ3Q7Jmx0Oy9wJmd0O1xuICAgICAgICAgICZsdDtwJmd0O1xuICAgICAgICAgICAgJmx0O3NwYW4gdi10ZXh0PSZxdW90O3JlY29yZC5ldmVudC5sYWJlbCZxdW90OyZndDsmbHQ7L3NwYW4mZ3Q7XG4gICAgICAgICAgICAmbHQ7c3BhbiZndDsoe3sgcmVjb3JkLmV2ZW50LnBoYXNlIH19KSZsdDsvc3BhbiZndDtcbiAgICAgICAgICAmbHQ7L3AmZ3Q7XG4gICAgICAgICZsdDsvZGl2Jmd0O1xuICAgICAgJmx0Oy90ZW1wbGF0ZSZndDtcbiAgICAmbHQ7L2RpdiZndDtcbiAgICAmbHQ7ZGl2IHNsb3Q9JnF1b3Q7Zm9vdFNsb3QmcXVvdDsgY2xhc3M9JnF1b3Q7Zm9vdFNsb3QmcXVvdDsmZ3Q7XG4gICAgICAmbHQ7dWwmZ3Q7XG4gICAgICAgICZsdDtsaSZndDtcbiAgICAgICAgICAmbHQ7aSBjbGFzcz0mcXVvdDtkb3QgYXBwcm92ZWQmcXVvdDsmZ3Q7Jmx0Oy9pJmd0O1xuICAgICAgICAgICZsdDtzcGFuJmd0O+S4iuW4giZsdDsvc3BhbiZndDtcbiAgICAgICAgJmx0Oy9saSZndDtcbiAgICAgICAgJmx0O2xpJmd0O1xuICAgICAgICAgICZsdDtpIGNsYXNzPSZxdW90O2RvdCByZXNlYXJjaCZxdW90OyZndDsmbHQ7L2kmZ3Q7XG4gICAgICAgICAgJmx0O3NwYW4mZ3Q75Zyo56CUJmx0Oy9zcGFuJmd0O1xuICAgICAgICAmbHQ7L2xpJmd0O1xuICAgICAgJmx0Oy91bCZndDtcbiAgICAmbHQ7L2RpdiZndDtcbiAgJmx0Oy92aXJ0dWFsLXNjcm9sbC1taWxlc3RvbmUtdGFibGUmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuXG4mbHQ7c2NyaXB0Jmd0O1xuaW1wb3J0IFZpcnR1YWxTY3JvbGxNaWxlc3RvbmVUYWJsZSBmcm9tICZxdW90O0AvcGFja2FnZXMvdmlydHVhbC1zY3JvbGwtbWlsZXN0b25lLXRhYmxlJnF1b3Q7O1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAmcXVvdDtMaXN0VmlldyZxdW90OyxcbiAgY29tcHV0ZWQ6IHt9LFxuICBtb3VudGVkKCkge1xuICAgIGxldCBkYXRhID0gW107XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93ICZsdDsgNDAwOyByb3crKykge1xuICAgICAgbGV0IHJvd0RhdGEgPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbCA9IDEwOyBjb2wgJmx0OyA1MDsgY29sKyspIHtcbiAgICAgICAgcm93RGF0YS5wdXNoKHtcbiAgICAgICAgICBkYXRlOiBgMTlgICsgY29sLFxuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBsYWJlbDogJnF1b3Q7SFJBIFBIQVJNQSZxdW90OyxcbiAgICAgICAgICAgIHBoYXNlOiAmcXVvdDvmibnlh4bkuIrluIImcXVvdDssXG4gICAgICAgICAgICBzdGF0dXM6IGNvbCAlIDMgPT09IDAgPyAmcXVvdDvmibnlh4bkuIrluIImcXVvdDsgOiAmcXVvdDvlnKjnoJQmcXVvdDssXG4gICAgICAgICAgICB0aXRsZTogJnF1b3Q757Gz5omY5Z2mJnF1b3Q7LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGF0YS5wdXNoKHJvd0RhdGEpO1xuICAgIH1cbiAgICB0aGlzLm1pbGVzdG9uZURhdGEgPSBkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKCZxdW90O3RoaXMubWlsZXN0b25lRGF0YTomcXVvdDssIHRoaXMubWlsZXN0b25lRGF0YSk7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbGVzdG9uZURhdGE6IFtdLFxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBWaXJ0dWFsU2Nyb2xsTWlsZXN0b25lVGFibGUsXG4gIH0sXG4gIG1ldGhvZHM6IHt9LFxufTtcbiZsdDsvc2NyaXB0Jmd0O1xuXG4mbHQ7c3R5bGUgbGFuZz0mcXVvdDtsZXNzJnF1b3Q7IHNjb3BlZCZndDtcbi5kb3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5hcHByb3ZlZCB7XG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xufVxuLnJlc2VhcmNoIHtcbiAgYmFja2dyb3VuZDogIzM0YjgwMCAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtc2xvdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG59XG4uZm9vdFNsb3Qge1xuICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNDBweDtcbiAgfVxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgfVxuICB9XG59XG4mbHQ7L3N0eWxlJmd0O1xuPC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlLWZvbGRlclwiPuaYvuekuuS7o+eggTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbjxoMz5BUEk8L2gzPlxuPHRhYmxlPlxuPHRoZWFkPlxuPHRyPlxuPHRoPuWxnuaApzwvdGg+XG48dGg+6K+05piOPC90aD5cbjx0aD7nsbvlnos8L3RoPlxuPHRoPum7mOiupOWAvDwvdGg+XG48L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbjx0cj5cbjx0ZD5kYXRhPC90ZD5cbjx0ZD7muLLmn5PmlbDmja48L3RkPlxuPHRkPjxjb2RlPkFycmF5Jmx0O0FycmF5Jmd0OyA8L2NvZGU+PC90ZD5cbjx0ZD48Y29kZT5bW11dPC9jb2RlPiDmoLzlvI/vvJogPGNvZGU+W1t7ZGF0ZTp4eHgsZXZlbnQ6e319XV08L2NvZGU+PC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+dGRIZWlnaHQ8L3RkPlxuPHRkPuavj+S4quagvOWtkOeahOmrmOW6pjwvdGQ+XG48dGQ+TnVtYmVyPC90ZD5cbjx0ZD44MCA8Y29kZT5weDwvY29kZT48L3RkPlxuPC90cj5cbjx0cj5cbjx0ZD50ZFdpZHRoPC90ZD5cbjx0ZD7mr4/kuKrmoLzlrZDnmoTlrr3luqY8L3RkPlxuPHRkPk51bWJlcjwvdGQ+XG48dGQ+MjMwIDxjb2RlPnB4PC9jb2RlPjwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPmNvbnRlbnRIZWlnaHQ8L3RkPlxuPHRkPuihqOagvOeahOmrmOW6pjwvdGQ+XG48dGQ+TnVtYmVyPC90ZD5cbjx0ZD4zMDAgPGNvZGU+cHg8L2NvZGU+PC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+bm9GdWxsU2NyZWVuPC90ZD5cbjx0ZD7msqHmnInmlL7lpKflip/og708L3RkPlxuPHRkPkJvb2xlYW48L3RkPlxuPHRkPmZhbHNlPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+ZnVsbFNjcmVlblRpdGxlPC90ZD5cbjx0ZD7mlL7lpKflvLnnqpfnmoR0aXRsZTwvdGQ+XG48dGQ+U3RyaW5nPC90ZD5cbjx0ZD7nm7jlhbPoja/niak8L3RkPlxuPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgaW1wb3J0IENvbWN5aHMxa3lsbmJsd2x6dkRlbW8wIGZyb20gXCIuL3ZpcnR1YWxTY3JvbGwtbWlsZXN0b25lVGFibGUubWQ/ZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiO1xuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdDb21wb25lbnREb2MnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbWN5aHMxa3lsbmJsd2x6dkRlbW8wJzogQ29tY3loczFreWxuYmx3bHp2RGVtbzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICA8L3NjcmlwdD5cbiAgICAiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkMTI5MTliJnNjb3BlZD10cnVlJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZmZW5jZSZjb21wb25lbnRJbmRleD0wXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRkMTI5MTliJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJmZlbmNlJmNvbXBvbmVudEluZGV4PTBcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGQxMjkxOWJcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3ZpcnR1YWxTY3JvbGwtbWlsZXN0b25lVGFibGUubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjU4ZDA0OTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdmlydHVhbFNjcm9sbC1taWxlc3RvbmVUYWJsZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLypcbiAqIEBBdXRob3I6IGF0ZG93XG4gKiBARGF0ZTogMjAyMS0wMy0xOCAxMToxMjozNVxuICogQExhc3RFZGl0b3JzOiBudWxsXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTAzLTE4IDExOjQzOjU3XG4gKiBARGVzY3JpcHRpb246IGZpbGUgY29udGVudFxuICovXG5pbXBvcnQgU01pbGVzdG9uZVRhYmxlIGZyb20gJy4vc3JjL2luZGV4LmpzJ1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuU01pbGVzdG9uZVRhYmxlLmluc3RhbGwgPSBmdW5jdGlvbiAoVnVlKSB7XG4gICAgVnVlLmNvbXBvbmVudChTTWlsZXN0b25lVGFibGUubmFtZSwgU01pbGVzdG9uZVRhYmxlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTTWlsZXN0b25lVGFibGVcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9tYXJrZG93bi12dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTEhLi92aXJ0dWFsU2Nyb2xsLW1pbGVzdG9uZVRhYmxlLm1kP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGQxMjkxOWImcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmZmVuY2UmY29tcG9uZW50SW5kZXg9MFwiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL3ZpcnR1YWxTY3JvbGwtbWlsZXN0b25lVGFibGUubWQ/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00ZDEyOTE5YiZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZSZmZW5jZSZjb21wb25lbnRJbmRleD0wXCIiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRvdFtkYXRhLXYtNGQxMjkxOWJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmFwcHJvdmVkW2RhdGEtdi00ZDEyOTE5Yl0ge1xcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XFxufVxcbi5yZXNlYXJjaFtkYXRhLXYtNGQxMjkxOWJdIHtcXG4gIGJhY2tncm91bmQ6ICMzNGI4MDAgIWltcG9ydGFudDtcXG59XFxuLmNvbnRlbnQtc2xvdFtkYXRhLXYtNGQxMjkxOWJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG4uY29udGVudC1zbG90IHBbZGF0YS12LTRkMTI5MTliXSB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbn1cXG4uZm9vdFNsb3QgbGlbZGF0YS12LTRkMTI5MTliXTpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDE0MHB4O1xcbn1cXG4uZm9vdFNsb3QgbGlbZGF0YS12LTRkMTI5MTliXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZvb3RTbG90IGxpIHNwYW5bZGF0YS12LTRkMTI5MTliXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBsaW5lLWhlaWdodDogMTJweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=