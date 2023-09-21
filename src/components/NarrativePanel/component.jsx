import clsx from "classnames";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";

export const NarrativePanel = ({ className, title, description, img, cta, video, reverse }) => {
  return (
    <div className={clsx(className, classes.panel)}>
      <Container>
        <Row className={clsx("flex-column-reverse", { "flex-md-row-reverse": reverse, "flex-md-row": !reverse })}>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <div>
              <h2 className="mb-3">{title}</h2>
              <p>{description}</p>
              {cta && (
                <div>
                  <Button variant="dark" href={cta.href}>
                    {cta.label}
                  </Button>
                </div>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <figure className="my-4 my-md-0 position-relative">
              <img className="mw-100" src={img} alt="" />
              {video && (
                <a href={video}>
                  <Play />
                </a>
              )}
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

NarrativePanel.defaultProps = {
  className: "",
  title: "",
  description: "",
  img: "",
  cta: {
    label: "",
    href: "#",
  },
  video: null,
  reverse: false,
};

NarrativePanel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  cta: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  video: PropTypes.string,
  reverse: PropTypes.bool,
};
