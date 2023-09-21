import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const MultiTileCard = ({ className, title, img, href }) => {
  return (
    <a href={href} className={clsx(className, classes.card)} style={{ backgroundImage: `url(${img})` }}>
      <div className={classes.card__body}>
        <h4 className="h6">{title}</h4>
      </div>
    </a>
  );
};

MultiTileCard.defaultProps = {
  className: "",
  title: "",
  img: "",
  href: "",
};

MultiTileCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
