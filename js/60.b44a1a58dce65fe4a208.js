(window.webpackJsonp=window.webpackJsonp||[]).push([[60,70],{237:function(t,n,i){"use strict";i.r(n);var e=i(241);e.default.install=function(t){t.component(e.default.name,e.default)},n.default=e.default},241:function(t,n,i){"use strict";i.r(n);i(24);var e={name:"ScrollNumber",model:{prop:"count",event:"setCount"},props:{count:{type:Number,default:0},isThousandSplit:{type:Boolean,default:!1},length:{type:Number,default:9}},data:()=>({initNumArray:["0"],displayNumArray:[]}),watch:{count:{immediate:!0,handler:function(){const t=this.count,n=this.numToArray(t);this.initNumArray=[],n.forEach(t=>{isNaN(t)?this.initNumArray.push(","):this.initNumArray.push("0")}),this.displayNumArray=n,this.$nextTick(()=>{const t=setTimeout(()=>{this.setNumberTransform(),clearTimeout(t)},0)})}}},mounted(){},methods:{numToArray(t){if(!0===this.isThousandSplit){if(this.length){let n="";for(let t=0;t<this.length;t++)n+="9";Number(n),0;let i="";if(String(t).length<=this.length){const n=this.length-String(t).length;i=String(t);for(let t=0;t<n;t++)i="0"+i}return this.thousandSplit(i).split("")}return this.thousandSplit(t).split("")}return String(t).split("")},thousandSplit:t=>(t+"").replace(/\d{1,3}(?=(\d{3})+$)/g,"$&,"),setNumberTransform(){this.displayNumArray.forEach((t,n)=>{if(!isNaN(t)){this.$refs.itemRef[n].children[0].children[0].style.transform=`translate(-50%, -${10*t}%)`}})}}},r=(i(345),i(9)),s=Object(r.a)(e,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"s-scroll-number"},t._l(t.initNumArray,(function(i,e){return n("li",{key:e,ref:"itemRef",refInFor:!0,class:{"number-item":!isNaN(i),"mark-item":isNaN(i)}},[isNaN(i)?n("span",{staticClass:"comma"},[t._v(t._s(i))]):n("span",[n("i",[t._v("0123456789")])])])})),0)}),[],!1,null,"7038f128",null);n.default=s.exports},317:function(t,n,i){var e=i(2),r=i(346);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1};e(r,s);t.exports=r.locals||{}},345:function(t,n,i){"use strict";i(317)},346:function(t,n,i){(n=i(3)(!1)).push([t.i,"/*总量滚动数字设置*/\n.s-scroll-number[data-v-7038f128] {\n  position: relative;\n  height: 100px;\n  font-size: 54px;\n  line-height: 41px;\n  text-align: center;\n  list-style: none;\n  color: #2d7cff;\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  /*文字禁止编辑*/\n  -moz-user-select: none;\n  /*火狐*/\n  -webkit-user-select: none;\n  /*webkit浏览器*/\n  /*IE10*/\n  /*早期浏览器*/\n  user-select: none;\n  /* overflow: hidden; */\n}\n/* 默认逗号设置 */\n.mark-item[data-v-7038f128] {\n  width: 10px;\n  height: 100px;\n  margin-right: 5px;\n  line-height: 10px;\n  font-size: 48px;\n  position: relative;\n}\n.mark-item > span[data-v-7038f128] {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n}\n/*滚动数字设置*/\n.number-item[data-v-7038f128] {\n  width: 41px;\n  height: 75px;\n  background: #ccc;\n  list-style: none;\n  margin-right: 5px;\n  background: #fafafa;\n  border-radius: 4px;\n  border: 1px solid #dddddd;\n}\n.number-item > span[data-v-7038f128] {\n  position: relative;\n  display: inline-block;\n  margin-right: 10px;\n  width: 100%;\n  height: 100%;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n  overflow: hidden;\n}\n.number-item > span > i[data-v-7038f128] {\n  font-style: normal;\n  position: absolute;\n  top: 11px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  transition: transform 0.7s ease-in-out;\n  letter-spacing: 10px;\n}\n.number-item[data-v-7038f128]:last-child {\n  margin-right: 0;\n}\n",""]),t.exports=n}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvZHluYW1pYy1udW1iZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2R5bmFtaWMtbnVtYmVyL3NyYy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2R5bmFtaWMtbnVtYmVyL3NyYy9pbmRleC52dWU/YjRiMSIsIndlYnBhY2s6Ly8vc3JjL3BhY2thZ2VzL2R5bmFtaWMtbnVtYmVyL3NyYy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2R5bmFtaWMtbnVtYmVyL3NyYy9pbmRleC52dWU/NDU0NiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvZHluYW1pYy1udW1iZXIvc3JjL2luZGV4LnZ1ZT9hNzE3Iiwid2VicGFjazovLy8uL3NyYy9wYWNrYWdlcy9keW5hbWljLW51bWJlci9zcmMvaW5kZXgudnVlPzY1YjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhY2thZ2VzL2R5bmFtaWMtbnVtYmVyL3NyYy9pbmRleC52dWU/NjlmYiJdLCJuYW1lcyI6WyJTY3JvbGxOdW1iZXIiLCJpbnN0YWxsIiwiVnVlIiwiY29tcG9uZW50IiwibmFtZSIsIm1vZGVsIiwicHJvcCIsImV2ZW50IiwicHJvcHMiLCJjb3VudCIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwiaXNUaG91c2FuZFNwbGl0IiwiQm9vbGVhbiIsImxlbmd0aCIsImRhdGEiLCJpbml0TnVtQXJyYXkiLCJkaXNwbGF5TnVtQXJyYXkiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJudW0iLCJudW1BcnJheSIsIm51bVRvQXJyYXkiLCJmb3JFYWNoIiwib3JkZXJOdW1JdGVtIiwiaXNOYU4iLCJwdXNoIiwiJG5leHRUaWNrIiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic2V0TnVtYmVyVHJhbnNmb3JtIiwiY2xlYXJUaW1lb3V0IiwibW91bnRlZCIsIm1ldGhvZHMiLCJtYXhOdW1TdHIiLCJpIiwiZm9ybWF0TnVtIiwiU3RyaW5nIiwic3ViTGVuZ3RoIiwidGhvdXNhbmRTcGxpdCIsInNwbGl0IiwicmVwbGFjZSIsImRpc3BsYXlOdW1BcnJheUl0ZW0iLCJpbmRleCIsIiRyZWZzIiwiaXRlbVJlZiIsImNoaWxkcmVuIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJfdm0iLCJ0aGlzIiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiX2wiLCJpdGVtIiwia2V5IiwicmVmIiwicmVmSW5Gb3IiLCJjbGFzcyIsIl92IiwiX3MiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsIm1vZHVsZSIsIm9wdGlvbnMiLCJleHBvcnRzIiwibG9jYWxzIiwiX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIl0sIm1hcHBpbmdzIjoiOEZBQUEsb0JBVUFBLFVBQWFDLFFBQVUsU0FBU0MsR0FDOUJBLEVBQUlDLFVBQVVILFVBQWFJLEtBQU1KLFlBR3BCQSxZQUFZLFMsOENDZDNCLElDQStNLEVDZ0JoTSxDQUNmSSxLQUFBLGVBQ0FDLE1BQUEsQ0FDQUMsS0FBQSxRQUNBQyxNQUFBLFlBRUFDLE1BQUEsQ0FDQUMsTUFBQSxDQUNBQyxLQUFBQyxPQUNBQyxRQUFBLEdBRUFDLGdCQUFBLENBQ0FILEtBQUFJLFFBQ0FGLFNBQUEsR0FNQUcsT0FBQSxDQUNBTCxLQUFBQyxPQUNBQyxRQUFBLElBR0FJLFVBQ0EsQ0FDQUMsYUFBQSxNQUNBQyxnQkFBQSxLQUdBQyxNQUFBLENBQ0FWLE1BQUEsQ0FDQVcsV0FBQSxFQUNBQyxRQUFBLFdBQ0EsTUFBQUMsRUFBQSxLQUFBYixNQUNBYyxFQUFBLEtBQUFDLFdBQUFGLEdBQ0EsS0FBQUwsYUFBQSxHQUNBTSxFQUFBRSxRQUFBQyxJQUNBQyxNQUFBRCxHQUNBLEtBQUFULGFBQUFXLEtBQUEsS0FFQSxLQUFBWCxhQUFBVyxLQUFBLE9BR0EsS0FBQVYsZ0JBQUFLLEVBQ0EsS0FBQU0sVUFBQSxLQUNBLE1BQUFDLEVBQUFDLFdBQUEsS0FDQSxLQUFBQyxxQkFDQUMsYUFBQUgsSUFDQSxRQUtBSSxZQUNBQyxRQUFBLENBQ0FYLFdBQUFGLEdBQ0EsYUFBQVQsZ0JBQUEsQ0FDQSxRQUFBRSxPQUFBLENBRUEsSUFBQXFCLEVBQUEsR0FDQSxRQUFBQyxFQUFBLEVBQUFBLEVBQUEsS0FBQXRCLE9BQUFzQixJQUNBRCxHQUFBLElBRUF6QixPQUFBeUIsR0FBQXpCLEVBT0EsSUFBQTJCLEVBQUEsR0FDQSxHQUFBQyxPQUFBakIsR0FBQVAsUUFBQSxLQUFBQSxPQUFBLENBQ0EsTUFBQXlCLEVBQUEsS0FBQXpCLE9BQUF3QixPQUFBakIsR0FBQVAsT0FDQXVCLEVBQUFDLE9BQUFqQixHQUNBLFFBQUFlLEVBQUEsRUFBQUEsRUFBQUcsRUFBQUgsSUFDQUMsRUFBQSxJQUFBQSxFQUlBLFlBQUFHLGNBQUFILEdBQUFJLE1BQUEsSUFFQSxZQUFBRCxjQUFBbkIsR0FBQW9CLE1BQUEsSUFHQSxPQUFBSCxPQUFBakIsR0FBQW9CLE1BQUEsS0FJQUQsY0FBQW5CLElBRUFBLEVBQUEsSUFBQXFCLFFBREEsd0JBQ0EsT0FHQVgscUJBQ0EsS0FBQWQsZ0JBQUFPLFFBQUEsQ0FBQW1CLEVBQUFDLEtBQ0EsSUFBQWxCLE1BQUFpQixHQUFBLENBQ0EsS0FBQUUsTUFBQUMsUUFBQUYsR0FBQUcsU0FBQSxHQUFBQSxTQUFBLEdBQ0FDLE1BQUFDLFVBQUEsdUJBQUFOLFksZ0JDMUdJekMsRUFBWSxZQUNkLEdIVFcsV0FBa0IsSUFBSWdELEVBQUlDLEtBQUtDLEVBQUdGLEVBQUlHLE1BQU1ELEdBQUcsT0FBT0EsRUFBRyxNQUFNLENBQUNFLFlBQVksbUJBQW1CSixFQUFJSyxHQUFJTCxFQUFJbEMsY0FBYyxTQUFTd0MsRUFBS1osR0FBTyxPQUFPUSxFQUFHLEtBQUssQ0FBQ0ssSUFBSWIsRUFBTWMsSUFBSSxVQUFVQyxVQUFTLEVBQUtDLE1BQU0sQ0FBRSxlQUFnQmxDLE1BQU04QixHQUFPLFlBQWE5QixNQUFNOEIsS0FBUyxDQUFHOUIsTUFBTThCLEdBQW1ESixFQUFHLE9BQU8sQ0FBQ0UsWUFBWSxTQUFTLENBQUNKLEVBQUlXLEdBQUdYLEVBQUlZLEdBQUdOLE1BQTNGSixFQUFHLE9BQU8sQ0FBQ0EsRUFBRyxJQUFJLENBQUNGLEVBQUlXLEdBQUcsdUJBQThFLEtBRXBYLElHVXBCLEVBQ0EsS0FDQSxXQUNBLE1BSWEsVUFBQTNELEUsNkJDbkJmLElBQUk2RCxFQUFNLEVBQVEsR0FDRkMsRUFBVSxFQUFRLEtBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRckQsUUFBVXFELEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0UsRUFBTzlCLEVBQUk0QixFQUFTLE1BRzlDLElBQUlHLEVBQVUsQ0FFZCxPQUFpQixPQUNqQixXQUFvQixHQUVQSixFQUFJQyxFQUFTRyxHQUkxQkQsRUFBT0UsUUFBVUosRUFBUUssUUFBVSxJLGlDQ2xCbkMsUSxxQkNFQUQsRUFEa0MsRUFBUSxFQUNoQ0UsRUFBNEIsSUFFOUIzQyxLQUFLLENBQUN1QyxFQUFPOUIsRUFBSSwyOUNBQTQ5QyxLQUVyL0M4QixFQUFPRSxRQUFVQSIsImZpbGUiOiJqcy82MC5iNDRhMWE1OGRjZTY1ZmU0YTIwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBhdGRvd1xuICogQERhdGU6IDIwMjEtMDYtMTcgMTA6Mzk6NDJcbiAqIEBMYXN0RWRpdG9yczogbnVsbFxuICogQExhc3RFZGl0VGltZTogMjAyMS0wNi0xNyAxNjoxNTo1NlxuICogQERlc2NyaXB0aW9uOiBmaWxlIGRlc2NyaXB0aW9uXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmltcG9ydCBTY3JvbGxOdW1iZXIgZnJvbSAnLi9zcmMvaW5kZXgnXG5TY3JvbGxOdW1iZXIuaW5zdGFsbCA9IGZ1bmN0aW9uKFZ1ZSkge1xuICBWdWUuY29tcG9uZW50KFNjcm9sbE51bWJlci5uYW1lLCBTY3JvbGxOdW1iZXIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbE51bWJlclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdm09dGhpcyxfYz1fdm0uX3NlbGYuX2M7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcInMtc2Nyb2xsLW51bWJlclwifSxfdm0uX2woKF92bS5pbml0TnVtQXJyYXkpLGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3JldHVybiBfYygnbGknLHtrZXk6aW5kZXgscmVmOlwiaXRlbVJlZlwiLHJlZkluRm9yOnRydWUsY2xhc3M6eyAnbnVtYmVyLWl0ZW0nOiAhaXNOYU4oaXRlbSksICdtYXJrLWl0ZW0nOiBpc05hTihpdGVtKSB9fSxbKCFpc05hTihpdGVtKSk/X2MoJ3NwYW4nLFtfYygnaScsW192bS5fdihcIjAxMjM0NTY3ODlcIildKV0pOl9jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJjb21tYVwifSxbX3ZtLl92KF92bS5fcyhpdGVtKSldKV0pfSksMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzLXNjcm9sbC1udW1iZXJcIj5cbiAgICA8bGlcbiAgICAgIDpjbGFzcz1cInsgJ251bWJlci1pdGVtJzogIWlzTmFOKGl0ZW0pLCAnbWFyay1pdGVtJzogaXNOYU4oaXRlbSkgfVwiXG4gICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaW5pdE51bUFycmF5XCJcbiAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICByZWY9XCJpdGVtUmVmXCJcbiAgICA+XG4gICAgICA8c3BhbiB2LWlmPVwiIWlzTmFOKGl0ZW0pXCI+XG4gICAgICAgIDxpPjAxMjM0NTY3ODk8L2k+XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImNvbW1hXCIgdi1lbHNlPnt7IGl0ZW0gfX08L3NwYW4+XG4gICAgPC9saT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1Njcm9sbE51bWJlcicsXG4gIG1vZGVsOiB7XG4gICAgcHJvcDogJ2NvdW50JyxcbiAgICBldmVudDogJ3NldENvdW50JyxcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBjb3VudDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGlzVGhvdXNhbmRTcGxpdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5pyA5aSn6ZmQ5Yi26IyD5Zu0XG4gICAgICog5aaC5p6c5bCP5LqO5pyA5aSn6ZmQ5Yi277yM5YiZ5YmN6Z2i5Lya6KGlMFxuICAgICAqL1xuICAgIGxlbmd0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogOSxcbiAgICB9LFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbml0TnVtQXJyYXk6IFsnMCddLCAvLyDliJ3lp4vljJbmmL7npLrnlKhcbiAgICAgIGRpc3BsYXlOdW1BcnJheTogW10sIC8vIOecn+ato+aYvuekuueahOaVsOaNrlxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjb3VudDoge1xuICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBudW0gPSB0aGlzLmNvdW50XG4gICAgICAgIGNvbnN0IG51bUFycmF5ID0gdGhpcy5udW1Ub0FycmF5KG51bSlcbiAgICAgICAgdGhpcy5pbml0TnVtQXJyYXkgPSBbXVxuICAgICAgICBudW1BcnJheS5mb3JFYWNoKChvcmRlck51bUl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXNOYU4ob3JkZXJOdW1JdGVtKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0TnVtQXJyYXkucHVzaCgnLCcpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdE51bUFycmF5LnB1c2goJzAnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5kaXNwbGF5TnVtQXJyYXkgPSBudW1BcnJheVxuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TnVtYmVyVHJhbnNmb3JtKClcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICB9LCAwKVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge30sXG4gIG1ldGhvZHM6IHtcbiAgICBudW1Ub0FycmF5KG51bSkge1xuICAgICAgaWYgKHRoaXMuaXNUaG91c2FuZFNwbGl0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIC0tLS0t5pyA5aSn6ZmQ5Yi26IyD5Zu05Yik5patc3RhcnQtLS0tLVxuICAgICAgICAgIGxldCBtYXhOdW1TdHIgPSAnJ1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbWF4TnVtU3RyICs9ICc5J1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoTnVtYmVyKG1heE51bVN0cikgPCBudW0gJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign6LaF5Ye65LqG5pyA5aSn6ZmQ5Yi26IyD5Zu0JylcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRob3VzYW5kU3BsaXQobWF4TnVtU3RyKS5zcGxpdCgnJylcbiAgICAgICAgICAgIC8vIHJldHVybiBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gLS0tLS3mnIDlpKfpmZDliLbojIPlm7TliKTmlq1lbmQtLS0tLVxuICAgICAgICAgIC8vIC0tLS0t6KGlMHN0YXJ0LS0tLS1cbiAgICAgICAgICBsZXQgZm9ybWF0TnVtID0gJydcbiAgICAgICAgICBpZiAoU3RyaW5nKG51bSkubGVuZ3RoIDw9IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJMZW5ndGggPSB0aGlzLmxlbmd0aCAtIFN0cmluZyhudW0pLmxlbmd0aFxuICAgICAgICAgICAgZm9ybWF0TnVtID0gU3RyaW5nKG51bSlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ViTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgZm9ybWF0TnVtID0gJzAnICsgZm9ybWF0TnVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIC0tLS0t6KGlMGVuZC0tLS0tXG4gICAgICAgICAgcmV0dXJuIHRoaXMudGhvdXNhbmRTcGxpdChmb3JtYXROdW0pLnNwbGl0KCcnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLnRob3VzYW5kU3BsaXQobnVtKS5zcGxpdCgnJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhudW0pLnNwbGl0KCcnKVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8g5Y2D5L2N5YiG5YmyXG4gICAgdGhvdXNhbmRTcGxpdChudW0pIHtcbiAgICAgIHZhciByZWcgPSAvXFxkezEsM30oPz0oXFxkezN9KSskKS9nXG4gICAgICByZXR1cm4gKG51bSArICcnKS5yZXBsYWNlKHJlZywgJyQmLCcpXG4gICAgfSxcbiAgICAvLyDmloflrZfmu5rliqhcbiAgICBzZXROdW1iZXJUcmFuc2Zvcm0oKSB7XG4gICAgICB0aGlzLmRpc3BsYXlOdW1BcnJheS5mb3JFYWNoKChkaXNwbGF5TnVtQXJyYXlJdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoIWlzTmFOKGRpc3BsYXlOdW1BcnJheUl0ZW0pKSB7XG4gICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuJHJlZnMuaXRlbVJlZltpbmRleF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cbiAgICAgICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoLTUwJSwgLSR7ZGlzcGxheU51bUFycmF5SXRlbSAqIDEwfSUpYFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gIH0sXG59XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbi8q5oC76YeP5rua5Yqo5pWw5a2X6K6+572uKi9cbi5zLXNjcm9sbC1udW1iZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgbGluZS1oZWlnaHQ6IDQxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMyZDdjZmY7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XG4gIC8q5paH5a2X56aB5q2i57yW6L6RKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyrngavni5AqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKndlYmtpdOa1j+iniOWZqCovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLypJRTEwKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKuaXqeacn+a1j+iniOWZqCovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufVxuLyog6buY6K6k6YCX5Y+36K6+572uICovXG4ubWFyay1pdGVtIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICYgPiBzcGFuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XG4gICAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcbiAgfVxufVxuLyrmu5rliqjmlbDlrZforr7nva4qL1xuLm51bWJlci1pdGVtIHtcbiAgd2lkdGg6IDQxcHg7XG4gIGhlaWdodDogNzVweDtcbiAgYmFja2dyb3VuZDogI2NjYztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjEsIDIyMSwgMjIxLCAxKTtcbiAgJiA+IHNwYW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAmID4gaSB7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDExcHg7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGVhc2UtaW4tb3V0O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgfVxuICB9XG59XG4ubnVtYmVyLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDM4ZjEyOCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDM4ZjEyOCZwcm9kJnNjb3BlZD10cnVlJmxhbmc9bGVzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MDM4ZjEyOFwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzAzOGYxMjgmcHJvZCZzY29wZWQ9dHJ1ZSZsYW5nPWxlc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzAzOGYxMjgmcHJvZCZzY29wZWQ9dHJ1ZSZsYW5nPWxlc3NcIiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKuaAu+mHj+a7muWKqOaVsOWtl+iuvue9riovXFxuLnMtc2Nyb2xsLW51bWJlcltkYXRhLXYtNzAzOGYxMjhdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDU0cHg7XFxuICBsaW5lLWhlaWdodDogNDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogIzJkN2NmZjtcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbiAgLyrmloflrZfnpoHmraLnvJbovpEqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8q54Gr54uQKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKndlYmtpdOa1j+iniOWZqCovXFxuICAvKklFMTAqL1xcbiAgLyrml6nmnJ/mtY/op4jlmagqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xcbn1cXG4vKiDpu5jorqTpgJflj7forr7nva4gKi9cXG4ubWFyay1pdGVtW2RhdGEtdi03MDM4ZjEyOF0ge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBsaW5lLWhlaWdodDogMTBweDtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1hcmstaXRlbSA+IHNwYW5bZGF0YS12LTcwMzhmMTI4XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbn1cXG4vKua7muWKqOaVsOWtl+iuvue9riovXFxuLm51bWJlci1pdGVtW2RhdGEtdi03MDM4ZjEyOF0ge1xcbiAgd2lkdGg6IDQxcHg7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICBiYWNrZ3JvdW5kOiAjY2NjO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxufVxcbi5udW1iZXItaXRlbSA+IHNwYW5bZGF0YS12LTcwMzhmMTI4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtcmw7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm51bWJlci1pdGVtID4gc3BhbiA+IGlbZGF0YS12LTcwMzhmMTI4XSB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDExcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGVhc2UtaW4tb3V0O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxufVxcbi5udW1iZXItaXRlbVtkYXRhLXYtNzAzOGYxMjhdOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==