import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import clsx from "classnames";
import { format } from "date-fns";
import { trimText } from "@/functions/trimText";

export default function LatestBlogCard({ className, title, description, img, published_at }) {
  return (
    <article className={clsx(className, classes.card)}>
      <figure className="ratio ratio-1x1">
        <SourceFlowImage src={img} size="373x220" alt={title} />
      </figure>
      <div className={classes.card__body}>
        <h4>{trimText(title, 50)}</h4>
        <time>{format(new Date(published_at), "dd/MM/yyyy")}</time>
        <p>{trimText(description, 180)}</p>
      </div>
    </article>
  );
}

LatestBlogCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  published_at: PropTypes.string,
};
