import classes from "./styles.module.scss";
import clsx from "classnames";

export const HeroButton = ({ className, title, img, href }) => {
  return (
    <a className={clsx(className, classes.button)} href={href} style={{ backgroundImage: `url(${img})` }}>
      <h5 className="py-4">{title}</h5>
    </a>
  );
};
