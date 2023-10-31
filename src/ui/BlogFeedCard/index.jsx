import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Image, Time } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";

export default function BlogFeedCard({ className, title, published_at, img, href }) {
  const global = getGlobal();

  return (
    <a className={clsx(className, classes.card)} href={href}>
      <Image className={classes.card__img} img={img ?? global["_theme.card.img.fallback"]} size="300x300" alt={title} />
      <div className={classes.card__body}>
        <h4>{title}</h4>
        <Time date={published_at} icon={false} className="text-white" />
      </div>
    </a>
  );
}

BlogFeedCard.defaultProps = {
  className: "",
  title: null,
  published_at: null,
  img: null,
  href: null,
};

BlogFeedCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  published_at: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
