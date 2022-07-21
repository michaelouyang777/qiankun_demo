import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入qiankun
import { registerMicroApps, start } from "qiankun";
// 子项目配置项
const apps = [
  {
    name: "vueApp", // 应用的名字
    entry: "//localhost:8081", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#vue", // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
    activeRule: "/vue", // 激活的路径
    props: { a: 1 }, // 传递的值（可选）
  },
];
// 注册应用
registerMicroApps(apps);
// 开启
start({
  prefetch: false, // 取消预加载
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
