import { Col, Container, Row } from "react-bootstrap";
import { PromotionalPanelCard } from "@/ui/PromotionalPanelCard";
import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

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
  className: "",
  items: [],
};

PromotionalPanel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(PromotionalPanelCard.propTypes)),
};
