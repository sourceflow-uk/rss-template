import clsx from "classnames";
import { Container } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Video } from "@/ui";

export default function SocialVideo({ className, video_embed_url }) {
  return (
    <div className={clsx(className, classes.video)}>
      <Container>
        <Video video_embed_url={video_embed_url} />
      </Container>
    </div>
  );
}

SocialVideo.defaultProps = {
  className: "bg-light py-5",
  video_embed_url: null,
  img: null,
};

SocialVideo.propTypes = {
  className: PropTypes.string,
  video_embed_url: PropTypes.string,
  img: PropTypes.string,
};
