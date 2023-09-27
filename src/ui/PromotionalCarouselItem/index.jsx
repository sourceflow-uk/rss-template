import { Col, Row } from "react-bootstrap";
import { CTA } from "@/ui/CTA";
import { VideoModal } from "@/ui/VideoModal";
import Play from "@/assets/Play.svg";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";

export const PromotionalCarouselItem = ({ className, title, description, img, video_embed_url, cta }) => {
  return (
    <div className={clsx(className, classes.item)}>
      <Row>
        <Col xs={12} md={6}>
          <figure className="my-4 my-md-0">
            <img className="mw-100" src={img} alt="" />
            {video_embed_url && (
              <VideoModal video_embed_url={video_embed_url}>
                <Play width={30} height={31} />
              </VideoModal>
            )}
          </figure>
        </Col>
        <Col xs={12} md={6}>
          <h3 className="h2">{title}</h3>
          <p>{description}</p>
          <CTA href={cta.href} label={cta.label} variant={cta.variant} />
        </Col>
      </Row>
    </div>
  );
};

PromotionalCarouselItem.defaultProps = {
  title: "",
  img: "",
  description: "",
  cta: null,
  video_embed_url: "",
};

PromotionalCarouselItem.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  cta: CTA.propTypes,
  video_embed_url: PropTypes.string,
};
