import clsx from "classnames";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Tag } from "@/ui/Tag";
import { Button } from "react-bootstrap";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import { trimText } from "@/functions/trimText";

export const JobCard = ({
  className,
  title,
  sectors,
  logo,
  location,
  salary_package,
  role_type,
  published_at,
  href,
}) => {
  return (
    <div className={clsx(className, classes.card)}>
      <div className={classes.card__body}>
        <time>{format(published_at, "dd/MM/yyyy")}</time>
        {logo && <img src={logo} alt="" />}
        <h3 className="h4 my-3 flex-grow-1">{trimText(title, 35)}</h3>
        <div className="d-flex gap-2 pb-3">
          {sectors.map(({ label, href }) => (
            <Tag label={label} href={href} />
          ))}
        </div>
        <dl>
          <dt>
            <span className="visually-hidden">Location</span>
            <ChevronRight width="7" height="13" />
          </dt>
          <dd>{location}</dd>
        </dl>
        <dl>
          <dt>
            <span className="visually-hidden">Salary</span>
            <ChevronRight width="7" height="13" />
          </dt>
          <dd>{salary_package}</dd>
        </dl>
        <dl>
          <dt>
            <span className="visually-hidden">Role Type</span>
            <ChevronRight width="7" height="13" />
          </dt>
          <dd>{role_type}</dd>
        </dl>
        <Button className="mt-3" variant="dark" href={href}>
          View this job
        </Button>
      </div>
    </div>
  );
};

JobCard.defaultProps = {
  className: "",
  title: "",
  sectors: [],
  logo: null,
  salary_package: "",
  role_type: "",
  published_at: "",
  href: "",
};

JobCard.propTypes = {
  title: PropTypes.string,
  sectors: PropTypes.arrayOf(PropTypes.shape(Tag.propTypes)),
  location: PropTypes.string,
  logo: PropTypes.string,
  salary_package: PropTypes.string,
  role_type: PropTypes.string,
  published_at: PropTypes.instanceOf(Date),
  href: PropTypes.string,
};
