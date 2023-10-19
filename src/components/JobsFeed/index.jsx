import "@sourceflow-uk/job-search/dist/bundle.css";
import JobSearch from "@sourceflow-uk/job-search";
import PropTypes from "prop-types";
import clsx from "classnames";
import { Container, FormCheck } from "react-bootstrap";
import classes from "./styles.module.scss";
import { CTA } from "@/ui";
import { formatDistanceToNowStrict } from "date-fns";

export default function JobsFeed({ className, sector }) {
  return (
    <div className={clsx(className, classes.feed)}>
      <Container>
        <JobSearch
          options={{
            searchSubmitButton: false,
            prefilters: {
              "3186657c-e89c-4a6f-9157-35eb7fe0b379": [sector],
            },
            searchFiltersOptions: {
              filterUnselectedElement: <FormCheck />,
              filterSelectedElement: <FormCheck checked />,
              exclude: {
                "a82e2fc2-7013-4836-98aa-02667db9d824": true,
                "3186657c-e89c-4a6f-9157-35eb7fe0b379": [sector],
              },
            },
            jobsPerPage: 2,
            searchResultsOptions: {
              resultNewTab: false,
              resultLinks: ({ href, label, target, job }) => (
                <>
                  <time className="me-auto">{`Posted ${formatDistanceToNowStrict(
                    new Date(job.published_at),
                  )} ago`}</time>
                  <CTA href={href} label={label} target={target} variant="secondary" />
                  <CTA href={`${href}#apply`} label="Apply now" target={target} variant="outline-secondary" />
                </>
              ),
            },
          }}
          translations={{
            "searchResults.buttonText": "View job",
          }}
        />
      </Container>
    </div>
  );
}

JobsFeed.defaultProps = {
  className: "py-5",
  sector: null,
};

JobsFeed.propTypes = {
  className: PropTypes.string,
  sector: PropTypes.string,
};
