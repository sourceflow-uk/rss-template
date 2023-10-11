import routes from "@/routes.json";
import config from "@/../next.config";
import { isUrl } from "@/functions/isUrl";

export const getRoute = (key, url_slug = null) => {
  let route = routes[key];

  if (isUrl(route)) {
    return route;
  }

  if (url_slug) {
    route = route.replace("[url_slug]", url_slug);
  }

  return `${config.basePath}${route}`;
};
