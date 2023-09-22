import { Carousel, Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import { chunk } from "lodash";
import { LogoCard } from "@/ui/LogoCard";
import PropTypes from "prop-types";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import classes from "./styles.module.scss";

export const LogoCarousel = ({ className, items, visibleCount }) => {
  return (
    <div className={clsx(className, classes.logos)}>
      <Container className="mw-xxl">
        <Carousel
          className={classes.logos__carousel}
          controls={true}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(items, visibleCount).map((items, k) => (
            <Carousel.Item key={k}>
              <Row>
                {items.map(({ logo, name, href }, k) => (
                  <Col key={k}>
                    <LogoCard logo={logo} name={name} href={href} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

LogoCarousel.defaultProps = {
  className: "",
  items: [],
  visibleCount: 5,
};

LogoCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(LogoCard.propTypes)),
  visibleCount: PropTypes.number,
};
