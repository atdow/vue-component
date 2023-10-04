(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{124:function(e,n,t){"use strict";t.r(n);var o={name:"ComponentDoc",components:{}},c=t(9),r=Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"vue-demo-container"},[n("h2",[e._v("1. 动态routes引入组件中的路径问题")]),e._v(" "),n("p",[e._v("错误的使用方式：")]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v('// 动态生成routes\nlet route = []\nlet dynamicPath = \'/pages/list\'\nroute.push({\n    path: "path",\n    name: "name",\n    meta: {\n        title: \'title\'\n    },\n    component: componentRequire(dynamicPath, \'vue\'), // 这里是导致错误的原因\n    children: [],\n});\n// 动态引入组件\nfunction componentRequire(path, type) {\n    return (r) =>\n        require.ensure(\n            [],\n            () => r(require(`..${path}.${type}`)), // ../pages/list.vue\n            "zh-CN"\n        );\n}\nconst routes = [{\n    path: "/",\n    name: "Home",\n    component: () => import( /* webpackChunkName: "home" */ "../views/home/index.vue"),\n    children: route,\n}];\n')])]),e._v(" "),n("p",[e._v("在 "),n("code",[e._v("componentRequire")]),e._v(" 函数最终引入的文件路径将会是 "),n("code",[e._v("../pages/list.vue")]),e._v(" ，看似很完美，但是在 "),n("code",[e._v("require")]),e._v(" 使用变量路径的时候不能使用 "),n("code",[e._v(".. + /xxx/xxx")]),e._v(" 的方式，只能是，也就是变量不能是以 "),n("code",[e._v("/")]),e._v(" 开头的，变量后面可以带有 "),n("code",[e._v("/")]),e._v(" 。正确的使用方式是 "),n("code",[e._v("../ + xxx/xxx")]),e._v(" 。但是我们动态配置的 "),n("code",[e._v("path")]),e._v(" 一般是以 "),n("code",[e._v("/")]),e._v(" 开头的，这样可以与url统一。")]),e._v(" "),n("p",[e._v("正确的使用方式如下：")]),e._v(" "),n("pre",[n("code",{staticClass:"language-js"},[e._v('// 动态生成routes\nlet route = []\nlet dynamicPath = \'/pages/list\'\nroute.push({\n    path: "path",\n    name: "name",\n    meta: {\n        title: \'title\'\n    },\n    component: componentRequire(dynamicPath.slice(1), \'vue\'), // 将最前面的/给截取掉，然后修改componentRequire的引入方式\n    children: [],\n});\n// 动态引入组件\nfunction componentRequire(path, type) {\n    return (r) =>\n        require.ensure(\n            [],\n            () => r(require(`../${path}.${type}`)), // ../pages/list.vue 在这里补上路径\n            "zh-CN"\n        );\n}\nconst routes = [{\n    path: "/",\n    name: "Home",\n    component: () => import( /* webpackChunkName: "home" */ "../views/home/index.vue"),\n    children: route,\n}];\n')])]),e._v(" "),n("p",[e._v("虽然看起来区别不大，只是在传入 "),n("code",[e._v("componentRequire")]),e._v(" 之前的 "),n("code",[e._v("dynamicPath")]),e._v(" 先截取掉最前面的 "),n("code",[e._v("/")]),e._v(" ，然后在 "),n("code",[e._v("require")]),e._v(" 的时候再补上 "),n("code",[e._v("/")]),e._v(" ，但是这样可以解决 "),n("code",[e._v("webpack")]),e._v(" 的动态引入问题。")])])}],!1,null,null,null);n.default=r.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZG9jL3Z1ZS92dWUtcm91dGVyLm1kIiwid2VicGFjazovLy8uL3NyYy9kb2MvdnVlL3Z1ZS1yb3V0ZXIubWQ/NTBmMCIsIndlYnBhY2s6Ly8vc3JjL2RvYy92dWUvdnVlLXJvdXRlci5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jL3Z1ZS92dWUtcm91dGVyLm1kPzY2YjUiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJjb21wb25lbnQiLCJ0aGlzIiwiX3NlbGYiLCJfYyIsIl9tIiwiX3ZtIiwic3RhdGljQ2xhc3MiLCJfdiJdLCJtYXBwaW5ncyI6ImtHQUFBLElDQThPLEVDc0U5TyxDQUNBQSxLQUFBLGVBQ0FDLFdBQUEsSSxPQ2pFSUMsRUFBWSxZQUNkLEdIUlcsV0FBMEJDLEtBQVlDLE1BQU1DLEdBQUcsT0FBckJGLEtBQWdDRyxHQUFHLEtBRXBELENBQUMsV0FBWSxJQUFJQyxFQUFJSixLQUFLRSxFQUFHRSxFQUFJSCxNQUFNQyxHQUFHLE9BQU9BLEVBQUcsTUFBTSxDQUFDRyxZQUFZLHNCQUFzQixDQUFDSCxFQUFHLEtBQUssQ0FBQ0UsRUFBSUUsR0FBRywyQkFBMkJGLEVBQUlFLEdBQUcsS0FBS0osRUFBRyxJQUFJLENBQUNFLEVBQUlFLEdBQUcsY0FBY0YsRUFBSUUsR0FBRyxLQUFLSixFQUFHLE1BQU0sQ0FBQ0EsRUFBRyxPQUFPLENBQUNHLFlBQVksZUFBZSxDQUFDRCxFQUFJRSxHQUFHLG1wQkFBMnBCRixFQUFJRSxHQUFHLEtBQUtKLEVBQUcsSUFBSSxDQUFDRSxFQUFJRSxHQUFHLE1BQU1KLEVBQUcsT0FBTyxDQUFDRSxFQUFJRSxHQUFHLHNCQUFzQkYsRUFBSUUsR0FBRyxvQkFBb0JKLEVBQUcsT0FBTyxDQUFDRSxFQUFJRSxHQUFHLHVCQUF1QkYsRUFBSUUsR0FBRyxnQkFBZ0JKLEVBQUcsT0FBTyxDQUFDRSxFQUFJRSxHQUFHLGFBQWFGLEVBQUlFLEdBQUcsbUJBQW1CSixFQUFHLE9BQU8sQ0FBQ0UsRUFBSUUsR0FBRyxtQkFBbUJGLEVBQUlFLEdBQUcsdUJBQXVCSixFQUFHLE9BQU8sQ0FBQ0UsRUFBSUUsR0FBRyxPQUFPRixFQUFJRSxHQUFHLGtCQUFrQkosRUFBRyxPQUFPLENBQUNFLEVBQUlFLEdBQUcsT0FBT0YsRUFBSUUsR0FBRyxlQUFlSixFQUFHLE9BQU8sQ0FBQ0UsRUFBSUUsR0FBRyxtQkFBbUJGLEVBQUlFLEdBQUcsZ0JBQWdCSixFQUFHLE9BQU8sQ0FBQ0UsRUFBSUUsR0FBRyxVQUFVRixFQUFJRSxHQUFHLFVBQVVKLEVBQUcsT0FBTyxDQUFDRSxFQUFJRSxHQUFHLE9BQU9GLEVBQUlFLEdBQUcsc0JBQXNCRixFQUFJRSxHQUFHLEtBQUtKLEVBQUcsSUFBSSxDQUFDRSxFQUFJRSxHQUFHLGdCQUFnQkYsRUFBSUUsR0FBRyxLQUFLSixFQUFHLE1BQU0sQ0FBQ0EsRUFBRyxPQUFPLENBQUNHLFlBQVksZUFBZSxDQUFDRCxFQUFJRSxHQUFHLCtyQkFBdXNCRixFQUFJRSxHQUFHLEtBQUtKLEVBQUcsSUFBSSxDQUFDRSxFQUFJRSxHQUFHLG9CQUFvQkosRUFBRyxPQUFPLENBQUNFLEVBQUlFLEdBQUcsc0JBQXNCRixFQUFJRSxHQUFHLFNBQVNKLEVBQUcsT0FBTyxDQUFDRSxFQUFJRSxHQUFHLGlCQUFpQkYsRUFBSUUsR0FBRyxjQUFjSixFQUFHLE9BQU8sQ0FBQ0UsRUFBSUUsR0FBRyxPQUFPRixFQUFJRSxHQUFHLFVBQVVKLEVBQUcsT0FBTyxDQUFDRSxFQUFJRSxHQUFHLGFBQWFGLEVBQUlFLEdBQUcsWUFBWUosRUFBRyxPQUFPLENBQUNFLEVBQUlFLEdBQUcsT0FBT0YsRUFBSUUsR0FBRyxlQUFlSixFQUFHLE9BQU8sQ0FBQ0UsRUFBSUUsR0FBRyxhQUFhRixFQUFJRSxHQUFHLG9CR1Mza0YsRUFDQSxLQUNBLEtBQ0EsTUFJYSxVQUFBUCxFIiwiZmlsZSI6ImpzLzMxLmE2YTM2NzczZmNlMjUxODI1NDdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdm09dGhpcyxfYz1fdm0uX3NlbGYuX2M7cmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ2dWUtZGVtby1jb250YWluZXJcIn0sW19jKCdoMicsW192bS5fdihcIjEuIOWKqOaAgXJvdXRlc+W8leWFpee7hOS7tuS4reeahOi3r+W+hOmXrumimFwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLFtfdm0uX3YoXCLplJnor6/nmoTkvb/nlKjmlrnlvI/vvJpcIildKSxfdm0uX3YoXCIgXCIpLF9jKCdwcmUnLFtfYygnY29kZScse3N0YXRpY0NsYXNzOlwibGFuZ3VhZ2UtanNcIn0sW192bS5fdihcIi8vIOWKqOaAgeeUn+aIkHJvdXRlc1xcbmxldCByb3V0ZSA9IFtdXFxubGV0IGR5bmFtaWNQYXRoID0gJy9wYWdlcy9saXN0J1xcbnJvdXRlLnB1c2goe1xcbiAgICBwYXRoOiBcXFwicGF0aFxcXCIsXFxuICAgIG5hbWU6IFxcXCJuYW1lXFxcIixcXG4gICAgbWV0YToge1xcbiAgICAgICAgdGl0bGU6ICd0aXRsZSdcXG4gICAgfSxcXG4gICAgY29tcG9uZW50OiBjb21wb25lbnRSZXF1aXJlKGR5bmFtaWNQYXRoLCAndnVlJyksIC8vIOi/memHjOaYr+WvvOiHtOmUmeivr+eahOWOn+WboFxcbiAgICBjaGlsZHJlbjogW10sXFxufSk7XFxuLy8g5Yqo5oCB5byV5YWl57uE5Lu2XFxuZnVuY3Rpb24gY29tcG9uZW50UmVxdWlyZShwYXRoLCB0eXBlKSB7XFxuICAgIHJldHVybiAocikgPT5cXG4gICAgICAgIHJlcXVpcmUuZW5zdXJlKFxcbiAgICAgICAgICAgIFtdLFxcbiAgICAgICAgICAgICgpID0+IHIocmVxdWlyZShgLi4ke3BhdGh9LiR7dHlwZX1gKSksIC8vIC4uL3BhZ2VzL2xpc3QudnVlXFxuICAgICAgICAgICAgXFxcInpoLUNOXFxcIlxcbiAgICAgICAgKTtcXG59XFxuY29uc3Qgcm91dGVzID0gW3tcXG4gICAgcGF0aDogXFxcIi9cXFwiLFxcbiAgICBuYW1lOiBcXFwiSG9tZVxcXCIsXFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcXFwiaG9tZVxcXCIgKi8gXFxcIi4uL3ZpZXdzL2hvbWUvaW5kZXgudnVlXFxcIiksXFxuICAgIGNoaWxkcmVuOiByb3V0ZSxcXG59XTtcXG5cIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLFtfdm0uX3YoXCLlnKggXCIpLF9jKCdjb2RlJyxbX3ZtLl92KFwiY29tcG9uZW50UmVxdWlyZVwiKV0pLF92bS5fdihcIiDlh73mlbDmnIDnu4jlvJXlhaXnmoTmlofku7bot6/lvoTlsIbkvJrmmK8gXCIpLF9jKCdjb2RlJyxbX3ZtLl92KFwiLi4vcGFnZXMvbGlzdC52dWVcIildKSxfdm0uX3YoXCIg77yM55yL5Ly85b6I5a6M576O77yM5L2G5piv5ZyoIFwiKSxfYygnY29kZScsW192bS5fdihcInJlcXVpcmVcIildKSxfdm0uX3YoXCIg5L2/55So5Y+Y6YeP6Lev5b6E55qE5pe25YCZ5LiN6IO95L2/55SoIFwiKSxfYygnY29kZScsW192bS5fdihcIi4uICsgL3h4eC94eHhcIildKSxfdm0uX3YoXCIg55qE5pa55byP77yM5Y+q6IO95piv77yM5Lmf5bCx5piv5Y+Y6YeP5LiN6IO95piv5LulIFwiKSxfYygnY29kZScsW192bS5fdihcIi9cIildKSxfdm0uX3YoXCIg5byA5aS055qE77yM5Y+Y6YeP5ZCO6Z2i5Y+v5Lul5bim5pyJIFwiKSxfYygnY29kZScsW192bS5fdihcIi9cIildKSxfdm0uX3YoXCIg44CC5q2j56Gu55qE5L2/55So5pa55byP5pivIFwiKSxfYygnY29kZScsW192bS5fdihcIi4uLyArIHh4eC94eHhcIildKSxfdm0uX3YoXCIg44CC5L2G5piv5oiR5Lus5Yqo5oCB6YWN572u55qEIFwiKSxfYygnY29kZScsW192bS5fdihcInBhdGhcIildKSxfdm0uX3YoXCIg5LiA6Iis5piv5LulIFwiKSxfYygnY29kZScsW192bS5fdihcIi9cIildKSxfdm0uX3YoXCIg5byA5aS055qE77yM6L+Z5qC35Y+v5Lul5LiOdXJs57uf5LiA44CCXCIpXSksX3ZtLl92KFwiIFwiKSxfYygncCcsW192bS5fdihcIuato+ehrueahOS9v+eUqOaWueW8j+WmguS4i++8mlwiKV0pLF92bS5fdihcIiBcIiksX2MoJ3ByZScsW19jKCdjb2RlJyx7c3RhdGljQ2xhc3M6XCJsYW5ndWFnZS1qc1wifSxbX3ZtLl92KFwiLy8g5Yqo5oCB55Sf5oiQcm91dGVzXFxubGV0IHJvdXRlID0gW11cXG5sZXQgZHluYW1pY1BhdGggPSAnL3BhZ2VzL2xpc3QnXFxucm91dGUucHVzaCh7XFxuICAgIHBhdGg6IFxcXCJwYXRoXFxcIixcXG4gICAgbmFtZTogXFxcIm5hbWVcXFwiLFxcbiAgICBtZXRhOiB7XFxuICAgICAgICB0aXRsZTogJ3RpdGxlJ1xcbiAgICB9LFxcbiAgICBjb21wb25lbnQ6IGNvbXBvbmVudFJlcXVpcmUoZHluYW1pY1BhdGguc2xpY2UoMSksICd2dWUnKSwgLy8g5bCG5pyA5YmN6Z2i55qEL+e7meaIquWPluaOie+8jOeEtuWQjuS/ruaUuWNvbXBvbmVudFJlcXVpcmXnmoTlvJXlhaXmlrnlvI9cXG4gICAgY2hpbGRyZW46IFtdLFxcbn0pO1xcbi8vIOWKqOaAgeW8leWFpee7hOS7tlxcbmZ1bmN0aW9uIGNvbXBvbmVudFJlcXVpcmUocGF0aCwgdHlwZSkge1xcbiAgICByZXR1cm4gKHIpID0+XFxuICAgICAgICByZXF1aXJlLmVuc3VyZShcXG4gICAgICAgICAgICBbXSxcXG4gICAgICAgICAgICAoKSA9PiByKHJlcXVpcmUoYC4uLyR7cGF0aH0uJHt0eXBlfWApKSwgLy8gLi4vcGFnZXMvbGlzdC52dWUg5Zyo6L+Z6YeM6KGl5LiK6Lev5b6EXFxuICAgICAgICAgICAgXFxcInpoLUNOXFxcIlxcbiAgICAgICAgKTtcXG59XFxuY29uc3Qgcm91dGVzID0gW3tcXG4gICAgcGF0aDogXFxcIi9cXFwiLFxcbiAgICBuYW1lOiBcXFwiSG9tZVxcXCIsXFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcXFwiaG9tZVxcXCIgKi8gXFxcIi4uL3ZpZXdzL2hvbWUvaW5kZXgudnVlXFxcIiksXFxuICAgIGNoaWxkcmVuOiByb3V0ZSxcXG59XTtcXG5cIildKV0pLF92bS5fdihcIiBcIiksX2MoJ3AnLFtfdm0uX3YoXCLomb3nhLbnnIvotbfmnaXljLrliKvkuI3lpKfvvIzlj6rmmK/lnKjkvKDlhaUgXCIpLF9jKCdjb2RlJyxbX3ZtLl92KFwiY29tcG9uZW50UmVxdWlyZVwiKV0pLF92bS5fdihcIiDkuYvliY3nmoQgXCIpLF9jKCdjb2RlJyxbX3ZtLl92KFwiZHluYW1pY1BhdGhcIildKSxfdm0uX3YoXCIg5YWI5oiq5Y+W5o6J5pyA5YmN6Z2i55qEIFwiKSxfYygnY29kZScsW192bS5fdihcIi9cIildKSxfdm0uX3YoXCIg77yM54S25ZCO5ZyoIFwiKSxfYygnY29kZScsW192bS5fdihcInJlcXVpcmVcIildKSxfdm0uX3YoXCIg55qE5pe25YCZ5YaN6KGl5LiKIFwiKSxfYygnY29kZScsW192bS5fdihcIi9cIildKSxfdm0uX3YoXCIg77yM5L2G5piv6L+Z5qC35Y+v5Lul6Kej5YazIFwiKSxfYygnY29kZScsW192bS5fdihcIndlYnBhY2tcIildKSxfdm0uX3YoXCIg55qE5Yqo5oCB5byV5YWl6Zeu6aKY44CCXCIpXSldKVxufV1cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL3Z1ZS1yb3V0ZXIubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL21hcmtkb3duLXZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMSEuL3Z1ZS1yb3V0ZXIubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidnVlLWRlbW8tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPjEuIOWKqOaAgXJvdXRlc+W8leWFpee7hOS7tuS4reeahOi3r+W+hOmXrumimDwvaDI+XG48cD7plJnor6/nmoTkvb/nlKjmlrnlvI/vvJo8L3A+XG48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtanNcIj4vLyDliqjmgIHnlJ/miJByb3V0ZXNcbmxldCByb3V0ZSA9IFtdXG5sZXQgZHluYW1pY1BhdGggPSAnL3BhZ2VzL2xpc3QnXG5yb3V0ZS5wdXNoKHtcbiAgICBwYXRoOiAmcXVvdDtwYXRoJnF1b3Q7LFxuICAgIG5hbWU6ICZxdW90O25hbWUmcXVvdDssXG4gICAgbWV0YToge1xuICAgICAgICB0aXRsZTogJ3RpdGxlJ1xuICAgIH0sXG4gICAgY29tcG9uZW50OiBjb21wb25lbnRSZXF1aXJlKGR5bmFtaWNQYXRoLCAndnVlJyksIC8vIOi/memHjOaYr+WvvOiHtOmUmeivr+eahOWOn+WboFxuICAgIGNoaWxkcmVuOiBbXSxcbn0pO1xuLy8g5Yqo5oCB5byV5YWl57uE5Lu2XG5mdW5jdGlvbiBjb21wb25lbnRSZXF1aXJlKHBhdGgsIHR5cGUpIHtcbiAgICByZXR1cm4gKHIpID0mZ3Q7XG4gICAgICAgIHJlcXVpcmUuZW5zdXJlKFxuICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAoKSA9Jmd0OyByKHJlcXVpcmUoYC4uJHtwYXRofS4ke3R5cGV9YCkpLCAvLyAuLi9wYWdlcy9saXN0LnZ1ZVxuICAgICAgICAgICAgJnF1b3Q7emgtQ04mcXVvdDtcbiAgICAgICAgKTtcbn1cbmNvbnN0IHJvdXRlcyA9IFt7XG4gICAgcGF0aDogJnF1b3Q7LyZxdW90OyxcbiAgICBuYW1lOiAmcXVvdDtIb21lJnF1b3Q7LFxuICAgIGNvbXBvbmVudDogKCkgPSZndDsgaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAmcXVvdDtob21lJnF1b3Q7ICovICZxdW90Oy4uL3ZpZXdzL2hvbWUvaW5kZXgudnVlJnF1b3Q7KSxcbiAgICBjaGlsZHJlbjogcm91dGUsXG59XTtcbjwvY29kZT48L3ByZT5cbjxwPuWcqCA8Y29kZT5jb21wb25lbnRSZXF1aXJlPC9jb2RlPiDlh73mlbDmnIDnu4jlvJXlhaXnmoTmlofku7bot6/lvoTlsIbkvJrmmK8gPGNvZGU+Li4vcGFnZXMvbGlzdC52dWU8L2NvZGU+IO+8jOeci+S8vOW+iOWujOe+ju+8jOS9huaYr+WcqCA8Y29kZT5yZXF1aXJlPC9jb2RlPiDkvb/nlKjlj5jph4/ot6/lvoTnmoTml7blgJnkuI3og73kvb/nlKggPGNvZGU+Li4gKyAveHh4L3h4eDwvY29kZT4g55qE5pa55byP77yM5Y+q6IO95piv77yM5Lmf5bCx5piv5Y+Y6YeP5LiN6IO95piv5LulIDxjb2RlPi88L2NvZGU+IOW8gOWktOeahO+8jOWPmOmHj+WQjumdouWPr+S7peW4puaciSA8Y29kZT4vPC9jb2RlPiDjgILmraPnoa7nmoTkvb/nlKjmlrnlvI/mmK8gPGNvZGU+Li4vICsgeHh4L3h4eDwvY29kZT4g44CC5L2G5piv5oiR5Lus5Yqo5oCB6YWN572u55qEIDxjb2RlPnBhdGg8L2NvZGU+IOS4gOiIrOaYr+S7pSA8Y29kZT4vPC9jb2RlPiDlvIDlpLTnmoTvvIzov5nmoLflj6/ku6XkuI51cmznu5/kuIDjgII8L3A+XG48cD7mraPnoa7nmoTkvb/nlKjmlrnlvI/lpoLkuIvvvJo8L3A+XG48cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtanNcIj4vLyDliqjmgIHnlJ/miJByb3V0ZXNcbmxldCByb3V0ZSA9IFtdXG5sZXQgZHluYW1pY1BhdGggPSAnL3BhZ2VzL2xpc3QnXG5yb3V0ZS5wdXNoKHtcbiAgICBwYXRoOiAmcXVvdDtwYXRoJnF1b3Q7LFxuICAgIG5hbWU6ICZxdW90O25hbWUmcXVvdDssXG4gICAgbWV0YToge1xuICAgICAgICB0aXRsZTogJ3RpdGxlJ1xuICAgIH0sXG4gICAgY29tcG9uZW50OiBjb21wb25lbnRSZXF1aXJlKGR5bmFtaWNQYXRoLnNsaWNlKDEpLCAndnVlJyksIC8vIOWwhuacgOWJjemdoueahC/nu5nmiKrlj5bmjonvvIznhLblkI7kv67mlLljb21wb25lbnRSZXF1aXJl55qE5byV5YWl5pa55byPXG4gICAgY2hpbGRyZW46IFtdLFxufSk7XG4vLyDliqjmgIHlvJXlhaXnu4Tku7ZcbmZ1bmN0aW9uIGNvbXBvbmVudFJlcXVpcmUocGF0aCwgdHlwZSkge1xuICAgIHJldHVybiAocikgPSZndDtcbiAgICAgICAgcmVxdWlyZS5lbnN1cmUoXG4gICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICgpID0mZ3Q7IHIocmVxdWlyZShgLi4vJHtwYXRofS4ke3R5cGV9YCkpLCAvLyAuLi9wYWdlcy9saXN0LnZ1ZSDlnKjov5nph4zooaXkuIrot6/lvoRcbiAgICAgICAgICAgICZxdW90O3poLUNOJnF1b3Q7XG4gICAgICAgICk7XG59XG5jb25zdCByb3V0ZXMgPSBbe1xuICAgIHBhdGg6ICZxdW90Oy8mcXVvdDssXG4gICAgbmFtZTogJnF1b3Q7SG9tZSZxdW90OyxcbiAgICBjb21wb25lbnQ6ICgpID0mZ3Q7IGltcG9ydCggLyogd2VicGFja0NodW5rTmFtZTogJnF1b3Q7aG9tZSZxdW90OyAqLyAmcXVvdDsuLi92aWV3cy9ob21lL2luZGV4LnZ1ZSZxdW90OyksXG4gICAgY2hpbGRyZW46IHJvdXRlLFxufV07XG48L2NvZGU+PC9wcmU+XG48cD7omb3nhLbnnIvotbfmnaXljLrliKvkuI3lpKfvvIzlj6rmmK/lnKjkvKDlhaUgPGNvZGU+Y29tcG9uZW50UmVxdWlyZTwvY29kZT4g5LmL5YmN55qEIDxjb2RlPmR5bmFtaWNQYXRoPC9jb2RlPiDlhYjmiKrlj5bmjonmnIDliY3pnaLnmoQgPGNvZGU+LzwvY29kZT4g77yM54S25ZCO5ZyoIDxjb2RlPnJlcXVpcmU8L2NvZGU+IOeahOaXtuWAmeWGjeihpeS4iiA8Y29kZT4vPC9jb2RlPiDvvIzkvYbmmK/ov5nmoLflj6/ku6Xop6PlhrMgPGNvZGU+d2VicGFjazwvY29kZT4g55qE5Yqo5oCB5byV5YWl6Zeu6aKY44CCPC9wPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0NvbXBvbmVudERvYycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICA8L3NjcmlwdD5cbiAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Z1ZS1yb3V0ZXIubWQ/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGYxNmNiZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdnVlLXJvdXRlci5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdnVlLXJvdXRlci5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==