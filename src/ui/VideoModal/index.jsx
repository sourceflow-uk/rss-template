import classes from "@/components/SocialVideo/styles.module.scss";
import { Modal } from "react-bootstrap";
import { useState } from "react";

export const VideoModal = ({ video_embed_url, children, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {typeof children === "function" ? (
        <div {...props}>{children({ show, setShow })}</div>
      ) : (
        <div {...props} onClick={() => setShow(true)}>
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
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
};
