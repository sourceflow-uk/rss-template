import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Carousel, Container } from "react-bootstrap";
import { HeroCarouselCard } from "@/ui/HeroCarouselCard";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";

export const HeroCarousel = ({ className, items, controls }) => {
  return (
    <div className={clsx(className, classes.hero)}>
      <Container className="mw-xxl">
        <Carousel
          controls={controls}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {items.map(({ title, description, img, video_embed_url }, k) => (
            <Carousel.Item key={k}>
              <HeroCarouselCard title={title} description={description} img={img} video_embed_url={video_embed_url} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

HeroCarousel.defaultProps = {
  className: "py-5",
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
