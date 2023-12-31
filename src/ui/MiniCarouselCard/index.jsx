import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { trimText } from "@/functions/trimText";
import { CTA } from "@/ui";

export default function MiniCarouselCard({ className, title, description, cta, img }) {
  return (
    <div className={clsx(className, classes.card)}>
      <Row className="m-0">
        <Col xs={5} className="px-5 d-flex flex-column justify-content-center">
          <h2 className="mb-3">{trimText(title, 50)}</h2>
          <p>{trimText(description, 180)}</p>
          {cta && <CTA label={cta.label} href={cta.href} variant={cta.variant} />}
        </Col>
        <Col xs={7} className="p-0">
          <SourceFlowImage src={img} size="703x352" alt={title} />
        </Col>
      </Row>
    </div>
  );
}

MiniCarouselCard.defaultProps = {
  className: "",
  title: "",
  description: "",
  img: "",
  cta: null,
};

MiniCarouselCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  cta: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  }),
};
