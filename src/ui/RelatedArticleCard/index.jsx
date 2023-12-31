import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Stack } from "react-bootstrap";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { Tag, Time } from "@/ui";

export default function RelatedArticleCard({ className, title, image, tags, publish_date, href }) {
  return (
    <div className={clsx(className, classes.card)}>
      <div className={clsx(classes.card__body, "pb-3")}>
        <Stack className="flex-row mb-3" gap={3}>
          <a href={href} className="w-50">
            <SourceFlowImage className={classes.card__img} src={image} size="180x84" alt={title} />
          </a>
          <h3 className="h6 text-primary my-2 w-50">
            <a href={href}>{trimText(title, 50)}</a>
          </h3>
        </Stack>
        <Stack className="flex-row flex-wrap align-items-center" gap={2}>
          <Time className="mb-0" date={publish_date} />
          {tags.map(({ label, href }, k) => (
            <Tag key={k} label={label} href={href} />
          ))}
        </Stack>
      </div>
    </div>
  );
}

RelatedArticleCard.defaultProps = {
  className: "",
  title: null,
  image: null,
  tags: [],
  publish_date: null,
  href: null,
};

RelatedArticleCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string,
      href: PropTypes.string,
      variant: PropTypes.string,
    })
  ),
  publish_date: PropTypes.string,
  href: PropTypes.string,
};
