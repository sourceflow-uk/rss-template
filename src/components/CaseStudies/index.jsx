import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { CaseStudyCard, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";

export default function CaseStudies({ className, title, items }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
        <Title title={title} />
        <Row>
          {items.map(({ title, cover_image, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <CaseStudyCard title={title} img={cover_image} href={getRoute("caseStudy", { url_slug })} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

CaseStudies.defaultProps = {
  className: "py-5",
  title: null,
  items: [],
};

CaseStudies.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
