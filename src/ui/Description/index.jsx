import PropTypes from "prop-types";
import clsx from "classnames";
import { DynamicHtml } from "@/ui";
import classes from "./styles.module.scss";
import React from "react";

export default function Description({ className, description }) {
  if (!description) {
    return null;
  }

  if (typeof description === "string") {
    return React.createElement("div", { className: clsx(classes.description, className) }, description);
  }

  return (
    <DynamicHtml className={clsx(classes.description, className)} path={description.path}>
      <div dangerouslySetInnerHTML={{ __html: description.placeholder }} />
    </DynamicHtml>
  );
}

Description.defaultProps = {
  className: "",
  description: null,
};

Description.propTypes = {
  className: PropTypes.string,
  description: PropTypes.any,
};
