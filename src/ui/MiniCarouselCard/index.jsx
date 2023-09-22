import clsx from "classnames";
import { Button, Col, Row } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const MiniCarouselCard = ({ className, title, description, cta, img }) => {
  return (
    <div className={clsx(className, classes.card)}>
      <Row className="m-0">
        <Col xs={5} className="px-5 d-flex flex-column justify-content-center">
          <h2 className="mb-3">{title}</h2>
          <p>{description}</p>
          {cta && (
            <div>
              <Button variant="dark" href={cta.href}>
                {cta.label}
              </Button>
            </div>
          )}
        </Col>
        <Col xs={7} className="p-0">
          <img src={img} alt="" />
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
  cta: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
