import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Col, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import { CTA } from "@/ui/CTA";

export const Header = ({ className, title, img, description, cta, video }) => {
  return (
    <div className={clsx(className, classes.header, "p-5")} style={{ backgroundImage: `url(${img}` }}>
      <Row className="h-100">
        <Col xs={5} className="d-flex flex-column justify-content-center h-100">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {cta && <CTA label={cta.label} href={cta.href} variant={cta.variant} />}
        </Col>
      </Row>
      {video && (
        <a href={video}>
          <Play />
        </a>
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "",
  img: "",
  description: "",
  cta: null,
  video: null,
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.shape(CTA.propTypes),
  video: PropTypes.string,
};
