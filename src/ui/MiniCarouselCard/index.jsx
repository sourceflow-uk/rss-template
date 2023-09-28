import clsx from "classnames";
import { Col, Row } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { CTA } from "@/ui/CTA";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export const MiniCarouselCard = ({ className, title, description, cta, img }) => {
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
};

MiniCarouselCard.defaultProps = {
  title: "",
  description: "",
  img: "",
  cta: null,
};

MiniCarouselCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  cta: PropTypes.shape(CTA.propTypes),
};
