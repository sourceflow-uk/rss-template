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
export default function Form({
  className,
  formId = null,
  jobId = null,
  onSubmitDone = () => {
    if (typeof window !== "undefined") {
      window.location.href = `/submission-complete`;
    }
  },
}) {
  if (formId === null && jobId == null) {
    return null;
  }

  // noinspection JSUnresolvedLibraryURL
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
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
