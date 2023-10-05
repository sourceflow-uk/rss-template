import clsx from "classnames";
import { Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";
import { VideoModal } from "@/ui/VideoModal";
import PropTypes from "prop-types";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export const SocialVideo = ({ className, video_embed_url, img }) => {
  return (
    <div className={clsx(className, classes.video)}>
      <Container>
        <div className="ratio ratio-21x9 overflow-hidden">
          <SourceFlowImage className={classes.video__img} src={img} size="1440x300" alt="Cover image" />
          <div className={classes.video__button}>
            <VideoModal video_embed_url={video_embed_url}>
              <Play width={110} height={110} />
            </VideoModal>
          </div>
        </div>
      </Container>
    </div>
  );
};

SocialVideo.defaultProps = {
  className: "bg-light py-5",
  video_embed_url: "",
  img: "",
};

SocialVideo.propTypes = {
  className: PropTypes.string,
  video_embed_url: PropTypes.string,
  img: PropTypes.string,
};
