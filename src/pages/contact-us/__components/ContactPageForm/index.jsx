import PropTypes from "prop-types";
import clsx from "classnames";
import { Container } from "react-bootstrap";
import { Form, Title } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";

export default function ContactPageForm({ className, title }) {
  const global = getGlobal();

  return (
    <>
      <a id="form" />
      <div className={clsx(className)}>
        <Container>
          <Title title={title} />
          <Form formId={global["_theme.contact.form.id"]} />
        </Container>
      </div>
    </>
  );
}

ContactPageForm.defaultProps = {
  className: "py-5",
};

ContactPageForm.propTypes = {
  className: PropTypes.string,
};
