import routes from "@/routes.json";
import config from "@/../next.config";
import { isUrl } from "@/functions/isUrl";

export const getRoute = (key, params = {}) => {
  let route = routes[key] ?? "/";

  if (isUrl(route)) {
    return route;
  }

  if ("url_slug" in params) {
    route = route.replace("[url_slug]", params.url_slug);
  }

  if ("url_slugs" in params) {
    route = `/${params.url_slugs.join("/")}`;
  }

  return `${config.basePath}${route}`;
};
