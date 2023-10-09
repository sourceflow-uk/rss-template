import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import Play from "@/assets/Play.svg";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";
import { lazy } from "react";

const CTA = lazy(() => import("@/ui/CTA"));
const VideoModal = lazy(() => import("@/ui/VideoModal"));

export const NarrativePanel = ({ className, title, description, img, cta, video_embed_url, reverse }) => {
  return (
    <div className={clsx(className, classes.panel)}>
      <Container className="mw-xl">
        <Row className={clsx("flex-column-reverse", { "flex-md-row-reverse": reverse, "flex-md-row": !reverse })}>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <div>
              <h2 className="mb-3">{trimText(title, 50)}</h2>
              <p>{trimText(description, 180)}</p>
              {cta && <CTA label={cta.label} href={cta.href} variant={cta.variant} />}
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
            <figure className="my-4 my-md-0 position-relative">
              <SourceFlowImage className="mw-100" src={img} size="540x291" alt={title} />
              {video_embed_url && (
                <VideoModal video_embed_url={video_embed_url}>
                  <Play width={30} height={31} />
                </VideoModal>
              )}
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

NarrativePanel.defaultProps = {
  className: "py-5",
  title: "",
  description: "",
  img: "",
  cta: {
    label: "",
    href: "#",
  },
  video: null,
  reverse: false,
};

NarrativePanel.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  cta: PropTypes.shape(CTA.propTypes),
  video: PropTypes.string,
  reverse: PropTypes.bool,
};

export default NarrativePanel;
