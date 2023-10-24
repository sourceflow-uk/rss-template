import { Collapse, Container } from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";

export default function CollapsibleContent({ className, title, body }) {
  const [show, setShow] = useState(false);

  return (
    <div className={className}>
      <Container className="mw-xl">
        <details>
          <summary onClick={() => setShow(!show)}>{title}</summary>
          <Collapse in={show}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Collapse>
        </details>
      </Container>
    </div>
  );
}

CollapsibleContent.defaultProps = {
  className: "py-4 py-md-5",
  title: "",
  body: "",
};

CollapsibleContent.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};
