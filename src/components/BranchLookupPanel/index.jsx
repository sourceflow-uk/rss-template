import { Col, Container, Row } from "react-bootstrap";
import { BranchLocator } from "@/ui";
import clsx from "classnames";

export default function BranchLookupPanel({ className, branches }) {
  return (
    <div className={clsx(className)}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <BranchLocator branches={branches} />
          </Col>
          <Col xs={12} md={8}></Col>
        </Row>
      </Container>
    </div>
  );
}

BranchLookupPanel.defaultProps = {
  className: "py-5",
};

BranchLookupPanel.propTypes = {};
