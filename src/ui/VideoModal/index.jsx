import classes from "./styles.module.scss";
import { Modal } from "react-bootstrap";
import { Video } from "@/ui";
import { useState } from "react";
import clsx from "classnames";
import PropTypes from "prop-types";

export default function VideoModal({ video_embed_url, children, ...props }) {
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
        <Video video_embed_url={video_embed_url} />
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
