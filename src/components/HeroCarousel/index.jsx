import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Carousel, Col, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import { VideoModal } from "@/ui/VideoModal";

export const HeroCarousel = ({ className, items, controls }) => {
  return (
    <Carousel className={clsx(className, classes.hero)} controls={controls} indicators={false}>
      {items.map(({ title, description, img, video_embed_url }) => (
        <Carousel.Item className="p-5" style={{ backgroundImage: `url(${img}` }}>
          <Row className="h-100">
            <Col xs={5} className="d-flex flex-column justify-content-center h-100">
              <h1>{title}</h1>
              {description && <p>{description}</p>}
            </Col>
          </Row>
          {video_embed_url && (
            <VideoModal video_embed_url={video_embed_url}>
              <Play width={30} height={31} />
            </VideoModal>
          )}
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
