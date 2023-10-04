(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{232:function(t,a,e){"use strict";e.r(a);e(23);var r={name:"ColorGridChart",props:{data:{type:Array,default:function(){return[[]]}},itemHeight:{type:Number,default:50}},data:()=>({maxValue:0,minValue:0,colors:[],startColor:"#eceff9",endColor:"#273C70"}),components:{},watch:{data:{immediate:!0,handler:function(){const{max:t,min:a}=this.calDataBoundaryValue();this.maxValue=t,this.minValue=a;let e=0;e=0===this.minValue?0===this.maxValue?0:this.maxValue-this.minValue+1:this.maxValue-this.minValue;const r=this.gradientColors(this.startColor,this.endColor,e);this.colors=r}}},computed:{},created(){},mounted(){},methods:{gradientColors(t,a,e,r){var o,n,i,l,s=[],c=[];r=r||1;var u=function(t){return Math.pow(t/255,r)};for(t=this.parseColor(t).map(u),a=this.parseColor(a).map(u),o=0;o<e;o++){for(l=1-(i=o/(e-1)),n=0;n<3;n++)c[n]=this.pad(Math.round(255*Math.pow(t[n]*l+a[n]*i,1/r)).toString(16));s.push("#"+c.join(""))}return s},parseColor:t=>4===t.length?t.substr(1).split("").map((function(t){return 17*parseInt(t,16)})):[t.substr(1,2),t.substr(3,2),t.substr(5,2)].map((function(t){return parseInt(t,16)})),pad:t=>1===t.length?"0"+t:t,calDataBoundaryValue(){let t=0,a=0;return this.data.forEach(e=>{e&&e.forEach(e=>{e.value>t&&(t=e.value),e.value<a&&(a=e.value)})}),{max:t,min:a}},calItemColor(t){let a="white",e=Math.ceil((this.colors.length-1)*t/(this.maxValue-this.minValue));return e>this.colors.length-1&&(e=this.colors.length-1),a=this.colors[e],{color:a,colorsIndex:e}},itemClick(t){this.$emit("itemClick",t)}},beforeDestroy(){}},o=(e(332),e(9)),n=Object(o.a)(r,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"color-grid-chart"},t._l(t.data,(function(e,r){return a("div",{key:r,staticClass:"color-grid-chart-row",style:{height:t.itemHeight+"px"}},t._l(e,(function(e,r){return a("div",{key:r,staticClass:"color-grid-chart-item",style:{background:t.calItemColor(e.value).color},on:{click:function(a){return t.itemClick(e)}}},[t.$scopedSlots.default?[t._t("default",null,{record:e})]:a("span",[t._v(" "+t._s(e.value))])],2)})),0)})),0)}),[],!1,null,"070ca96a",null);a.default=n.exports},302:function(t,a,e){var r=e(2),o=e(333);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var n={insert:"head",singleton:!1};r(o,n);t.exports=o.locals||{}},332:function(t,a,e){"use strict";e(302)},333:function(t,a,e){(a=e(3)(!1)).push([t.i,".color-grid-chart-row[data-v-070ca96a] {\n  display: flex;\n  width: 100%;\n}\n.color-grid-chart-item[data-v-070ca96a] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  flex: 1;\n  border: 1px solid white;\n}\n.color-grid-chart-item[data-v-070ca96a]:hover {\n  border-color: black;\n}\n",""]),t.exports=a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC9zcmMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9jb2xvci1ncmlkLWNoYXJ0L3NyYy9pbmRleC52dWU/M2UwNiIsIndlYnBhY2s6Ly8vc3JjL3BhY2thZ2VzL2NvbG9yLWdyaWQtY2hhcnQvc3JjL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC9zcmMvaW5kZXgudnVlPzE4M2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2NvbG9yLWdyaWQtY2hhcnQvc3JjL2luZGV4LnZ1ZT80MWU2Iiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9jb2xvci1ncmlkLWNoYXJ0L3NyYy9pbmRleC52dWU/YzU5NyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvY29sb3ItZ3JpZC1jaGFydC9zcmMvaW5kZXgudnVlPzIyMTEiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwiZGF0YSIsInR5cGUiLCJBcnJheSIsImRlZmF1bHQiLCJpdGVtSGVpZ2h0IiwiTnVtYmVyIiwibWF4VmFsdWUiLCJtaW5WYWx1ZSIsImNvbG9ycyIsInN0YXJ0Q29sb3IiLCJlbmRDb2xvciIsImNvbXBvbmVudHMiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJtYXgiLCJtaW4iLCJjYWxEYXRhQm91bmRhcnlWYWx1ZSIsInN0ZXAiLCJncmFkaWVudENvbG9ycyIsImNvbXB1dGVkIiwiY3JlYXRlZCIsIm1vdW50ZWQiLCJtZXRob2RzIiwic3RhcnQiLCJlbmQiLCJzdGVwcyIsImdhbW1hIiwiaSIsImoiLCJtcyIsIm1lIiwib3V0cHV0Iiwic28iLCJub3JtYWxpemUiLCJjaGFubmVsIiwiTWF0aCIsInBvdyIsInBhcnNlQ29sb3IiLCJtYXAiLCJwYWQiLCJyb3VuZCIsInRvU3RyaW5nIiwicHVzaCIsImpvaW4iLCJoZXhTdHIiLCJsZW5ndGgiLCJzdWJzdHIiLCJzcGxpdCIsInMiLCJwYXJzZUludCIsImZvckVhY2giLCJkYXRhSXRlbSIsIml0ZW0iLCJ2YWx1ZSIsImNhbEl0ZW1Db2xvciIsImNvbG9yIiwiY29sb3JzSW5kZXgiLCJjZWlsIiwiaXRlbUNsaWNrIiwiJGVtaXQiLCJiZWZvcmVEZXN0cm95IiwiY29tcG9uZW50IiwiX3ZtIiwidGhpcyIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl9sIiwiZGF0YVJvdyIsImRhdGFSb3dJbmRleCIsImtleSIsInN0eWxlIiwiaGVpZ2h0IiwiZGF0YUl0ZW1JbmRleCIsImJhY2tncm91bmQiLCJvbiIsIiRldmVudCIsIiRzY29wZWRTbG90cyIsIl90IiwiX3YiLCJfcyIsImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwibW9kdWxlIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iXSwibWFwcGluZ3MiOiJ3R0FBQSxJQ0FnTixFQytCak0sQ0FDZkEsS0FBQSxpQkFDQUMsTUFBQSxDQUNBQyxLQUFBLENBQ0FDLEtBQUFDLE1BQ0FDLFFBQUEsV0FDQSxhQUdBQyxXQUFBLENBQ0FILEtBQUFJLE9BQ0FGLFFBQUEsS0FHQUgsVUFDQSxDQUNBTSxTQUFBLEVBQ0FDLFNBQUEsRUFDQUMsT0FBQSxHQUNBQyxXQUFBLFVBQ0FDLFNBQUEsWUFHQUMsV0FBQSxHQUNBQyxNQUFBLENBQ0FaLEtBQUEsQ0FDQWEsV0FBQSxFQUNBQyxRQUFBLFdBQ0EsVUFBQUMsRUFBQSxJQUFBQyxHQUFBLEtBQUFDLHVCQUNBLEtBQUFYLFNBQUFTLEVBQ0EsS0FBQVIsU0FBQVMsRUFDQSxJQUFBRSxFQUFBLEVBR0FBLEVBRkEsU0FBQVgsU0FDQSxTQUFBRCxTQUNBLEVBRUEsS0FBQUEsU0FBQSxLQUFBQyxTQUFBLEVBR0EsS0FBQUQsU0FBQSxLQUFBQyxTQUVBLE1BQUFDLEVBQUEsS0FBQVcsZUFBQSxLQUFBVixXQUFBLEtBQUFDLFNBQUFRLEdB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LEVBQVEsR0FDRkMsRUFBVSxFQUFRLEtBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRaEYsUUFBVWdGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0UsRUFBT3pELEVBQUl1RCxFQUFTLE1BRzlDLElBQUlHLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQSixFQUFJQyxFQUFTRyxHQUkxQkQsRUFBT0UsUUFBVUosRUFBUUssUUFBVSxJLGlDQ2xCbkMsUSxxQkNFQUQsRUFEa0MsRUFBUSxFQUNoQ0UsRUFBNEIsSUFFOUI5QyxLQUFLLENBQUMwQyxFQUFPekQsRUFBSSwyVUFBNFUsS0FFcld5RCxFQUFPRSxRQUFVQSIsImZpbGUiOiJqcy82NC4wNGQ5OGJkOGM3YzJmMjY2YWM0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0XCJ9LF92bS5fbCgoX3ZtLmRhdGEpLGZ1bmN0aW9uKGRhdGFSb3csZGF0YVJvd0luZGV4KXtyZXR1cm4gX2MoJ2Rpdicse2tleTpkYXRhUm93SW5kZXgsc3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0LXJvd1wiLHN0eWxlOih7IGhlaWdodDogX3ZtLml0ZW1IZWlnaHQgKyAncHgnIH0pfSxfdm0uX2woKGRhdGFSb3cpLGZ1bmN0aW9uKGRhdGFJdGVtLGRhdGFJdGVtSW5kZXgpe3JldHVybiBfYygnZGl2Jyx7a2V5OmRhdGFJdGVtSW5kZXgsc3RhdGljQ2xhc3M6XCJjb2xvci1ncmlkLWNoYXJ0LWl0ZW1cIixzdHlsZTooeyBiYWNrZ3JvdW5kOiBfdm0uY2FsSXRlbUNvbG9yKGRhdGFJdGVtLnZhbHVlKS5jb2xvciB9KSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5pdGVtQ2xpY2soZGF0YUl0ZW0pfX19LFsoX3ZtLiRzY29wZWRTbG90cy5kZWZhdWx0KT9bX3ZtLl90KFwiZGVmYXVsdFwiLG51bGwse1wicmVjb3JkXCI6ZGF0YUl0ZW19KV06X2MoJ3NwYW4nLFtfdm0uX3YoXCIgXCIrX3ZtLl9zKGRhdGFJdGVtLnZhbHVlKSldKV0sMil9KSwwKX0pLDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8IS0tXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjItMDMtMjMgMTU6MTA6NTFcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMi0wNC0wMSAxMzo0NjowNlxuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4tLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbG9yLWdyaWQtY2hhcnRcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImNvbG9yLWdyaWQtY2hhcnQtcm93XCJcbiAgICAgIHYtZm9yPVwiKGRhdGFSb3csIGRhdGFSb3dJbmRleCkgaW4gZGF0YVwiXG4gICAgICA6a2V5PVwiZGF0YVJvd0luZGV4XCJcbiAgICAgIDpzdHlsZT1cInsgaGVpZ2h0OiBpdGVtSGVpZ2h0ICsgJ3B4JyB9XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY29sb3ItZ3JpZC1jaGFydC1pdGVtXCJcbiAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kOiBjYWxJdGVtQ29sb3IoZGF0YUl0ZW0udmFsdWUpLmNvbG9yIH1cIlxuICAgICAgICB2LWZvcj1cIihkYXRhSXRlbSwgZGF0YUl0ZW1JbmRleCkgaW4gZGF0YVJvd1wiXG4gICAgICAgIDprZXk9XCJkYXRhSXRlbUluZGV4XCJcbiAgICAgICAgQGNsaWNrPVwiaXRlbUNsaWNrKGRhdGFJdGVtKVwiXG4gICAgICA+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiJHNjb3BlZFNsb3RzLmRlZmF1bHRcIj5cbiAgICAgICAgICA8c2xvdCA6cmVjb3JkPVwiZGF0YUl0ZW1cIiAvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8c3BhbiB2LWVsc2U+IHt7IGRhdGFJdGVtLnZhbHVlIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdDb2xvckdyaWRDaGFydCcsXG4gIHByb3BzOiB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBbW11dXG4gICAgICB9LFxuICAgIH0sXG4gICAgaXRlbUhlaWdodDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNTAsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWF4VmFsdWU6IDAsXG4gICAgICBtaW5WYWx1ZTogMCxcbiAgICAgIGNvbG9yczogW10sXG4gICAgICBzdGFydENvbG9yOiAnI2VjZWZmOScsXG4gICAgICBlbmRDb2xvcjogJyMyNzNDNzAnLFxuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge30sXG4gIHdhdGNoOiB7XG4gICAgZGF0YToge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB7IG1heCwgbWluIH0gPSB0aGlzLmNhbERhdGFCb3VuZGFyeVZhbHVlKClcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IG1heFxuICAgICAgICB0aGlzLm1pblZhbHVlID0gbWluXG4gICAgICAgIGxldCBzdGVwID0gMFxuICAgICAgICBpZiAodGhpcy5taW5WYWx1ZSA9PT0gMCkge1xuICAgICAgICAgIGlmICh0aGlzLm1heFZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICBzdGVwID0gMFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGVwID0gdGhpcy5tYXhWYWx1ZSAtIHRoaXMubWluVmFsdWUgKyAxIC8vIOWmguaenOaYrzAteOaXtu+8jHN0ZXDlupTor6XmmK94LTArMSww5Lmf6ZyA6KaB5Y2g5LiA5Liq5YiG5YmyXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ZXAgPSB0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IHRoaXMuZ3JhZGllbnRDb2xvcnModGhpcy5zdGFydENvbG9yLCB0aGlzLmVuZENvbG9yLCBzdGVwKVxuICAgICAgICB0aGlzLmNvbG9ycyA9IGNvbG9yc1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbWF4OicsIG1heCwgbWluKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jb2xvcnMgOicsIHRoaXMuY29sb3JzKVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge30sXG4gIGNyZWF0ZWQoKSB7fSxcbiAgbW91bnRlZCgpIHt9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICBzdGFydCDlvIDlp4vpopzoibJcbiAgICAgIGVuZCDnu5PmnZ/popzoibJcbiAgICAgIHN0ZXBzIOminOiJsuWIhuinoyDmrKHmlbBcbiAgICAgIGdhbW1hIOaaguaXtueQhuino+S4uumAj+aYjuS4gOeCue+8iOS8vemprO+8iVxuICAgICAqL1xuICAgIGdyYWRpZW50Q29sb3JzKHN0YXJ0LCBlbmQsIHN0ZXBzLCBnYW1tYSkge1xuICAgICAgdmFyIGksXG4gICAgICAgIGosXG4gICAgICAgIG1zLFxuICAgICAgICBtZSxcbiAgICAgICAgb3V0cHV0ID0gW10sXG4gICAgICAgIHNvID0gW11cbiAgICAgIGdhbW1hID0gZ2FtbWEgfHwgMVxuICAgICAgdmFyIG5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhjaGFubmVsIC8gMjU1LCBnYW1tYSlcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gdGhpcy5wYXJzZUNvbG9yKHN0YXJ0KS5tYXAobm9ybWFsaXplKVxuICAgICAgZW5kID0gdGhpcy5wYXJzZUNvbG9yKGVuZCkubWFwKG5vcm1hbGl6ZSlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzdGVwczsgaSsrKSB7XG4gICAgICAgIG1zID0gaSAvIChzdGVwcyAtIDEpXG4gICAgICAgIG1lID0gMSAtIG1zXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICBzb1tqXSA9IHRoaXMucGFkKFxuICAgICAgICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgICAgICAgTWF0aC5wb3coc3RhcnRbal0gKiBtZSArIGVuZFtqXSAqIG1zLCAxIC8gZ2FtbWEpICogMjU1XG4gICAgICAgICAgICApLnRvU3RyaW5nKDE2KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQucHVzaCgnIycgKyBzby5qb2luKCcnKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRwdXRcbiAgICB9LFxuICAgIHBhcnNlQ29sb3IoaGV4U3RyKSB7XG4gICAgICByZXR1cm4gaGV4U3RyLmxlbmd0aCA9PT0gNFxuICAgICAgICA/IGhleFN0clxuICAgICAgICAgICAgLnN1YnN0cigxKVxuICAgICAgICAgICAgLnNwbGl0KCcnKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgICByZXR1cm4gMHgxMSAqIHBhcnNlSW50KHMsIDE2KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgOiBbaGV4U3RyLnN1YnN0cigxLCAyKSwgaGV4U3RyLnN1YnN0cigzLCAyKSwgaGV4U3RyLnN1YnN0cig1LCAyKV0ubWFwKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHMsIDE2KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICB9LFxuICAgIC8vIHplcm8tcGFkIDEgZGlnaXQgdG8gMlxuICAgIHBhZChzKSB7XG4gICAgICByZXR1cm4gcy5sZW5ndGggPT09IDEgPyAnMCcgKyBzIDogc1xuICAgIH0sXG4gICAgY2FsRGF0YUJvdW5kYXJ5VmFsdWUoKSB7XG4gICAgICBsZXQgbWF4ID0gMFxuICAgICAgbGV0IG1pbiA9IDBcbiAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKChkYXRhSXRlbSkgPT4ge1xuICAgICAgICBpZiAoZGF0YUl0ZW0pIHtcbiAgICAgICAgICBkYXRhSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgICBtYXggPSBpdGVtLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA8IG1pbikge1xuICAgICAgICAgICAgICBtaW4gPSBpdGVtLnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhOicsIHRoaXMuZGF0YSlcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdtYXg6JywgbWF4LCBtaW4pXG4gICAgICByZXR1cm4geyBtYXgsIG1pbiB9XG4gICAgfSxcbiAgICBjYWxJdGVtQ29sb3IodmFsdWUpIHtcbiAgICAgIGxldCBjb2xvciA9ICd3aGl0ZSdcbiAgICAgIC8qKlxuICAgICAgICog5Z+65pys5YWs5byP77yaY29sb3JzSW5kZXgvKHRoaXMuY29sb3JzLmxlbmd0aCAtIDEpID0gdmFsdWUvKHRoaXMubWF4VmFsdWUgLSB0aGlzLm1pblZhbHVlKVxuICAgICAgICog5L2G5piv5LiN5LiA5a6a5Lya5pyJ5pW05Y+W55qE57Si5byV77yM5a655piT6LaK55WMXG4gICAgICAgKi9cbiAgICAgIGxldCBjb2xvcnNJbmRleCA9IE1hdGguY2VpbChcbiAgICAgICAgKCh0aGlzLmNvbG9ycy5sZW5ndGggLSAxKSAqIHZhbHVlKSAvICh0aGlzLm1heFZhbHVlIC0gdGhpcy5taW5WYWx1ZSlcbiAgICAgIClcbiAgICAgIC8vIOWuueaYk+i2iueVjOWkhOeQhlxuICAgICAgaWYgKGNvbG9yc0luZGV4ID4gdGhpcy5jb2xvcnMubGVuZ3RoIC0gMSkge1xuICAgICAgICBjb2xvcnNJbmRleCA9IHRoaXMuY29sb3JzLmxlbmd0aCAtIDFcbiAgICAgIH1cbiAgICAgIGNvbG9yID0gdGhpcy5jb2xvcnNbY29sb3JzSW5kZXhdXG4gICAgICAvLyBpZiAoISEhY29sb3IpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2NvbG9yOicsIGNvbG9yKVxuICAgICAgLy8gICBjb25zb2xlLmxvZygnY29sb3JzSW5kZXg6JywgY29sb3JzSW5kZXgpXG4gICAgICAvLyB9XG4gICAgICByZXR1cm4geyBjb2xvciwgY29sb3JzSW5kZXggfVxuICAgIH0sXG4gICAgaXRlbUNsaWNrKGl0ZW0pIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2l0ZW1DbGljaycsIGl0ZW0pXG4gICAgfSxcbiAgfSxcbiAgYmVmb3JlRGVzdHJveSgpIHt9LFxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG4uY29sb3ItZ3JpZC1jaGFydCB7XG4gICYtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICYtaXRlbSB7XG4gICAgLy8gd2lkdGg6IDUwcHg7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3MGNhOTZhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3MGNhOTZhJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNzBjYTk2YVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDcwY2E5NmEmcHJvZCZsYW5nPWxlc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3MGNhOTZhJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlJlwiIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb2xvci1ncmlkLWNoYXJ0LXJvd1tkYXRhLXYtMDcwY2E5NmFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbG9yLWdyaWQtY2hhcnQtaXRlbVtkYXRhLXYtMDcwY2E5NmFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcbi5jb2xvci1ncmlkLWNoYXJ0LWl0ZW1bZGF0YS12LTA3MGNhOTZhXTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==