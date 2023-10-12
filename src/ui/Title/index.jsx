import PropTypes from "prop-types";
import clsx from "classnames";
import { DynamicText } from "@/ui";
import classes from "./styles.module.scss";

export default function Title({ className, title, tag }) {
  if (!title) {
    return null;
  }

  return (
    <DynamicText className={clsx(classes.title, className)} path={title.path} tag={tag}>
      {title.placeholder}
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
  title: {
    label: PropTypes.string,
    placeholder: PropTypes.string,
  },
};
