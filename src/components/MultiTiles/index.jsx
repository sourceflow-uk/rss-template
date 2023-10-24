import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { MultiTileCard } from "@/ui";

export default function MultiTiles({ className, items }) {
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
}

MultiTiles.defaultProps = {
  className: "py-4 py-md-5",
  items: [],
};

MultiTiles.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
