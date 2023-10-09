import clsx from "classnames";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { DynamicHtml } from "@/ui/DynamicHtml";
import { DynamicText } from "@/ui/DynamicText";
import { chunk } from "lodash/array";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import { FeaturedEmployerCard } from "@/ui/FeaturedEmployerCard";
import classes from "./styles.module.scss";

export const FeaturedEmployers = ({ className, title, description, items }) => {
  return (
    <div className={clsx(className, classes.featured)}>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <DynamicText path={`_component.${this}.title`} tag="h2">
              {title}
            </DynamicText>
            <DynamicHtml path={`_component.${this}.description`}>
              <p>{description}</p>
            </DynamicHtml>
          </Col>
          <Col xs={12} md={6}>
            <Carousel
              className={classes.featured__carousel}
              controls={true}
              prevIcon={<ChevronLeft width="14" height="25" />}
              nextIcon={<ChevronRight width="14" height="25" />}
            >
              {chunk(items, 6).map((items, k) => (
                <Carousel.Item key={k}>
                  <Row>
                    {items.map(({ title, img, href }, k) => (
                      <Col key={k} xs={6} md={4}>
                        <FeaturedEmployerCard className="mb-4" title={title} img={img} href={href} />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

FeaturedEmployers.defaultProps = {
  className: "py-5",
  title: "Featured Employers",
  description: "",
  items: [],
};

FeaturedEmployers.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape()),
};

export default FeaturedEmployers;
