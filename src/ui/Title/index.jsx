import PropTypes from "prop-types";
import clsx from "classnames";
import { DynamicText } from "@/ui";
import classes from "./styles.module.scss";
import React from "react";

export default function Title({ className, title, tag }) {
  if (!title) {
    return null;
  }

  if (typeof title === "string") {
    return React.createElement(tag, {
      className: clsx(classes.title, className),
      dangerouslySetInnerHTML: { __html: title },
    });
  }

  return (
    <DynamicText className={clsx(classes.title, className)} path={title.path} tag={tag}>
      {title.placeholder ?? ""}
    </DynamicText>
  );
}

Title.defaultProps = {
  className: "",
  tag: "h2",
  title: null,
};

Title.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.any,
};
