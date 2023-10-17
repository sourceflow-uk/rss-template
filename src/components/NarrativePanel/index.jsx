import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { CTA, Description, Title, VideoModal } from "@/ui";
import { getYoutubeIdFromUrl } from "@/functions/getYoutubeIdFromUrl";

export default function NarrativePanel({ className, title, description, img, cta, video_embed_url, reverse }) {
  if (!video_embed_url) {
    return null;
  }

  const youtube_id = getYoutubeIdFromUrl(video_embed_url);

  return (
    <div className={clsx(className, classes.panel)}>
      <Container className="mw-xxl">
        <Row className={clsx("flex-column-reverse", { "flex-md-row-reverse": reverse, "flex-md-row": !reverse })}>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <div>
              <Title title={title} className="mb-3" />
              <Description description={description} />
              {cta && <CTA label={cta.label} href={cta.href} variant={cta.variant} />}
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <figure className="my-4 my-md-0 position-relative">
              <SourceFlowImage
                className="mw-100"
                src={img ?? `//i3.ytimg.com/vi/${youtube_id}/hqdefault.jpg`}
                size="540x291"
                alt={title}
              />
              {video_embed_url && (
                <VideoModal video_embed_url={video_embed_url}>
                  <Play width={100} height={100} />
                </VideoModal>
              )}
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

NarrativePanel.defaultProps = {
  className: "py-5",
  title: null,
  description: null,
  img: null,
  cta: null,
  video: null,
  reverse: false,
};

NarrativePanel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  cta: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  }),
  video: PropTypes.string,
  reverse: PropTypes.bool,
};
