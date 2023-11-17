import { Col, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { trimText } from "@/functions/trimText";
import { CTA, Image, VideoModal } from "@/ui";

export default function PromotionalCarouselItem({ className, title, description, img, video_embed_url, cta }) {
  return (
    <div className={clsx(className, classes.item)}>
      <Row>
        <Col xs={12} md={6}>
          <figure className="my-4 my-md-0">
            <Image className="mw-100" img={img} size="540x291" alt={title} />
            {video_embed_url && (
              <VideoModal video_embed_url={video_embed_url}>
                <Play width={30} height={31} />
              </VideoModal>
            )}
          </figure>
        </Col>
        <Col xs={12} md={6}>
          <h3 className="h2">{trimText(title, 50)}</h3>
          <p>{trimText(description, 240)}</p>
          <CTA href={cta.href} label={cta.label} variant={cta.variant} />
        </Col>
      </Row>
    </div>
  );
}

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
  cta: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  }),
  video_embed_url: PropTypes.string,
};
