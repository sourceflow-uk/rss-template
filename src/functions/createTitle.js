import { getGlobal } from "@/getters/getGlobal";

export const createTitle = (...parts) => {
  const global = getGlobal();
  const prefix = global["_theme.meta.title.prefix"] ?? null;
  const suffix = global["_theme.meta.title.suffix"] ?? null;
  const separator = global["_theme.meta.title.separator"] ?? " - ";

  let title = parts.join(separator);

  if (prefix) {
    title = `${prefix}${separator}${title}`;
  }

  if (suffix) {
    title = `${title}${separator}${suffix}`;
  }

  return title;
};
