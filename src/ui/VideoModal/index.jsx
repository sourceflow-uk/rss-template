import classes from "./styles.module.scss";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import clsx from "classnames";
import PropTypes from "prop-types";
import { getYoutubeIdFromUrl } from "@/functions/getYoutubeIdFromUrl";

export default function VideoModal({ video_embed_url, children, ...props }) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState("");

  useEffect(() => {
    let [_, params] = video_embed_url.split("?");
    const youtube_id = getYoutubeIdFromUrl(video_embed_url);

    params = new URLSearchParams(params);
    params.set("controls", "0");
    params.set("autoplay", "1");

    setVideo(`https://www.youtube.com/embed/${youtube_id}?${params.toString()}`);
  }, [video_embed_url]);

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
            width="560"
            height="315"
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
