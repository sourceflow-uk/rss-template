import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";

export const PromoItem = ({ className, title, img, description, href }) => {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className={classes.card__body}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
};

PromoItem.defaultProps = {
  className: "",
  title: "",
  description: "",
};

PromoItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
