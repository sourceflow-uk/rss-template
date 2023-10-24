import clsx from "classnames";
import PropTypes from "prop-types";
import { Carousel, Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import { MiniCarouselCard, Title } from "@/ui";

export default function MiniCarousel({ className, title, items }) {
  return (
    <div className={clsx(className, classes.mini)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Carousel
          className={classes.mini__carousel}
          controls={true}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {items.map(({ title, description, image, link }, k) => (
            <Carousel.Item key={k}>
              <MiniCarouselCard
                title={title}
                description={description}
                img={image}
                cta={{ label: "Find out more", href: link, variant: "secondary" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

MiniCarousel.defaultProps = {
  className: "py-4 py-md-5 text-white",
  title: null,
  items: [],
};

MiniCarousel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
};
