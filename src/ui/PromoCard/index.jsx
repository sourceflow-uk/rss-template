import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";

export const PromoCard = ({ className, title, img, description }) => {
  return (
    <div className={clsx(className, classes.card)}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className={classes.card__body}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

PromoCard.defaultProps = {
  className: "",
  title: "",
  description: "",
};

PromoCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
