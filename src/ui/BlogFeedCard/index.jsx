import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { Time } from "@/ui";

export default function BlogFeedCard({ className, title, published_at, img, href }) {
  return (
    <a className={clsx(className, classes.card)} href={href}>
      <SourceFlowImage className={classes.card__img} src={img} size="300x300" alt={title} />
      <div className={classes.card__body}>
        <h4>{title}</h4>
        <Time date={published_at} icon={false} className="text-white" />
      </div>
    </a>
  );
}

BlogFeedCard.defaultProps = {
  className: "",
  title: "",
  description: "",
  img: "",
  href: "#",
};

BlogFeedCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  published_at: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
