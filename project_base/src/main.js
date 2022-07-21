import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 引入qiankun
import { registerMicroApps, start } from "qiankun";
import microApps from "./micro-app";

// 注册应用
registerMicroApps(microApps);
// 开启
start({
  prefetch: false, // 取消预加载
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
