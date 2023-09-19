import routes from '../routes.json'

export const getRoute = (key, url_slug = null) => {
  return url_slug ? routes[key].replace("[url_slug]", url_slug) : routes[key];
};
