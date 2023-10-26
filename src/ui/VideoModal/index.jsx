import classes from "./styles.module.scss";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import clsx from "classnames";
import PropTypes from "prop-types";
import { useYoutubeVideoEmbedUrl } from "@/hooks/useYoutubeVideoEmbedUrl";

export default function VideoModal({ video_embed_url, children, ...props }) {
  const [show, setShow] = useState(false);
  const video = useYoutubeVideoEmbedUrl(video_embed_url);

  return (
    <>
      {typeof children === "function" ? (
        <div {...props} className={clsx(props.className, classes.video__trigger)}>
          {children({ show, setShow })}
        </div>
      ) : (
        <div {...props} className={clsx(props.className, classes.video__trigger)} onClick={() => setShow(true)}>
          {children}
        </div>
      )}
      <Modal show={show} size="xl" className={classes.video__modal} onHide={() => setShow(false)}>
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
      </Modal>
    </>
  );
}

VideoModal.defaultProps = {
  video_embed_url: "",
};

VideoModal.propTypes = {
  video_embed_url: PropTypes.string,
};
