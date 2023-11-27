import PropTypes from "prop-types";
import clsx from "classnames";
import { DynamicHtml } from "@/ui";
import classes from "./styles.module.scss";
import React from "react";

export default function Description({ className, description, tag }) {
  if (!description) {
    return null;
  }

  if (typeof description === "string") {
    return React.createElement(tag, {
      className: clsx(classes.description, className),
      dangerouslySetInnerHTML: { __html: description },
    });
  }

  return (
    <DynamicHtml className={clsx(classes.description, className)} path={description.path} tag={tag}>
      <span dangerouslySetInnerHTML={{ __html: description.placeholder ?? "" }} />
    </DynamicHtml>
  );
}

Description.defaultProps = {
  className: "",
  description: null,
  tag: "div",
};

Description.propTypes = {
  className: PropTypes.string,
  description: PropTypes.any,
};
