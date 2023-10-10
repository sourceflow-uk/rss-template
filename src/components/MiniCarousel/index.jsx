import clsx from "classnames";
import PropTypes from "prop-types";
import { Carousel, Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import { MiniCarouselCard } from "@/ui";

export default function MiniCarousel({ className, items }) {
  return (
    <div className={clsx(className, classes.mini)}>
      <Container>
        <Carousel
          className={classes.mini__carousel}
          controls={true}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {items.map(({ title, description, img, cta }, k) => (
            <Carousel.Item key={k}>
              <MiniCarouselCard title={title} description={description} img={img} cta={cta} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

MiniCarousel.defaultProps = {
  className: "py-5 text-white",
  items: [],
};

MiniCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
      cta: PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        variant: PropTypes.string,
      }),
    })
  ),
};
