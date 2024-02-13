import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { Description, Image, Title } from "@/ui";
import classes from "./styles.module.scss";
import { useEffect, useState } from "react";

export default function Hero({ className, title, img1, img2, subtitle }) {
  const [focus, setFocus] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFocus(focus === 1 ? 2 : 1);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [focus]);

  return (
    <div className={clsx(className, classes.hero)}>
      <figure className={classes.hero__img}>
        <Row>
          <Col xs={12} md={6} className={clsx("px-0", { focus: focus === 1 })}>
            <Image img={img1} size="960x800" alt="" />
          </Col>
          <Col xs={12} md={6} className={clsx("px-0", { focus: focus === 2 })}>
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
