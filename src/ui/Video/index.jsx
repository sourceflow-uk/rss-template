import PropTypes from "prop-types";
import clsx from "classnames";
import { useYoutubeVideoEmbedUrl } from "@/hooks/useYoutubeVideoEmbedUrl";

export default function Video({ className, video_embed_url }) {
  const video = useYoutubeVideoEmbedUrl(video_embed_url);

  if (!video) {
    return null;
  }

  return (
    <div className={clsx(className)}>
      <iframe
        width="1920"
        height="1080"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

Video.defaultProps = {
  className: "ratio ratio-16x9",
  video_embed_url: null,
};

Video.propTypes = {
  className: PropTypes.string,
  video_embed_url: PropTypes.string,
};
