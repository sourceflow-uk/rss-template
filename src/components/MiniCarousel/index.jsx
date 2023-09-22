import clsx from "classnames";
import PropTypes from "prop-types";
import { Carousel, Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import { MiniCarouselCard } from "@/ui/MiniCarouselCard";

export const MiniCarousel = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.mini)}>
      <Container>
        <Carousel className={classes.mini__carousel}>
          {items.map(({ title, description, img, cta }, k) => (
            <Carousel.Item key={k}>
              <MiniCarouselCard title={title} description={description} img={img} cta={cta} />
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
