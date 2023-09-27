import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";

export const PromoButton = ({ className, title, img, href }) => {
  return (
    <a href={href} className={clsx(className, classes.button)}>
      <img className={classes.button__img} src={img} alt="" />
      <div className={classes.button__body}>
        <h4>{title}</h4>
      </div>
    </a>
  );
};

PromoButton.defaultProps = {
  className: "",
  title: "",
  href: "",
};

PromoButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  href: PropTypes.string,
};
