import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Image } from "@/ui";

export default function FeaturedEmployerCard({ className, title, img, href }) {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <Image img={img} size="120x120" alt={title} />
    </a>
  );
}

FeaturedEmployerCard.defaultProps = {
  className: "",
  title: "",
  img: "",
  href: "",
};

FeaturedEmployerCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
