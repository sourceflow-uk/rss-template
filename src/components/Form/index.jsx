import PropTypes from "prop-types";
import clsx from "classnames";
import { Description, Form as FormComponent, Title } from "@/ui";
import { Container } from "react-bootstrap";

export default function Form({ className, title, description, formClassName, form_id, redirect_url }) {
  if (!form_id) {
    return null;
  }

  return (
    <div className={clsx(className)}>
      <Container>
        <div className={formClassName}>
          <Title title={title} />
          <Description description={description} />
          <FormComponent
            formId={form_id}
            onSubmitDone={() => {
              if (typeof window !== "undefined") {
                window.location.href = redirect_url ?? `/submission-complete`;
              }
            }}
          />
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
