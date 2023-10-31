import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { getGlobal } from "@/getters/getGlobal";
import { Image } from "@/ui";

export default function CaseStudyCard({ className, title, img, href }) {
  const global = getGlobal();

  return (
    <a className={clsx(className, classes.card)} href={href}>
      <Image className={classes.card__img} img={img ?? global["_theme.card.img.fallback"]} size="300x300" alt={title} />
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
