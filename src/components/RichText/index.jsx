import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";

export const RichText = ({ className, body }) => {
  if (!body) {
    return null;
  }
  return (
    <div className={clsx(className, classes.text)}>
      <Container className="mw-lg">
        <Row>
          <Col xs={12} dangerouslySetInnerHTML={{ __html: body }} />
        </Row>
      </Container>
    </div>
  );
};

RichText.defaultProps = {
  className: "py-5",
  body: null,
};
