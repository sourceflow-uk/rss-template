import SourceFlowForm from "@sourceflow-uk/sourceflowform";
import SourceFlowApplicationForm from "@sourceflow-uk/sourceflowapplicationform";
import { Helmet } from "react-helmet";
import classes from "./styles.module.scss";
import clsx from "classnames";

/**
 *
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */
export default function Form({ className, formId = null, jobId = null, onSubmitDone = () => {} }) {
  if (formId === null && jobId == null) {
    return null;
  }

  // noinspection JSUnresolvedLibraryURL
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css" />
      </Helmet>
      <div className={clsx(className, classes.form)}>
        {jobId ? (
          <SourceFlowApplicationForm jobId={jobId} onSubmitDone={onSubmitDone} />
        ) : (
          <SourceFlowForm formId={formId} onSubmitDone={onSubmitDone} />
        )}
      </div>
    </>
  );
}
