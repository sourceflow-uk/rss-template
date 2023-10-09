import classes from "./styles.module.scss";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import clsx from "classnames";

export const VideoModal = ({ video_embed_url, children, ...props }) => {
  const [show, setShow] = useState(false);

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
            src={video_embed_url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
};

export default VideoModal;
