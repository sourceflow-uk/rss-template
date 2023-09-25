import clsx from "classnames";
import { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";

export const SocialVideo = ({ className, embed_url, img }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={clsx(className, classes.video)}>
      <Container>
        <div className="ratio ratio-21x9 overflow-hidden">
          <div
            className={classes.video__button}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => setShow(true)}
          >
            <Play width={110} height={110} />
          </div>
        </div>
      </Container>
      <Modal show={show} size="xl" className={classes.video__modal} onHide={() => setShow(false)}>
        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src={embed_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </Modal>
    </div>
  );
};
