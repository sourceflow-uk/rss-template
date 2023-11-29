import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import Location from "@/assets/Location.svg";
import Contract from "@/assets/Contract.svg";
import { CTA } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { jobs_helper } from "@/helpers/jobs_helper";

export default function JobCard({ className, title, location, salary_package, categories, url_slug }) {
  const job_types = jobs_helper.getCategoryValues("275d8990-bd9e-4f79-a0e2-d81bb734c855", { categories });

  return (
    <div className={clsx(className, classes.card, "p-4")}>
      <div className={classes.card__body}>
        <h3 className="h5 mb-3 flex-grow-1 text-primary">{title}</h3>
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
          <dd>{job_types.map((i) => i.name).join(", ")}</dd>
        </dl>
        <CTA className="mt-5" variant="secondary" href={getRoute("job", { url_slug })} label="View this job" />
      </div>
    </div>
  );
}

JobCard.defaultProps = {
  className: "bg-light",
};

JobCard.propTypes = {
  className: PropTypes.string,
};
