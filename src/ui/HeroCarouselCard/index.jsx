import { Col, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { lazy } from "react";

const VideoModal = lazy(() => import("@/ui/VideoModal"));

export const HeroCarouselCard = ({ className, title, description, img, video_embed_url }) => {
  return (
    <div className={clsx(className, classes.card)}>
      <SourceFlowImage className={classes.card__img} src={img} size="1440x300" alt={title} />
      <div className={clsx(classes.card__body, "p-5")}>
        <Row className="h-100">
          <Col xs={5} className="d-flex flex-column justify-content-center h-100">
            <h1>{trimText(title, 50)}</h1>
            {description && <p>{trimText(description, 180)}</p>}
          </Col>
        </Row>
      </div>
      {video_embed_url && (
        <VideoModal className={classes.card__video} video_embed_url={video_embed_url}>
          <Play width={30} height={31} />
        </VideoModal>
      )}
    </div>
  );
};

export default HeroCarouselCard;
