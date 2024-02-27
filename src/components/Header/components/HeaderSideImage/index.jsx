import { Col, Container, Row } from "react-bootstrap";
import { BackLink, CTA, Description, Image, Title } from "@/ui";
import clsx from "classnames";
import classes from "./styles.module.scss";

export default function HeaderSideImage({ className, containerClassName, img, back, title, description, cta }) {
  return (
    <div className={clsx(className, classes.header)}>
      <Container fluid className={containerClassName}>
        <Row>
          <Col xs={12} md={6} className={clsx(classes.header__content, "py-5")}>
            <BackLink back={back} />
            <Title className="mb-0" title={title} tag="h1" />
            <Description className="mt-4" description={description} />
            {cta && <CTA className="mt-4" label={cta.label} href={cta.href} variant={cta.variant} />}
          </Col>
          <Col xs={12} md={6} className="px-0">
            <Image img={img} size="860x" alt="Header image" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

HeaderSideImage.defaultProps = {
  containerClassName: "mw-xxl",
};
