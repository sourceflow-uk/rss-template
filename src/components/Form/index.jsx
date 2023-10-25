import PropTypes from "prop-types";
import clsx from "classnames";
import { Form as FormComponent } from "@/ui";
import { Container } from "react-bootstrap";

export default function Form({ className, formClassName, formId }) {
  return (
    <div className={clsx(className)}>
      <Container>
        <FormComponent className={formClassName} formId={formId} />
      </Container>
    </div>
  );
}

Form.defaultProps = {
  className: "py-5",
  formClassName: "",
};

Form.propTypes = {
  className: PropTypes.string,
};
