import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { CaseStudyCard } from "@/ui";
import { casestudyHelper } from "@/helpers/casestudyHelper";
import { getRoute } from "@/getters/getRoute";

export default function CaseStudyFeed({ className }) {
  const items = casestudyHelper.fetch();

  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
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

CaseStudyFeed.defaultProps = {
  className: "py-5",
};

CaseStudyFeed.propTypes = {
  className: PropTypes.string,
};
