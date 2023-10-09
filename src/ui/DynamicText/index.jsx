import React from "react";
import SourceFlowText from "@sourceflow-uk/sourceflowtext";
import { getGlobal } from "@/getters/getGlobal";

/**
 *
 * @param path
 * @param tag
 * @param dangerouslySetInnerHTML
 * @param children
 * @param props
 * @returns {React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>|JSX.Element}
 * @constructor
 */
export const DynamicText = ({ path, tag, dangerouslySetInnerHTML, children, ...props }) => {
  let textProps = {
    type: "text",
    global: getGlobal(),
    path,
    children,
  };

  if (dangerouslySetInnerHTML) {
    textProps.children = <span dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  }

  if (tag) {
    return React.createElement(tag, props, <SourceFlowText {...textProps} />);
  }

  return <SourceFlowText {...textProps} {...props} />;
};

DynamicText.defaultProps = {
  tag: null,
};
