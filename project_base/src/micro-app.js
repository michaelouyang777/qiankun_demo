// 子项目配置项
const microApps = [
  {
    name: "vueApp", // 应用的名字
    entry: "//localhost:8081", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#subapp-viewport", // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
    activeRule: "#/sub-vue", // 激活的路径
    props: { a: 1 }, // 传递的值（可选）
  },
];

export default microApps;
