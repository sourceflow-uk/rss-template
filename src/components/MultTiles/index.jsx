import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { lazy } from "react";

const MultiTileCard = lazy(() => import("@/ui/MultiTileCard"));

export const MultiTiles = ({ className, items }) => {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
        <Row>
          {items.map(({ title, img, href }, k) => (
            <Col key={k} xs={2} className="p-0">
              <MultiTileCard title={title} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

MultiTiles.defaultProps = {
  className: "py-5",
  items: [],
};

MultiTiles.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(MultiTileCard.propTypes)),
};

export default MultiTiles;
