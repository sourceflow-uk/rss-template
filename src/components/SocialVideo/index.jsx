import clsx from "classnames";
import { Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";
import { VideoModal } from "@/ui/VideoModal";
import PropTypes from "prop-types";

export const SocialVideo = ({ className, video_embed_url, img }) => {
  return (
    <div className={clsx(className, classes.video)}>
      <Container>
        <div className="ratio ratio-21x9 overflow-hidden">
          <VideoModal
            video_embed_url={video_embed_url}
            className={classes.video__button}
            style={{ backgroundImage: `url(${img})` }}
          >
            <Play width={110} height={110} />
          </VideoModal>
        </div>
      </Container>
    </div>
  );
};

SocialVideo.defaultProps = {
  className: "",
  video_embed_url: "",
  img: "",
};

SocialVideo.propTypes = {
  className: PropTypes.string,
  video_embed_url: PropTypes.string,
  img: PropTypes.string,
};
