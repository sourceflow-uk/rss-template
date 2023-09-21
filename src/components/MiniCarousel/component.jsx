import clsx from "classnames";
import PropTypes from "prop-types";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import classes from "./styles.module.scss";

export const MiniCarousel = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.mini)}>
      <Container>
        <Carousel className={classes.mini__carousel}>
          {items.map(({ title, description, img, cta }, k) => (
            <Carousel.Item key={k}>
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
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

MiniCarousel.defaultProps = {
  className: "",
  items: [],
};

MiniCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
      cta: PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
      }),
    })
  ),
};
