(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{291:function(t,e,n){"use strict";n.r(e);var i={name:"Aaa",props:{},data:()=>({isMouseDown:!1,isSelect:!0,startPositon:{x:0,y:0},currentPositon:{x:0,y:0},offset:{x:0,y:0},moveDebounce:300,isMac:!1}),components:{},watch:{},computed:{},created(){},mounted(){this.isMac="Mac"===this.detectOS(),!0!==this.isMac&&(window.addEventListener("mouseup",this.windowOnMouseUp),this.$once("hook:beforeDestroy",()=>{window.removeEventListener("mouseup",this.windowOnMouseUp)}))},methods:{tableMousedown(t){const{x:e=0,y:n=0}=t;this.startPositon={x:e,y:n},this.isMouseDown=!0,this.isSelect=!0},tableMousemove(t){if(!0===this.isMac)return;const e=window.getSelection();if(e.toString().length>0)return void(this.isSelect=!0);if(clearTimeout(this.timer),this.timer=setTimeout(()=>{e.toString().length<=0&&(this.isSelect=!1)},this.moveDebounce),!0===this.isSelect)return;const{x:n=0,y:i=0}=t;if(this.currentPositon={x:n,y:i},!0===this.isMouseDown){this.offset={x:this.currentPositon.x-this.startPositon.x,y:this.currentPositon.y-this.startPositon.y};let t=this.$refs.tableContainerRef.scrollLeft,e=this.$refs.tableContainerRef.scrollTop;t+=-1*this.offset.x,e+=-1*this.offset.y,t<=0&&(t=0),e<=0&&(e=0),this.$refs.tableContainerRef.scrollLeft=t,this.$refs.tableContainerRef.scrollTop=e,this.$nextTick(()=>{this.startPositon=JSON.parse(JSON.stringify(this.currentPositon))})}},windowOnMouseUp(){this.isMouseDown=!1},detectOS(){var t=navigator.userAgent,e="Win32"==navigator.platform||"Windows"==navigator.platform,n="Mac68K"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform||"MacIntel"==navigator.platform;if(n)return"Mac";if("X11"==navigator.platform&&!e&&!n)return"Unix";if(String(navigator.platform).indexOf("Linux")>-1)return"Linux";if(e){if(t.indexOf("Windows NT 5.0")>-1||t.indexOf("Windows 2000")>-1)return"Win2000";if(t.indexOf("Windows NT 5.1")>-1||t.indexOf("Windows XP")>-1)return"WinXP";if(t.indexOf("Windows NT 5.2")>-1||t.indexOf("Windows 2003")>-1)return"Win2003";if(t.indexOf("Windows NT 6.0")>-1||t.indexOf("Windows Vista")>-1)return"WinVista";if(t.indexOf("Windows NT 6.1")>-1||t.indexOf("Windows 7")>-1)return"Win7"}return"other"}},beforeDestroy(){}},o=(n(602),n(9)),s=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("div",{ref:"tableContainerRef",class:["test-table",{isDrag:t.isMouseDown&&!1===t.isSelect,"forbid-select":t.isMouseDown&&!1===t.isSelect}]},[e("table",{on:{mousedown:t.tableMousedown,mousemove:t.tableMousemove}},[e("thead",[e("tr",t._l(30,(function(n,i){return e("th",{key:i,attrs:{id:""}},[t._v("\n          title"+t._s(i)+"\n        ")])})),0)]),t._v(" "),e("tbody",t._l(40,(function(n,i){return e("tr",{key:i},t._l(30,(function(n,o){return e("td",{key:o},[t._v("\n          "+t._s(i+"."+o+" 就发了司法局拉丝机发件方老师就")+"\n        ")])})),0)})),0)])])}),[],!1,null,"229d2cc2",null);e.default=s.exports},382:function(t,e,n){var i=n(2),o=n(603);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var s={insert:"head",singleton:!1};i(o,s);t.exports=o.locals||{}},602:function(t,e,n){"use strict";n(382)},603:function(t,e,n){(e=n(3)(!1)).push([t.i,".test-table[data-v-229d2cc2] {\n  width: 100%;\n  height: 400px;\n  overflow: scroll;\n}\n.test-table.isDrag[data-v-229d2cc2] {\n  cursor: grab;\n}\ntable[data-v-229d2cc2] {\n  table-layout: fixed;\n  width: 100%;\n  border: 1;\n  cellspacing: 0;\n  border-collapse: collapse;\n  border: thin;\n  border-color: black;\n}\nth[data-v-229d2cc2],\ntd[data-v-229d2cc2] {\n  width: 200px;\n  border: 1px solid #ccc;\n}\n.forbid-select[data-v-229d2cc2] {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Chrome/Safari/Opera */\n  /* Konqueror */\n  -moz-user-select: none;\n  /* Firefox */\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\nnot supported by any browser */\n}\n",""]),t.exports=e}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9ncmFiLXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9ncmFiLXRhYmxlLnZ1ZT8yZGI2Iiwid2VicGFjazovLy9zcmMvZGVtby9ncmFiLXRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9ncmFiLXRhYmxlLnZ1ZT8wOGExIiwid2VicGFjazovLy8uL3NyYy9kZW1vL2dyYWItdGFibGUudnVlPzVhMzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlbW8vZ3JhYi10YWJsZS52dWU/NmY5OSIsIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9ncmFiLXRhYmxlLnZ1ZT9jNGM3Il0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImRhdGEiLCJpc01vdXNlRG93biIsImlzU2VsZWN0Iiwic3RhcnRQb3NpdG9uIiwieCIsInkiLCJjdXJyZW50UG9zaXRvbiIsIm9mZnNldCIsIm1vdmVEZWJvdW5jZSIsImlzTWFjIiwiY29tcG9uZW50cyIsIndhdGNoIiwiY29tcHV0ZWQiLCJjcmVhdGVkIiwibW91bnRlZCIsImRldGVjdE9TIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvd09uTW91c2VVcCIsIiRvbmNlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1ldGhvZHMiLCJ0YWJsZU1vdXNlZG93biIsImUiLCJ0YWJsZU1vdXNlbW92ZSIsInR4dCIsImdldFNlbGVjdGlvbiIsInRvU3RyaW5nIiwibGVuZ3RoIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsTGVmdCIsIiRyZWZzIiwidGFibGVDb250YWluZXJSZWYiLCJzY3JvbGxUb3AiLCIkbmV4dFRpY2siLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJpc1dpbiIsInBsYXRmb3JtIiwiU3RyaW5nIiwiaW5kZXhPZiIsImJlZm9yZURlc3Ryb3kiLCJjb21wb25lbnQiLCJfdm0iLCJ0aGlzIiwiX2MiLCJfc2VsZiIsInJlZiIsImNsYXNzIiwiaXNEcmFnIiwib24iLCJfbCIsIml0ZW0iLCJpbmRleCIsImtleSIsImF0dHJzIiwiX3YiLCJfcyIsInRySXRlbSIsInRySW5kZXgiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydHMiLCJsb2NhbHMiLCJfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18iLCJwdXNoIl0sIm1hcHBpbmdzIjoia0dBQUEsSUNBd00sRUN1Q3pMLENBQ2ZBLEtBQUEsTUFDQUMsTUFBQSxHQUNBQyxVQUNBLENBQ0FDLGFBQUEsRUFDQUMsVUFBQSxFQUNBQyxhQUFBLENBQUFDLEVBQUEsRUFBQUMsRUFBQSxHQUNBQyxlQUFBLENBQUFGLEVBQUEsRUFBQUMsRUFBQSxHQUNBRSxPQUFBLENBQUFILEVBQUEsRUFBQUMsRUFBQSxHQUNBRyxhQUFBLElBQ0FDLE9BQUEsSUFHQUMsV0FBQSxHQUNBQyxNQUFBLEdBQ0FDLFNBQUEsR0FDQUMsWUFDQUMsVUFDQSxLQUFBTCxNQUFBLGFBQUFNLFlBQ0EsU0FBQU4sUUFHQU8sT0FBQUMsaUJBQUEsZUFBQUMsaUJBQ0EsS0FBQUMsTUFBQSwwQkFDQUgsT0FBQUksb0JBQUEsZUFBQUYscUJBR0FHLFFBQUEsQ0FDQUMsZUFBQUMsR0FDQSxRQUFBbkIsRUFBQSxJQUFBQyxFQUFBLEdBQUFrQixFQUNBLEtBQUFwQixhQUFBLENBQUFDLElBQUFDLEtBQ0EsS0FBQUosYUFBQSxFQUNBLEtBQUFDLFVBQUEsR0FFQXNCLGVBQUFELEdBQ0EsYUFBQWQsTUFDQSxPQUVBLE1BQUFnQixFQUFBVCxPQUFBVSxlQUNBLEdBQUFELEVBQUFFLFdBQUFDLE9BQUEsRUFFQSxZQURBLEtBQUExQixVQUFBLEdBU0EsR0FOQTJCLGFBQUEsS0FBQUMsT0FDQSxLQUFBQSxNQUFBQyxXQUFBLEtBQ0FOLEVBQUFFLFdBQUFDLFFBQUEsSUFDQSxLQUFBMUIsVUFBQSxJQUVBLEtBQUFN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QWFELEVBQVFFLFFBQVVGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0csRUFBT0MsRUFBSUosRUFBUyxNQUc5QyxJQUFJSyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FFUE4sRUFBSUMsRUFBU0ssR0FJMUJGLEVBQU9HLFFBQVVOLEVBQVFPLFFBQVUsSSxpQ0NsQm5DLFEscUJDRUFELEVBRGtDLEVBQVEsRUFDaENFLEVBQTRCLElBRTlCQyxLQUFLLENBQUNOLEVBQU9DLEVBQUksa3ZCQUFtdkIsS0FFNXdCRCxFQUFPRyxRQUFVQSIsImZpbGUiOiJqcy82NS4wYTU3NTU2ZDhlN2I0YjNhMGIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiBfYygnZGl2Jyx7cmVmOlwidGFibGVDb250YWluZXJSZWZcIixjbGFzczpbXG4gICAgJ3Rlc3QtdGFibGUnLFxuICAgIHtcbiAgICAgIGlzRHJhZzogX3ZtLmlzTW91c2VEb3duICYmIF92bS5pc1NlbGVjdCA9PT0gZmFsc2UsXG4gICAgICAnZm9yYmlkLXNlbGVjdCc6IF92bS5pc01vdXNlRG93biAmJiBfdm0uaXNTZWxlY3QgPT09IGZhbHNlLFxuICAgIH0sXG4gIF19LFtfYygndGFibGUnLHtvbjp7XCJtb3VzZWRvd25cIjpfdm0udGFibGVNb3VzZWRvd24sXCJtb3VzZW1vdmVcIjpfdm0udGFibGVNb3VzZW1vdmV9fSxbX2MoJ3RoZWFkJyxbX2MoJ3RyJyxfdm0uX2woKDMwKSxmdW5jdGlvbihpdGVtLGluZGV4KXtyZXR1cm4gX2MoJ3RoJyx7a2V5OmluZGV4LGF0dHJzOntcImlkXCI6XCJcIn19LFtfdm0uX3YoXCJcXG4gICAgICAgICAgdGl0bGVcIitfdm0uX3MoaW5kZXgpK1wiXFxuICAgICAgICBcIildKX0pLDApXSksX3ZtLl92KFwiIFwiKSxfYygndGJvZHknLF92bS5fbCgoNDApLGZ1bmN0aW9uKHRySXRlbSx0ckluZGV4KXtyZXR1cm4gX2MoJ3RyJyx7a2V5OnRySW5kZXh9LF92bS5fbCgoMzApLGZ1bmN0aW9uKGl0ZW0saW5kZXgpe3JldHVybiBfYygndGQnLHtrZXk6aW5kZXh9LFtfdm0uX3YoXCJcXG4gICAgICAgICAgXCIrX3ZtLl9zKHRySW5kZXggKyBcIi5cIiArIGluZGV4ICsgXCIg5bCx5Y+R5LqG5Y+45rOV5bGA5ouJ5Lid5py65Y+R5Lu25pa56ICB5biI5bCxXCIpK1wiXFxuICAgICAgICBcIildKX0pLDApfSksMCldKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ncmFiLXRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzP2NhY2hlRGlyZWN0b3J5IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ3JhYi10YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIjwhLS1cbiAqIEBBdXRob3I6IGF0ZG93XG4gKiBARGF0ZTogMjAyMS0wOS0xOSAxMjowNDo1MVxuICogQExhc3RFZGl0b3JzOiBudWxsXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIxLTA5LTIwIDAwOjU5OjM5XG4gKiBARGVzY3JpcHRpb246IGZpbGUgZGVzY3JpcHRpb25cbi0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiW1xuICAgICAgJ3Rlc3QtdGFibGUnLFxuICAgICAge1xuICAgICAgICBpc0RyYWc6IGlzTW91c2VEb3duICYmIGlzU2VsZWN0ID09PSBmYWxzZSxcbiAgICAgICAgJ2ZvcmJpZC1zZWxlY3QnOiBpc01vdXNlRG93biAmJiBpc1NlbGVjdCA9PT0gZmFsc2UsXG4gICAgICB9LFxuICAgIF1cIlxuICAgIHJlZj1cInRhYmxlQ29udGFpbmVyUmVmXCJcbiAgPlxuICAgIDx0YWJsZSBAbW91c2Vkb3duPVwidGFibGVNb3VzZWRvd25cIiBAbW91c2Vtb3ZlPVwidGFibGVNb3VzZW1vdmVcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBpZD1cIlwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiAzMFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgdGl0bGV7eyBpbmRleCB9fVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgICA8dHIgdi1mb3I9XCIodHJJdGVtLCB0ckluZGV4KSBpbiA0MFwiIDprZXk9XCJ0ckluZGV4XCI+XG4gICAgICAgICAgPHRkIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiAzMFwiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAge3sgdHJJbmRleCArIFwiLlwiICsgaW5kZXggKyBcIiDlsLHlj5Hkuoblj7jms5XlsYDmi4nkuJ3mnLrlj5Hku7bmlrnogIHluIjlsLFcIiB9fVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gICAgwqBcbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuwqBcbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdBYWEnLFxuICBwcm9wczoge30sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTW91c2VEb3duOiBmYWxzZSxcbiAgICAgIGlzU2VsZWN0OiB0cnVlLFxuICAgICAgc3RhcnRQb3NpdG9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIGN1cnJlbnRQb3NpdG9uOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXG4gICAgICBtb3ZlRGVib3VuY2U6IDMwMCxcbiAgICAgIGlzTWFjOiBmYWxzZSxcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHt9LFxuICB3YXRjaDoge30sXG4gIGNvbXB1dGVkOiB7fSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuaXNNYWMgPSB0aGlzLmRldGVjdE9TKCkgPT09ICdNYWMnXG4gICAgaWYgKHRoaXMuaXNNYWMgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMud2luZG93T25Nb3VzZVVwKVxuICAgIHRoaXMuJG9uY2UoJ2hvb2s6YmVmb3JlRGVzdHJveScsICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy53aW5kb3dPbk1vdXNlVXApXG4gICAgfSlcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRhYmxlTW91c2Vkb3duKGUpIHtcbiAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwIH0gPSBlXG4gICAgICB0aGlzLnN0YXJ0UG9zaXRvbiA9IHsgeCwgeSB9XG4gICAgICB0aGlzLmlzTW91c2VEb3duID0gdHJ1ZVxuICAgICAgdGhpcy5pc1NlbGVjdCA9IHRydWUgLy8g6L+Z6YeM6ZyA6KaB6K6+5a6aaXNTZWxlY3TkuLp0cnVlXG4gICAgfSxcbiAgICB0YWJsZU1vdXNlbW92ZShlKSB7XG4gICAgICBpZiAodGhpcy5pc01hYyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHR4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgICAgaWYgKHR4dC50b1N0cmluZygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5pc1NlbGVjdCA9IHRydWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHR4dC50b1N0cmluZygpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5pc1NlbGVjdCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMubW92ZURlYm91bmNlKVxuICAgICAgaWYgKHRoaXMuaXNTZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvLyDmi5bliqjmoLjlv4NcbiAgICAgIGNvbnN0IHsgeCA9IDAsIHkgPSAwIH0gPSBlXG4gICAgICB0aGlzLmN1cnJlbnRQb3NpdG9uID0geyB4LCB5IH1cbiAgICAgIGlmICh0aGlzLmlzTW91c2VEb3duID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge1xuICAgICAgICAgIHg6IHRoaXMuY3VycmVudFBvc2l0b24ueCAtIHRoaXMuc3RhcnRQb3NpdG9uLngsXG4gICAgICAgICAgeTogdGhpcy5jdXJyZW50UG9zaXRvbi55IC0gdGhpcy5zdGFydFBvc2l0b24ueSxcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2Nyb2xsTGVmdCA9IHRoaXMuJHJlZnMudGFibGVDb250YWluZXJSZWYuc2Nyb2xsTGVmdFxuICAgICAgICBsZXQgc2Nyb2xsVG9wID0gdGhpcy4kcmVmcy50YWJsZUNvbnRhaW5lclJlZi5zY3JvbGxUb3BcblxuICAgICAgICBzY3JvbGxMZWZ0ICs9IHRoaXMub2Zmc2V0LnggKiAtMVxuICAgICAgICBzY3JvbGxUb3AgKz0gdGhpcy5vZmZzZXQueSAqIC0xXG4gICAgICAgIHNjcm9sbExlZnQgPD0gMCAmJiAoc2Nyb2xsTGVmdCA9IDApXG4gICAgICAgIHNjcm9sbFRvcCA8PSAwICYmIChzY3JvbGxUb3AgPSAwKVxuICAgICAgICB0aGlzLiRyZWZzLnRhYmxlQ29udGFpbmVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0XG4gICAgICAgIHRoaXMuJHJlZnMudGFibGVDb250YWluZXJSZWYuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0YXJ0UG9zaXRvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jdXJyZW50UG9zaXRvbikpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICB3aW5kb3dPbk1vdXNlVXAoKSB7XG4gICAgICB0aGlzLmlzTW91c2VEb3duID0gZmFsc2VcbiAgICB9LFxuICAgIGRldGVjdE9TKCkge1xuICAgICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgIHZhciBpc1dpbiA9XG4gICAgICAgIG5hdmlnYXRvci5wbGF0Zm9ybSA9PSAnV2luMzInIHx8IG5hdmlnYXRvci5wbGF0Zm9ybSA9PSAnV2luZG93cydcbiAgICAgIHZhciBpc01hYyA9XG4gICAgICAgIG5hdmlnYXRvci5wbGF0Zm9ybSA9PSAnTWFjNjhLJyB8fFxuICAgICAgICBuYXZpZ2F0b3IucGxhdGZvcm0gPT0gJ01hY1BQQycgfHxcbiAgICAgICAgbmF2aWdhdG9yLnBsYXRmb3JtID09ICdNYWNpbnRvc2gnIHx8XG4gICAgICAgIG5hdmlnYXRvci5wbGF0Zm9ybSA9PSAnTWFjSW50ZWwnXG4gICAgICBpZiAoaXNNYWMpIHJldHVybiAnTWFjJ1xuICAgICAgdmFyIGlzVW5peCA9IG5hdmlnYXRvci5wbGF0Zm9ybSA9PSAnWDExJyAmJiAhaXNXaW4gJiYgIWlzTWFjXG4gICAgICBpZiAoaXNVbml4KSByZXR1cm4gJ1VuaXgnXG4gICAgICB2YXIgaXNMaW51eCA9IFN0cmluZyhuYXZpZ2F0b3IucGxhdGZvcm0pLmluZGV4T2YoJ0xpbnV4JykgPiAtMVxuICAgICAgaWYgKGlzTGludXgpIHJldHVybiAnTGludXgnXG4gICAgICBpZiAoaXNXaW4pIHtcbiAgICAgICAgdmFyIGlzV2luMksgPVxuICAgICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdXaW5kb3dzIE5UIDUuMCcpID4gLTEgfHxcbiAgICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignV2luZG93cyAyMDAwJykgPiAtMVxuICAgICAgICBpZiAoaXNXaW4ySykgcmV0dXJuICdXaW4yMDAwJ1xuICAgICAgICB2YXIgaXNXaW5YUCA9XG4gICAgICAgICAgdXNlckFnZW50LmluZGV4T2YoJ1dpbmRvd3MgTlQgNS4xJykgPiAtMSB8fFxuICAgICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdXaW5kb3dzIFhQJykgPiAtMVxuICAgICAgICBpZiAoaXNXaW5YUCkgcmV0dXJuICdXaW5YUCdcbiAgICAgICAgdmFyIGlzV2luMjAwMyA9XG4gICAgICAgICAgdXNlckFnZW50LmluZGV4T2YoJ1dpbmRvd3MgTlQgNS4yJykgPiAtMSB8fFxuICAgICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdXaW5kb3dzIDIwMDMnKSA+IC0xXG4gICAgICAgIGlmIChpc1dpbjIwMDMpIHJldHVybiAnV2luMjAwMydcbiAgICAgICAgdmFyIGlzV2luVmlzdGEgPVxuICAgICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdXaW5kb3dzIE5UIDYuMCcpID4gLTEgfHxcbiAgICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignV2luZG93cyBWaXN0YScpID4gLTFcbiAgICAgICAgaWYgKGlzV2luVmlzdGEpIHJldHVybiAnV2luVmlzdGEnXG4gICAgICAgIHZhciBpc1dpbjcgPVxuICAgICAgICAgIHVzZXJBZ2VudC5pbmRleE9mKCdXaW5kb3dzIE5UIDYuMScpID4gLTEgfHxcbiAgICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignV2luZG93cyA3JykgPiAtMVxuICAgICAgICBpZiAoaXNXaW43KSByZXR1cm4gJ1dpbjcnXG4gICAgICB9XG4gICAgICByZXR1cm4gJ290aGVyJ1xuICAgIH0sXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3koKSB7fSxcbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxuLnRlc3QtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgJi5pc0RyYWcge1xuICAgIGN1cnNvcjogZ3JhYjtcbiAgfVxufVxudGFibGUge1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxO1xuICBjZWxsc3BhY2luZzogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiB0aGluO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxudGgsXG50ZCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5mb3JiaWQtc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIENocm9tZS9TYWZhcmkvT3BlcmEgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbm5vdCBzdXBwb3J0ZWQgYnkgYW55IGJyb3dzZXIgKi9cbn1cbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9ncmFiLXRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjlkMmNjMiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2dyYWItdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2dyYWItdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZ3JhYi10YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjlkMmNjMiZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyMjlkMmNjMlwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZ3JhYi10YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjlkMmNjMiZwcm9kJmxhbmc9bGVzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ncmFiLXRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyOWQyY2MyJnByb2QmbGFuZz1sZXNzJnNjb3BlZD10cnVlXCIiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRlc3QtdGFibGVbZGF0YS12LTIyOWQyY2MyXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG4udGVzdC10YWJsZS5pc0RyYWdbZGF0YS12LTIyOWQyY2MyXSB7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcbnRhYmxlW2RhdGEtdi0yMjlkMmNjMl0ge1xcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxO1xcbiAgY2VsbHNwYWNpbmc6IDA7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyOiB0aGluO1xcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG59XFxudGhbZGF0YS12LTIyOWQyY2MyXSxcXG50ZFtkYXRhLXYtMjI5ZDJjYzJdIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxufVxcbi5mb3JiaWQtc2VsZWN0W2RhdGEtdi0yMjlkMmNjMl0ge1xcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xcbiAgLyogaU9TIFNhZmFyaSAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIENocm9tZS9TYWZhcmkvT3BlcmEgKi9cXG4gIC8qIEtvbnF1ZXJvciAqL1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC8qIEZpcmVmb3ggKi9cXG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxcbm5vdCBzdXBwb3J0ZWQgYnkgYW55IGJyb3dzZXIgKi9cXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=