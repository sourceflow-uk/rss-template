import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";

export default function RichText({ className, body }) {
  if (!body) {
    return null;
  }
  return (
    <div className={clsx(className, classes.text)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} dangerouslySetInnerHTML={{ __html: body }} />
        </Row>
      </Container>
    </div>
  );
}

RichText.defaultProps = {
  className: "py-5",
  body: null,
};
