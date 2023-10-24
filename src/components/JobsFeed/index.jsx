import "@sourceflow-uk/job-search/dist/bundle.css";
import ArrowRight from "@/assets/ArrowRight.svg";
import JobSearch from "@sourceflow-uk/job-search";
import JobType from "@/../.sourceflow/jobs-Job Type.json";
import Sector from "@/../.sourceflow/jobs-Sector.json";
import PropTypes from "prop-types";
import { Container, FormCheck, Stack } from "react-bootstrap";
import { CTA } from "@/ui";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { formatDistanceToNowStrict } from "date-fns";

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
              jobCategories: [Sector, JobType],
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
                "a82e2fc2-7013-4836-98aa-02667db9d824": true,
                "3186657c-e89c-4a6f-9157-35eb7fe0b379": [sector],
              },
            },
            searchResultsOptions: {
              resultNewTab: false,
              resultLinks: ({ href, label, target, job }) => (
                <>
                  <time className="me-auto">{`Posted ${formatDistanceToNowStrict(
                    new Date(job.published_at),
                  )} ago`}</time>
                  <CTA href={href} label={label} target={target} variant="secondary" />
                  <CTA href={`${href}#Apply`} label="Apply now" target={target} variant="outline-secondary" />
                </>
              ),
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
