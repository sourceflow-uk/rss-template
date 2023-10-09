import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { formatDistanceToNowStrict } from "date-fns";
import { Stack } from "react-bootstrap";
import { trimText } from "@/functions/trimText";
import { lazy } from "react";

const Tag = lazy(() => import("@/ui/Tag"));

export const RelatedJobCard = ({
  className,
  title,
  sectors,
  location,
  salary_package,
  role_type,
  published_at,
  href,
}) => {
  return (
    <a href={href} className={clsx(className, classes.card)}>
      <div className={classes.card__body}>
        <h3 className="h6 mb-0">{trimText(title, 50)}</h3>
        <dl className="mb-2">
          <dt className="visually-hidden">Location</dt>
          <dd>{trimText(location, 22)}</dd>
        </dl>
        <div className="flex-grow-1 mb-2">
          <Stack className="flex-row flex-wrap" gap={2}>
            <Tag label={`${salary_package} a year`} />
            <Tag label={role_type} />
            {sectors.map(({ label }, k) => (
              <Tag key={k} label={label} />
            ))}
          </Stack>
        </div>
        <time>{`Posted ${formatDistanceToNowStrict(new Date(published_at))} ago`}</time>
      </div>
    </a>
  );
};

RelatedJobCard.defaultProps = {
  className: "",
  title: "",
  sectors: [],
  location: "",
  salary_package: "",
  role_type: "",
  published_at: "",
  href: "#",
};

RelatedJobCard.propTypes = {
  title: PropTypes.string,
  sectors: PropTypes.arrayOf(PropTypes.string),
  location: PropTypes.string,
  salary_package: PropTypes.string,
  role_type: PropTypes.string,
  published_at: PropTypes.string,
  href: PropTypes.string,
};

export default RelatedJobCard;
