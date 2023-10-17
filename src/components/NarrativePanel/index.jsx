import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { CTA, Description, Title, VideoModal } from "@/ui";
import { getYoutubeIdFromUrl } from "@/functions/getYoutubeIdFromUrl";
import { useMemo } from "react";

export default function NarrativePanel({ className, title, description, img, cta, video_embed_url, reverse }) {
  const image = useMemo(() => {
    if (img) {
      return img;
    }

    return video_embed_url ? `//i3.ytimg.com/vi/${getYoutubeIdFromUrl(video_embed_url)}/hqdefault.jpg` : null;
  }, [img, video_embed_url]);

  return (
    <div className={clsx(className, classes.panel)}>
      <Container className="mw-xxl">
        <Row className={clsx("flex-column-reverse", { "flex-md-row-reverse": reverse, "flex-md-row": !reverse })}>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <div className="ms-md-5">
              <Title title={title} className="mb-3" />
              <Description description={description} />
              {cta && <CTA className="mt-4" label={cta.label} href={cta.href} variant={cta.variant} />}
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            {image && (
              <figure className="my-4 my-md-0 position-relative">
                <SourceFlowImage className="mw-100" src={image} size="540x291" alt={title} />
                {video_embed_url && (
                  <VideoModal video_embed_url={video_embed_url}>
                    <Play width={100} height={100} />
                  </VideoModal>
                )}
              </figure>
            )}
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
  video_embed_url: null,
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
  video_embed_url: PropTypes.string,
  reverse: PropTypes.bool,
};
