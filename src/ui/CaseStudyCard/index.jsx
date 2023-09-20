import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const CaseStudyCard = ({ className, title, description, img, href }) => {
  return (
    <a className={clsx(className, classes.card)} href={href} style={{ backgroundImage: `url(${img})` }}>
      <div className={classes.card__body}>
        <h4>{title}</h4>
        <p>{description}</p>
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
