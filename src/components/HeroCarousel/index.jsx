import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Carousel } from "react-bootstrap";
import { HeroCarouselCard } from "@/ui/HeroCarouselCard";

export const HeroCarousel = ({ className, items, controls }) => {
  return (
    <Carousel className={clsx(className, classes.hero)} controls={controls} indicators={false}>
      {items.map(({ title, description, img, video_embed_url }, k) => (
        <Carousel.Item key={k}>
          <HeroCarouselCard title={title} description={description} img={img} video_embed_url={video_embed_url} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

HeroCarousel.defaultProps = {
  title: "",
  items: [],
  controls: true,
};

HeroCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      video_embed_url: PropTypes.string,
    })
  ),
  controls: PropTypes.bool,
};
