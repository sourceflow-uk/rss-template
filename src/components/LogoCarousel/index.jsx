import { Carousel, Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import classes from "./styles.module.scss";
import { LogoCard } from "@/ui";

export default function LogoCarousel({ className, title, items, visibleCount }) {
  return (
    <div className={clsx(className, classes.logos)}>
      <Container className="mw-xxl">
        {title && <h2 className="mb-5">{title}</h2>}
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
                  <Col key={k} className="py-3">
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
}

LogoCarousel.defaultProps = {
  className: "py-5",
  items: [],
  visibleCount: 5,
};

LogoCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  visibleCount: PropTypes.number,
};
