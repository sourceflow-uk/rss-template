import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { PromotionalPanelCard } from "@/ui";

export default function PromotionalPanel({ className, items }) {
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
}

PromotionalPanel.defaultProps = {
  className: "py-4 py-md-5",
  items: [],
};

PromotionalPanel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      cta: PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        variant: PropTypes.string,
      }),
    }),
  ),
};
