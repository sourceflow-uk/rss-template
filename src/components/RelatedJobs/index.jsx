import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { RelatedJobCard } from "@/ui/RelatedJobCard";

export const RelatedJobs = ({ className, title, items }) => {
  return (
    <div className={clsx(className)}>
      <Container>
        <h2>{title}</h2>
        <Row>
          {items.map(({ title, sectors, location, salary_package, role_type, published_at, href }) => (
            <Col xs={12} md={3}>
              <RelatedJobCard
                className="h-100"
                title={title}
                sectors={sectors}
                location={location}
                salary_package={salary_package}
                role_type={role_type}
                published_at={published_at}
                href={href}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

RelatedJobs.defaultProps = {
  className: "",
  title: "Related Jobs",
  items: [],
};

RelatedJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(RelatedJobCard.propTypes),
};
