import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Carousel, Container } from "react-bootstrap";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import { PromotionalCarouselItem } from "@/ui";

export default function PromotionalCarousel({ className, items }) {
  return (
    <div className={clsx(className, classes.promotional)}>
      <Container className="mw-xxl">
        <Carousel
          className={clsx(className, classes.promotional__carousel)}
          controls={true}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
          indicators={false}
        >
          {items.map(({ title, description, img, video_embed_url, cta }, k) => (
            <Carousel.Item key={k}>
              <PromotionalCarouselItem
                title={title}
                description={description}
                img={img}
                video_embed_url={video_embed_url}
                cta={cta}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

PromotionalCarousel.defaultProps = {
  className: "py-5",
  items: [],
};

PromotionalCarousel.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      cta: PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        href: PropTypes.string,
        variant: PropTypes.string,
      }),
      video_embed_url: PropTypes.string,
    })
  ),
};
