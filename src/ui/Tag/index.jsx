import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";

export default function Tag({ className, label, href }) {
  return href ? (
    <a className={clsx(className, classes.tag)} href={href}>
      {label}
    </a>
  ) : (
    <span className={clsx(className, classes.tag)}>{label}</span>
  );
}

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
