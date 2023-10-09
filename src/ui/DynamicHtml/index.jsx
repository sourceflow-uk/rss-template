import React from "react";
import SourceFlowText from "@sourceflow-uk/sourceflowtext";
import { getGlobal } from "@/getters/getGlobal";

/**
 *
 * @param key
 * @returns {JSX.Element}
 * @constructor
 */
export const DynamicHtml = ({ path, tag = "div", dangerouslySetInnerHTML, children, ...props }) => {
  let htmlProps = {
    type: "html",
    global: getGlobal(),
    path,
    children,
  };

  if (dangerouslySetInnerHTML) {
    htmlProps.children = <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  }

  return React.createElement(tag, props, <SourceFlowText {...htmlProps} />);
};
