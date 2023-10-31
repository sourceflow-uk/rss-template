import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Description, Image, Title } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";

export default function PromoItem({ className, title, img, description, href }) {
  const global = getGlobal();

  return (
    <a href={href} className={clsx(className, classes.card)}>
      <figure>
        <Image img={img ?? global["_theme.card.img.fallback"]} size="380x220" alt="Cover image" />
      </figure>
      <div className={classes.card__body}>
        <Title title={title} tag="h5" />
        <Description description={description} />
      </div>
    </a>
  );
}

PromoItem.defaultProps = {
  className: "",
  title: "",
  img: "",
  description: "",
  href: "",
};

PromoItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
};
