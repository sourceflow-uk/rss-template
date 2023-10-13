import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { CTA, Description, DynamicText, Title, VideoModal } from "@/ui";
import ArrowLeft from "@/assets/ArrowLeft.svg";

export default function Header({ className, title, img, description, cta, video_embed_url, back }) {
  return (
    <div className={clsx(className, classes.header, { "has-img": img })}>
      {img && <SourceFlowImage className={classes.header__img} src={img} size="1440x300" alt="Header image" />}
      <div className={clsx(classes.header__body, "p-5")}>
        <Container className="mw-xxl">
          <Row className="h-100">
            <Col xs={12} md={7} className="d-flex flex-column justify-content-center h-100">
              {back && (
                <a className={clsx(classes.header__back, "mb-3")} href={back.href}>
                  <ArrowLeft />
                  <DynamicText path={back.path}>{back.placeholder}</DynamicText>
                </a>
              )}
              <Title className="mb-0" title={title} tag="h1" />
              <Description className="mt-4" description={description} />
              {cta && <CTA className="mt-4" label={cta.label} href={cta.href} variant={cta.variant} />}
            </Col>
          </Row>
        </Container>
      </div>
      {video_embed_url && (
        <VideoModal className={classes.header__video} video_embed_url={video_embed_url}>
          <Play width={30} height={31} />
        </VideoModal>
      )}
    </div>
  );
}

Header.defaultProps = {
  title: null,
  img: null,
  description: null,
  cta: null,
  video_embed_url: null,
  back: null,
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.shape({
    path: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  img: PropTypes.string,
  description: PropTypes.shape({
    path: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  cta: PropTypes.shape({
    className: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
    variant: PropTypes.string,
  }),
  video_embed_url: PropTypes.string,
  back: PropTypes.shape({
    path: PropTypes.string,
    placeholder: PropTypes.string,
    href: PropTypes.string,
  }),
};
