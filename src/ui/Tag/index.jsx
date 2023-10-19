import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";

export default function Tag({ className, label, href, variant }) {
  return href ? (
    <a className={clsx(className, classes.tag)} href={href} data-variant={variant}>
      {label}
    </a>
  ) : (
    <span className={clsx(className, classes.tag)} data-variant={variant}>
      {label}
    </span>
  );
}

Tag.defaultProps = {
  className: "",
  label: "",
  href: null,
  variant: "light",
};

Tag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
};
