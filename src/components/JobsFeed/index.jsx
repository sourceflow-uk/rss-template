import PropTypes from "prop-types";
import clsx from "classnames";
import { Container, FormCheck } from "react-bootstrap";
import JobSearch from "@sourceflow-uk/job-search";
import "@sourceflow-uk/job-search/dist/bundle.css";
import classes from "./styles.module.scss";

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
            searchResultsOptions: {
              resultNewTab: false,
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
