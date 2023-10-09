import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { trimText } from "@/functions/trimText";
import Location from "@/assets/Location.svg";
import Contract from "@/assets/Contract.svg";
import { lazy } from "react";

const CTA = lazy(() => import("@/ui/CTA"));

export const JobCard = ({ className, title, location, salary_package, role_type, href }) => {
  return (
    <div className={clsx(className, classes.card, "p-4")}>
      <div className={classes.card__body}>
        <h3 className="h5 mb-3 flex-grow-1 text-primary">{trimText(title, 35)}</h3>
        <dl>
          <dt className="visually-hidden">Salary</dt>
          <dd>
            <strong>{salary_package}</strong>
          </dd>
        </dl>
        <dl>
          <dt>
            <span className="visually-hidden">Location</span>
            <Location width="25" height="25" />
          </dt>
          <dd>{location}</dd>
        </dl>
        <dl>
          <dt>
            <span className="visually-hidden">Role Type</span>
            <Contract width="25" height="25" />
          </dt>
          <dd>{role_type}</dd>
        </dl>
        <CTA className="mt-5" variant="secondary" href={href} label="View this job" />
      </div>
    </div>
  );
};

JobCard.defaultProps = {
  className: "bg-light",
  title: "",
  salary_package: "",
  role_type: "",
  href: "",
};

JobCard.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  salary_package: PropTypes.string,
  role_type: PropTypes.string,
  href: PropTypes.string,
};

export default JobCard;
