import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { trimText } from "@/functions/trimText";
import { Image } from "@/ui";

export default function PromoButton({ className, title, img, href }) {
  return (
    <a href={href} className={clsx(className, classes.button)}>
      <Image className={classes.button__img} img={img} size="332x332" alt={title} />
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
