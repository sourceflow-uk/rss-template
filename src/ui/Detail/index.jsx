import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export default function Detail({ className, value, icon, label, hideLabel }) {
  return (
    <dl className={clsx(className, classes.detail)}>
      <dt>
        <span className={clsx({ "visually-hidden": hideLabel })}>{label}</span>
        {icon}
      </dt>
      <dd>{value}</dd>
    </dl>
  );
}

Detail.defaultProps = {
  className: "",
  value: null,
  icon: null,
  label: null,
  hideLabel: true,
};

Detail.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.any,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
};
