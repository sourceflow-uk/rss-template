import Icon from "@/assets/Phone.svg";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";

export default function Phone({ className, number, icon }) {
  return (
    <time className={clsx(className, classes.phone)}>
      {icon && <Icon width="24" height="24" />}
      <a href={`tel:${number.replaceAll(" ", "")}`}>{number}</a>
    </time>
  );
}

Phone.defaultProps = {
  className: "",
  icon: true,
  number: "",
};

Phone.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.bool,
  number: PropTypes.string,
};
