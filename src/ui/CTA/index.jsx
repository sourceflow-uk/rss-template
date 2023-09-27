import { Button } from "react-bootstrap";
import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export const CTA = ({ className, label, href, variant }) => {
  return (
    <div className={clsx(className, classes.cta)}>
      <Button variant={variant} href={href}>
        {label}
      </Button>
    </div>
  );
};

CTA.defaultProps = {
  className: "",
  label: "",
  href: "",
  variant: "dark",
};

CTA.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
};
