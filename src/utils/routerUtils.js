import routerMap from "@/router/async/router.map";
import Router from "vue-router";
import basicOptions from "@/router/async/config.async";

// 应用配置
const options = {
  ...basicOptions,
  routes: parseRoutes(basicOptions.routes, routerMap)
};

// 路由实例
const router = new Router(options);

// 路由解析
function parseRoutes(routesConfig, routerMap) {
  return routesConfig.map(route => {
    if (typeof route === "string") {
      return routerMap[route];
    } else if (route.children) {
      route.children = parseRoutes(route.children, routerMap);
      return route;
    } else {
      return route;
    }
  });
}

export default router;