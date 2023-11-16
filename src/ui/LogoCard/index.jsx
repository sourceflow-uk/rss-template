import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Image } from "@/ui";

export default function LogoCard({ className, logo, name, href }) {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <Image className="mw-100" img={logo} size="228x" alt={name} title={name} />
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
