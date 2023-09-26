import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Carousel, Col, Row } from "react-bootstrap";
import { CTA } from "@/ui/CTA";

export const PromotionalCarousel = ({ className, items }) => {
  return (
    <Carousel className={clsx(className, classes.promotion)} controls={true} indicators={false}>
      {items.map(({ title, description, img, video, cta }) => (
        <Carousel.Item>
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
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

PromotionalCarousel.defaultProps = {
  title: "",
  items: [],
};

PromotionalCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      video: PropTypes.string,
      cta: CTA.propTypes,
    })
  ),
};
