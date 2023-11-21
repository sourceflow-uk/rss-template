import "@sourceflow-uk/job-search/dist/bundle.css";
import ArrowRight from "@/assets/ArrowRight.svg";
import JobSearch from "@sourceflow-uk/job-search";
import PropTypes from "prop-types";
import { Container, FormCheck, Stack } from "react-bootstrap";
import { CTA, Image } from "@/ui";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";

import Branches from "@/../.sourceflow/jobs-Branches.json";
import JobType from "@/../.sourceflow/jobs-Job Type.json";
import Sector from "@/../.sourceflow/jobs-Sector.json";
import { jobs_helper } from "@/helpers/jobs_helper";
import { employer_helper } from "@/helpers/employer_helper";

export default function JobsFeed({ className, sector, changeURLOnFilterChange }) {
  return (
    <div className={clsx(className, classes.feed)}>
      <Container>
        <JobSearch
          options={{
            jobsUrl: "/jobs/",
            prefilters: {
              "3186657c-e89c-4a6f-9157-35eb7fe0b379": [sector],
            },
            urlFilters: {
              mode: "active",
              jobCategories: [Branches, Sector, JobType],
              changeURLOnFilterChange: changeURLOnFilterChange,
            },
            searchInput: {
              queryInput: true,
              locationInput: true,
              radiusInput: true,
            },
            searchFiltersOptions: {
              filterUnselectedElement: <FormCheck />,
              filterSelectedElement: <FormCheck checked />,
              exclude: {
                "af83ff7d-ff72-43c0-aba5-ccac084aec2d": true,
                "1df83e15-03f4-4ce7-9f8d-9b20d0ea1538": true,
                "3186657c-e89c-4a6f-9157-35eb7fe0b379": [sector],
              },
            },
            searchResultsOptions: {
              resultNewTab: false,
              resultCategories: {
                Salary: false,
              },
              resultLinks: ({ href, label, target, job }) => {
                let logo = null;
                const [employerID] = jobs_helper.getCategoryValueIds("1df83e15-03f4-4ce7-9f8d-9b20d0ea1538", job);
                if (employerID) {
                  const employer = employer_helper.find(employerID, "id");
                  if (employer) {
                    if ("logo" in employer) {
                      logo = employer.logo;
                    }
                  }
                }

                return (
                  <>
                    {logo && <img className="js-results-details-employer-logo" src={logo} alt="" />}
                    <time className="me-auto">{`Posted ${formatDistanceToNowStrict(
                      fromUnixTime(job.published_at),
                    )} ago`}</time>
                    <CTA href={href} label={label} target={target} variant="secondary" />
                    <CTA href={`${href}#Apply`} label="Apply now" target={target} variant="outline-secondary" />
                  </>
                );
              },
            },
          }}
          translations={{
            "searchResults.buttonText": "View job",
            "button.text": (
              <Stack className="flex-row align-items-center justify-content-center px-3" gap={2}>
                Search <ArrowRight />
              </Stack>
            ),
          }}
        />
      </Container>
    </div>
  );
}

JobsFeed.defaultProps = {
  className: "py-4 py-md-5",
  sector: null,
  changeURLOnFilterChange: true,
};

JobsFeed.propTypes = {
  className: PropTypes.string,
  sector: PropTypes.string,
};
