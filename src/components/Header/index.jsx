import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import { CTA, Description, DynamicText, Image, Title, VideoModal } from "@/ui";
import ArrowLeft from "@/assets/ArrowLeft.svg";

export default function Header({ className, title, img, contain, description, cta, video_embed_url, back, containerClassName = "mw-xxl" }) {
  return (
    <div className={clsx(className, classes.header, { "has-img": img, contain })}>
      <Image className={classes.header__img} img={img} size="1920x370" alt="Header image" />
      <div className={clsx(classes.header__body, "py-3 p-md-5")}>
        <Container className={containerClassName}>
          <Row>
            <Col xs={12} md={6}>
              {back && (
                <a className={clsx(classes.header__back, "mb-3")} href={back.href}>
                  <ArrowLeft />
                  <DynamicText path={back.path}>{back.placeholder}</DynamicText>
                </a>
              )}
              <Title className="mb-0" title={title} tag="h1" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
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
  contain: false,
  description: null,
  cta: null,
  video_embed_url: null,
  back: null,
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  img: PropTypes.string,
  description: PropTypes.any,
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
