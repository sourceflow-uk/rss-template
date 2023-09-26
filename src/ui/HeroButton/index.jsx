import classes from "./styles.module.scss";
import clsx from "classnames";
import PropTypes from "prop-types";

export const HeroButton = ({ className, title, img, href }) => {
  return (
    <a className={clsx(className, classes.button)} href={href}>
      <img className={classes.button__img} src={img} alt="" />
      <div className={classes.button__body}>
        <h5 className="py-4">{title}</h5>
      </div>
    </a>
  );
};

HeroButton.defaultProps = {
  className: "",
  title: "",
  img: "",
  href: "",
};

HeroButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
