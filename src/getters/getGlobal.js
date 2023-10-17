import global from "@/../.sourceflow/global.json";
import BaseObject from "@sourceflow-uk/sourceflow-sdk/base_object";

/**
 *
 * @param locale
 * @returns BaseObject
 */
export const getGlobal = (locale = "en") => {
  return new BaseObject(global, locale).toJson();
};
