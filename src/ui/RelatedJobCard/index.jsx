import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { formatDistanceToNowStrict } from "date-fns";
import { Stack } from "react-bootstrap";
import { Tag } from "@/ui/Tag";

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
        <h3 className="h6 mb-0">{title}</h3>
        <dl className="mb-2">
          <dt className="visually-hidden">Location</dt>
          <dd>{location}</dd>
        </dl>
        <div className="flex-grow-1 mb-2">
          <Stack className="flex-row flex-wrap" gap={2}>
            <Tag className="p-1" label={`${salary_package} a year`} />
            <Tag className="p-1" label={role_type} />
            {sectors.map(({ label, href }, k) => (
              <Tag className="p-1" key={k} label={label} href={href} />
            ))}
          </Stack>
        </div>
        <time>{`Posted ${formatDistanceToNowStrict(published_at)} ago`}</time>
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
  published_at: PropTypes.instanceOf(Date),
  href: PropTypes.string,
};
