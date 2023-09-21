import clsx from "classnames";
import classes from "./styles.module.scss";

export const MultiTileCard = ({ className, title, img, href }) => {
  return (
    <a href={href} className={clsx(className, classes.card)} style={{ backgroundImage: `url(${img})` }}>
      <div className={classes.card__body}>
        <h4 className="h6">{title}</h4>
      </div>
    </a>
  );
};
