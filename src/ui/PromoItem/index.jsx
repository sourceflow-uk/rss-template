import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { CTA, Description, Image, Title } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";
import Trophy from "@/assets/Trophy.svg";

export default function PromoItem({ className, title, img, description, featured, href, cta }) {
  const global = getGlobal();

  return (
    <div className={clsx(className, classes.card)}>
      <figure>
        {featured && (
          <i className="small">
            <Trophy /> Top rated
          </i>
        )}
        <a href={href}>
          {img ? (
            <Image img={img} size="380x220" alt="Cover image" />
          ) : (
            <img src={global["_theme.card.img.fallback"]} alt="" />
          )}
        </a>
      </figure>
      <div className={classes.card__body}>
        <a href={href}>
          <Title title={title} tag="h5" />
        </a>
        <Description description={description} />
        {cta && <CTA label={cta.label} href={cta.href} variant="white" />}
      </div>
    </div>
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
