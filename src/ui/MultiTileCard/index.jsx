import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { trimText } from "@/functions/trimText";
import { Image } from "@/ui";

export default function MultiTileCard({ className, title, img, href }) {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <Image className={classes.card__img} img={img} size="200x200" alt={title} />
      <div className={classes.card__body}>
        <h4 className="h6">{trimText(title, 50)}</h4>
      </div>
    </a>
  );
}

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
