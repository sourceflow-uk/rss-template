import { Col, Row } from "react-bootstrap";
import { VideoModal } from "@/ui/VideoModal";
import Play from "@/assets/Play.svg";
import clsx from "classnames";
import classes from "./styles.module.scss";

export const HeroCarouselCard = ({ className, title, description, img, video_embed_url }) => {
  return (
    <div className={clsx(className, classes.card)}>
      <img className={classes.card__img} src={img} alt="" />
      <div className={clsx(classes.card__body, "p-5")}>
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
      </div>
    </div>
  );
};
