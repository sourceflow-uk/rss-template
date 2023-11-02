import { Carousel, Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import classes from "./styles.module.scss";
import { LogoCard, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { employer_page_helper } from "@/helpers/employer_page_helper";

export default function FeaturedEmployersCarousel({ className, title, visibleCount: desktopVisibleCount, button }) {
  const items = employer_page_helper.fetch({ featured: true, filter: (i) => i.parent.id === null });
  const [visibleCount, setVisibleCount] = useState(1);
  const xl = useMediaQuery("only screen and (min-width: 1200px)");
  const lg = useMediaQuery("only screen and (min-width: 992px)");
  const md = useMediaQuery("only screen and (min-width: 768px)");

  useEffect(() => {
    setVisibleCount(xl ? desktopVisibleCount : lg ? 3 : md ? 2 : 1);
  }, [xl, lg, md, desktopVisibleCount]);

  return (
    <div className={clsx(className, classes.employers)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Carousel
          className={classes.employers__carousel}
          controls={true}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(items, visibleCount).map((items, k) => (
            <Carousel.Item key={k}>
              <Row>
                {items.map(({ card_image, name, url_slug }, k) => (
                  <Col key={k} className="py-3">
                    <LogoCard
                      logo={card_image}
                      name={name}
                      href={getRoute("employerPage", { url_slugs: [url_slug] })}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={classes.employers__footer}>
          {button && (
            <a className={classes.employers__link} href={button.href}>
              {button.label}
              <ChevronRight width="7" height="13" className="ms-2" />
            </a>
          )}
        </div>
      </Container>
    </div>
  );
}

FeaturedEmployersCarousel.defaultProps = {
  className: "py-4 py-md-5",
  title: null,
  visibleCount: 5,
  button: {
    label: "View all our Featured Employers",
    href: getRoute("employers"),
  },
};

FeaturedEmployersCarousel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  visibleCount: PropTypes.number,
};
