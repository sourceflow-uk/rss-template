import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";

export const Tag = ({ className, label, href }) => {
  return (
    <a className={clsx(className, classes.tag)} href={href}>
      {label}
    </a>
  );
};

Tag.defaultProps = {
  className: "",
  label: "",
  href: null,
};

Tag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
};
