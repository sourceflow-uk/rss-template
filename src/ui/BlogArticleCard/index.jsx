// import { Tag } from "@/ui/Tag";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import clsx from "classnames";
import { format } from "date-fns";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";

// TODO: remove commented sections

export const BlogArticleCard = ({
  className,
  title,
  description,
  img,
  published_at,
  //tags
}) => {
  return (
    <article className={clsx(className, classes.card)}>
      <figure className="ratio ratio-1x1">
        <SourceFlowImage src={img} size="373x220" alt={title} />
      </figure>
      <div className={classes.card__body}>
        {/*<div className="d-flex gap-2 pb-3">*/}
        {/*  {tags.map(({ label, href }) => (*/}
        {/*    <Tag label={label} href={href} />*/}
        {/*  ))}*/}
        {/*</div>*/}
        <h4>{trimText(title, 50)}</h4>
        <time>{format(new Date(published_at), "dd/MM/yyyy")}</time>
        <p>{trimText(description, 180)}</p>
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
  // tags: PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
};
