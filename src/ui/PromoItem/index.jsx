import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";

export const PromoItem = ({ className, title, img, description, href }) => {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <figure>
        <SourceFlowImage src={img} size="380x220" alt={title} />
      </figure>
      <div className={classes.card__body}>
        <h4>{trimText(title, 50)}</h4>
        <p>{trimText(description, 240)}</p>
      </div>
    </a>
  );
};

PromoItem.defaultProps = {
  className: "",
  title: "",
  img: "",
  description: "",
  href: "",
};

PromoItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};
