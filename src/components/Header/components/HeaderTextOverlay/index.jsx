import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { BackLink, CTA, Description, Image, Title } from "@/ui";

export default function HeaderTextOverlay({ className, containerClassName, title, img, description, cta, back }) {
  return (
    <div className={clsx(className, classes.header, { "has-img": img })}>
      <Image className={classes.header__img} img={img} size="1920x" alt="Header image" />
      <div className={clsx(classes.header__body, "py-3 p-md-5")}>
        <Container className={containerClassName}>
          <Row>
            <Col xs={12} md={8}>
              <BackLink back={back} />
              <Title className="mb-0" title={title} tag="h1" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <Description className="mt-4" description={description} />
              {cta && <CTA className="mt-4" label={cta.label} href={cta.href} variant={cta.variant} />}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

HeaderTextOverlay.defaultProps = {
  className: "bg-light text-dark",
  containerClassName: "mw-xxl",
  title: null,
  img: null,
  contain: false,
  description: null,
  cta: null,
  back: null,
};

HeaderTextOverlay.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  img: PropTypes.string,
  description: PropTypes.any,
  cta: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  }),
  back: PropTypes.shape({
    path: PropTypes.string,
    placeholder: PropTypes.string,
    href: PropTypes.string,
  }),
};
