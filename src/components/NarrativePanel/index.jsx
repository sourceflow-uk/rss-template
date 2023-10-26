import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { CTA, Description, Title } from "@/ui";
import { useYoutubeVideoEmbedUrl } from "@/hooks/useYoutubeVideoEmbedUrl";

export default function NarrativePanel({ className, title, description, img, cta, video_embed_url, reverse }) {
  const video = useYoutubeVideoEmbedUrl(video_embed_url);

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
            {video ? (
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
            ) : img ? (
              <figure className="mb-4 mb-md-0 position-relative">
                <SourceFlowImage className="mw-100" src={img} size="540x291" alt={title} />
              </figure>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

NarrativePanel.defaultProps = {
  className: "py-4 py-md-5",
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
