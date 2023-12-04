import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import clsx from "classnames";
import { format } from "date-fns";
import { trimText } from "@/functions/trimText";
import { Image } from "@/ui";

export default function LatestBlogCard({ className, title, description, img, published_at, href }) {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <figure className="ratio ratio-1x1">
        <Image img={img} size="373x220" alt={title} />
      </figure>
      <div className={classes.card__body}>
        <h5>{trimText(title, 50)}</h5>
        <time>{published_at && format(new Date(published_at), "dd/MM/yyyy")}</time>
        <p>{trimText(description, 180)}</p>
      </div>
    </a>
  );
}

LatestBlogCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  published_at: PropTypes.string,
};
