import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";

export default function PromoButton({ className, title, img, href }) {
  return (
    <a href={href} className={clsx(className, classes.button)}>
      <SourceFlowImage className={classes.button__img} src={img} size="332x332" alt={title} />
      <div className={classes.button__body}>
        <h4>{trimText(title, 30)}</h4>
      </div>
    </a>
  );
}

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
