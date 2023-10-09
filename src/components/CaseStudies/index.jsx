import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { CaseStudyCard } from "@/ui/CaseStudyCard";

export const CaseStudies = ({ className, items }) => {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
        <Row>
          {items.map(({ title, description, img, href }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <CaseStudyCard title={title} description={description} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

CaseStudies.defaultProps = {
  className: "py-5",
  items: [],
};

CaseStudies.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(CaseStudyCard.propTypes)),
};

export default CaseStudies;
