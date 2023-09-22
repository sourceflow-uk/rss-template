import classes from "./styles.module.scss";
import clsx from "classnames";
import PropTypes from "prop-types";

export const HeroButton = ({ className, title, img, href }) => {
  return (
    <a className={clsx(className, classes.button)} href={href} style={{ backgroundImage: `url(${img})` }}>
      <h5 className="py-4">{title}</h5>
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
