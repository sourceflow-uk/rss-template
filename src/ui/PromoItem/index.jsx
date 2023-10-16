import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";

export default function PromoItem({ className, title, img, description, href }) {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <figure>{img && <SourceFlowImage src={img} size="380x220" alt={title} />}</figure>
      <div className={classes.card__body}>
        <h5>{trimText(title, 50)}</h5>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </a>
  );
}

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
