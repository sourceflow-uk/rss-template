import PropTypes from "prop-types";
import clsx from "classnames";
import { Container } from "react-bootstrap";
import JobSearch from "@sourceflow-uk/job-search";
import "@sourceflow-uk/job-search/dist/bundle.css";

export default function JobsFeed({ className, sector }) {
  return (
    <div className={clsx(className)}>
      <Container>
        <JobSearch
          options={{
            prefilters: {
              "3186657c-e89c-4a6f-9157-35eb7fe0b379": [sector],
            },
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
