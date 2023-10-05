import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Stack } from "react-bootstrap";
import { Tag } from "@/ui/Tag";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { Time } from "@/ui/Time";

export const RelatedArticleCard = ({ className, title, img, tags, published_at, href }) => {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <SourceFlowImage className={classes.card__img} src={img} size="384x179" alt={title} />
      <div className={clsx(classes.card__body, "pb-3")}>
        <h3 className="h6 text-primary my-2">{trimText(title, 50)}</h3>
        <Stack className="flex-row flex-wrap align-items-center" gap={2}>
          <Time date={published_at} />
          {tags.map(({ label, href }, k) => (
            <Tag key={k} label={label} href={href} />
          ))}
        </Stack>
      </div>
    </a>
  );
};

RelatedArticleCard.defaultProps = {
  className: "",
  title: "",
  img: "",
  tags: [],
  published_at: "",
  href: "#",
};

RelatedArticleCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  tags: PropTypes.arrayOf(Tag.propTypes),
  published_at: PropTypes.string,
  href: PropTypes.string,
};
