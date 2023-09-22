import { Tag } from "@/ui/Tag";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import clsx from "classnames";
import { format } from "date-fns";

export const BlogArticleCard = ({ className, title, description, img, published_at, tags }) => {
  return (
    <article className={clsx(className, classes.card)}>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className={classes.card__body}>
        <div className="d-flex gap-2 pb-3">
          {tags.map(({ label, href }) => (
            <Tag label={label} href={href} />
          ))}
        </div>
        <h4>{title}</h4>
        <time>{format(published_at, "dd/MM/yyyy")}</time>
        <p>{description}</p>
      </div>
    </article>
  );
};

BlogArticleCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  published_at: PropTypes.instanceOf(Date),
  tags: PropTypes.arrayOf(PropTypes.string),
};
