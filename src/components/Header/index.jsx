import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Col, Row } from "react-bootstrap";
import Play from "@/assets/Play.svg";
import { CTA } from "@/ui/CTA";
import { VideoModal } from "@/ui/VideoModal";

export const Header = ({ className, title, img, description, cta, video_embed_url }) => {
  return (
    <div className={clsx(className, classes.header)}>
      <img className={classes.header__img} src={img} alt="" />
      <div className={clsx(classes.header__body, "p-5")}>
        <Row className="h-100">
          <Col xs={5} className="d-flex flex-column justify-content-center h-100">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            {cta && <CTA label={cta.label} href={cta.href} variant={cta.variant} />}
          </Col>
        </Row>
        {video_embed_url && (
          <VideoModal video_embed_url={video_embed_url}>
            <Play width={30} height={31} />
          </VideoModal>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "",
  img: "",
  description: "",
  cta: null,
  video_embed_url: null,
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.shape(CTA.propTypes),
  video_embed_url: PropTypes.string,
};
