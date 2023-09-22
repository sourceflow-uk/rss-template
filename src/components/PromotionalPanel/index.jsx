import { Col, Container, Row } from "react-bootstrap";
import { PromotionalPanelCard } from "@/ui/PromotionalPanelCard";
import clsx from "classnames";
import classes from "./styles.module.scss";

export const PromotionalPanel = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.panel)}>
      <Container className="mw-lg">
        <Row>
          {items.map(({ title, description, cta, className }) => (
            <Col>
              <PromotionalPanelCard className={className} title={title} description={description} cta={cta} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
