import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { getAsset } from "@/getters/getAsset";

export default function CaseStudyCard({ className, title, img, href }) {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <SourceFlowImage
        className={classes.card__img}
        src={img ?? getAsset("_theme.caseStudy.card.img.fallback")}
        size="300x300"
        alt={title}
      />
      <div className={classes.card__body}>
        <h4>{title}</h4>
      </div>
    </a>
  );
}

CaseStudyCard.defaultProps = {
  className: "",
  title: "",
  img: null,
  href: "#",
};

CaseStudyCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
