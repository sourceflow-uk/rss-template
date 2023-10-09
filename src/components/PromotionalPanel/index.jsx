import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { lazy } from "react";

const PromotionalPanelCard = lazy(() => import("@/ui/PromotionalPanelCard"));

export const PromotionalPanel = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.panel)}>
      <Container className="mw-lg">
        <Row>
          {items.map(({ title, description, cta }, k) => (
            <Col key={k}>
              <PromotionalPanelCard title={title} description={description} cta={cta} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

PromotionalPanel.defaultProps = {
  className: "py-5",
  items: [],
};

PromotionalPanel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(PromotionalPanelCard.propTypes)),
};

export default PromotionalPanel;
