import PropTypes from "prop-types";
import clsx from "classnames";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function BranchPageContent({ className, content, address }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={8} dangerouslySetInnerHTML={{ __html: content }} />
          <Col xs={12} md={4}>
            <Card>
              <Card.Header>Contact this branch</Card.Header>
              <Card.Body dangerouslySetInnerHTML={{ __html: address }} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

BranchPageContent.defaultProps = {
  className: "py-5",
};

BranchPageContent.propTypes = {
  className: PropTypes.string,
};
