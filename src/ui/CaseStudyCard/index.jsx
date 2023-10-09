import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export const CaseStudyCard = ({ className, title, description, img, href }) => {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <SourceFlowImage className={classes.card__img} src={img} size="300x300" alt={title} />
      <div className={classes.card__body}>
        <h4>{title}</h4>
        <p>{trimText(description, 118)}</p>
      </div>
    </a>
  );
};

CaseStudyCard.defaultProps = {
  className: "",
  title: "",
  description: "",
  img: "",
  href: "#",
};

CaseStudyCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};

export default CaseStudyCard;
