import { Col, Row } from "react-bootstrap";
import { CTA } from "@/ui/CTA";

export const PromotionalCarouselItem = ({ className, title, description, img, video, cta }) => {
  return (
    <div className={className}>
      <Row>
        <Col xs={12} md={6}>
          <img src={img} alt="" />
        </Col>
        <Col xs={12} md={6}>
          <h2>{title}</h2>
          <p>{description}</p>
          <CTA href={cta.href} label={cta.label} variant={cta.variant} />
        </Col>
      </Row>
    </div>
  );
};
