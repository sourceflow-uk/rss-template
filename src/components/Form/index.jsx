import PropTypes from "prop-types";
import clsx from "classnames";
import { Description, Form as FormComponent, Title } from "@/ui";
import { Container } from "react-bootstrap";

export default function Form({ className, title, description, formClassName, formId }) {
  if (!formId) {
    return null;
  }

  return (
    <div className={clsx(className)}>
      <Container>
        <div className={formClassName}>
          <Title title={title} />
          <Description description={description} />
          <FormComponent formId={formId} />
        </div>
      </Container>
    </div>
  );
}

Form.defaultProps = {
  className: "py-5",
  title: null,
  formClassName: "",
  formId: null,
};

Form.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  formClassName: PropTypes.string,
  formId: PropTypes.string,
};
