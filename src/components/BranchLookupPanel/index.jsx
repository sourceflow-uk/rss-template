import { Col, Container, Row } from "react-bootstrap";
import { BranchLocator } from "@/ui";
import clsx from "classnames";
import PropTypes from "prop-types";

export default function BranchLookupPanel({ className }) {
  return (
    <div className={clsx(className)}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <BranchLocator />
          </Col>
          <Col xs={12} md={9}></Col>
        </Row>
      </Container>
    </div>
  );
}

BranchLookupPanel.defaultProps = {
  className: "py-4 py-md-5",
};

BranchLookupPanel.propTypes = {
  className: PropTypes.string,
};
