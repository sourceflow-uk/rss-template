import clsx from "classnames";
import { Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { useYoutubeVideoEmbedUrl } from "@/hooks/useYoutubeVideoEmbedUrl";

export default function SocialVideo({ className, video_embed_url }) {
  const video = useYoutubeVideoEmbedUrl(video_embed_url);

  return (
    <div className={clsx(className, classes.video)}>
      <Container>
        <div className="ratio ratio-16x9">
          <iframe
            width="1920"
            height="1080"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Container>
    </div>
  );
}

SocialVideo.defaultProps = {
  className: "bg-light py-5",
  video_embed_url: "",
  img: null,
};

SocialVideo.propTypes = {
  className: PropTypes.string,
  video_embed_url: PropTypes.string,
  img: PropTypes.string,
};
