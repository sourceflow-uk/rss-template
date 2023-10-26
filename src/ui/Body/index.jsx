import PropTypes from "prop-types";
import clsx from "classnames";
import { DynamicHtml } from "@/ui";
import classes from "./styles.module.scss";
import React from "react";

export default function Body({ className, body, tag }) {
  if (!body) {
    return null;
  }

  if (typeof body === "string") {
    return React.createElement(tag, {
      className: clsx(classes.body, className),
      dangerouslySetInnerHTML: { __html: body },
    });
  }

  return (
    <DynamicHtml className={clsx(classes.body, className)} path={body.path} tag={tag}>
      <span dangerouslySetInnerHTML={{ __html: body.placeholder }} />
    </DynamicHtml>
  );
}

Body.defaultProps = {
  className: "",
  body: null,
  tag: "div",
};

Body.propTypes = {
  className: PropTypes.string,
  body: PropTypes.any,
};
