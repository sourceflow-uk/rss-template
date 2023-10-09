import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { lazy } from "react";

const PromoItem = lazy(() => import("@/ui/PromoItem"));

export const PromoSection = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.section)}>
      <Container className="mw-xl">
        <Row>
          {items.map(({ title, description, img, href }, k) => (
            <Col key={k}>
              <PromoItem className="h-100" title={title} description={description} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

PromoSection.defaultProps = {
  className: "py-5",
  items: [],
};

PromoSection.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(PromoItem.propTypes)),
};

export default PromoSection;
