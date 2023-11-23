import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BranchLocator, BranchMap, BranchDirections } from "@/ui";
import clsx from "classnames";
import PropTypes from "prop-types";

export default function BranchLookupPanel({ className, branches }) {
  const [address, setAddress] = useState(null);

  const mapBranches = branches.filter(branch => branch.longitude)

  return (
    <div className={clsx(className)}>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <BranchLocator setAddressFunc={setAddress} />
          </Col>
          <Col xs={12} md={9}>
            { !address && <BranchMap branches={mapBranches} /> }
            { address && <BranchDirections address={address} branches={mapBranches} /> }
          </Col>
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
