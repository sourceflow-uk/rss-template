import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { Description, Image, Title } from "@/ui";
import classes from "./styles.module.scss";

export default function Hero({ className, title, img1, img2, subtitle }) {
  return (
    <div className={clsx(className, classes.hero)}>
      <figure className={classes.hero__img}>
        <Row>
          <Col xs={12} md={6} className="px-0">
            <Image img={img1} size="960x800" alt="" />
          </Col>
          <Col xs={12} md={6} className="px-0 d-none d-md-block">
            <Image img={img2} size="960x800" alt="" />
          </Col>
        </Row>
      </figure>
      <div className={classes.hero__content}>
        <Container>
          <Title tag="h1" title={title} />
          <Description description={subtitle} tag="h2" />
        </Container>
      </div>
    </div>
  );
}

Hero.defaultProps = {
  className: "",
};

Hero.propTypes = {
  className: PropTypes.string,
};
