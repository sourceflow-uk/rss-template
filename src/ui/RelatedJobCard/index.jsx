import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { formatDistanceToNowStrict } from "date-fns";
import { trimText } from "@/functions/trimText";

export default function RelatedJobCard({ className, title, location, published_at, href }) {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <div className={classes.card__body}>
        <h4>{trimText(title, 50)}</h4>
        <dl className="mb-1">
          <dt className="visually-hidden">Location</dt>
          <dd>{trimText(location, 22)}</dd>
        </dl>
        <time>{`${formatDistanceToNowStrict(new Date(published_at))} ago`}</time>
      </div>
    </a>
  );
}

RelatedJobCard.defaultProps = {
  className: "",
  title: "",
  location: "",
  published_at: "",
  href: "#",
};

RelatedJobCard.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  published_at: PropTypes.string,
  href: PropTypes.string,
};
