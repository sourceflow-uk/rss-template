import { Carousel, Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import { chunk } from "lodash";
import PropTypes from "prop-types";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import classes from "./styles.module.scss";
import { LogoCard, Title } from "@/ui";
import { employer_helper } from "@/helpers/employer_helper";
import { getRoute } from "@/getters/getRoute";

export default function FeaturedEmployersCarousel({ className, title, visibleCount, button }) {
  const items = employer_helper.fetch({ featured: true });

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
                    <LogoCard logo={card_image} name={name} href={getRoute("employer", { url_slug })} />
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
  className: "py-5",
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
