import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export const LogoCard = ({ className, logo, name, href }) => {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <img className="mw-100" src={logo} alt={name} title={name} />
    </a>
  );
};

LogoCard.defaultProps = {
  name: "",
  logo: "",
  href: "",
};

LogoCard.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  href: PropTypes.string,
};
