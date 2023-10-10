import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export default function LogoCard({ className, logo, name, href }) {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <SourceFlowImage className="mw-100" src={logo} size="120x120" alt={name} title={name} />
    </a>
  );
}

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
