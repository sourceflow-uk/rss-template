import routes from "@/routes.json";
import config from "@/../next.config";
import { isUrl } from "@/functions/isUrl";

export const getRoute = (key, params = {}) => {
  let route = routes[key];

  if (!route) {
    return isUrl(key) ? key : `${config.basePath}${key}`;
  }

  if (isUrl(route)) {
    return route;
  }

  if ("url_slugs" in params) {
    route = `${route}${params.url_slugs.join("/")}/`;
  } else {
    Object.keys(params).forEach((p) => {
      route = route.replace(`[${p}]`, params[p]);
    });
  }

  return `${config.basePath}${route}`;
};
