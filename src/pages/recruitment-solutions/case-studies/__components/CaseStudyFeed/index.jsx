import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { CaseStudyCard, Title } from "@/ui";
import { case_study_helper } from "@/helpers/case_study_helper";
import { getRoute } from "@/getters/getRoute";

export default function CaseStudyFeed({ className, title }) {
  const items = case_study_helper.fetch();

  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Row>
          {items.map(({ title, card_image, cover_image, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <CaseStudyCard title={title} img={card_image ?? cover_image} href={getRoute("caseStudy", { url_slug })} />
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
