import { Carousel, Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import classes from "./styles.module.scss";
import { LogoCard, Title } from "@/ui";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

export default function LogoCarousel({ className, title, items, visibleCount: desktopVisibleCount }) {
  const [visibleCount, setVisibleCount] = useState(1);
  const xl = useMediaQuery("only screen and (min-width: 1200px)");
  const lg = useMediaQuery("only screen and (min-width: 992px)");
  const md = useMediaQuery("only screen and (min-width: 768px)");

  useEffect(() => {
    setVisibleCount(xl ? desktopVisibleCount : lg ? 3 : md ? 2 : 1);
  }, [xl, lg, md, desktopVisibleCount]);

  return (
    <div className={clsx(className, classes.logos)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Carousel
          className={classes.logos__carousel}
          controls={true}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(items, visibleCount).map((items, k) => (
            <Carousel.Item key={k}>
              <Row>
                {items.map(({ image, title, url }, k) => (
                  <Col key={k} className="py-3">
                    <LogoCard logo={image} name={title} href={url} />
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
  className: "py-4 py-md-5",
  title: null,
  visibleCount: 4,
};

LogoCarousel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  visibleCount: PropTypes.number,
};
