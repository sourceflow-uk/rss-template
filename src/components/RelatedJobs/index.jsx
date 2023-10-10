import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { DynamicText, RelatedJobCard } from "@/ui";

export default function RelatedJobs({ className, title, items, direction }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-lg">
        <DynamicText path={`_component.${this}.title`} tag="h2">
          {title}
        </DynamicText>
        <Row>
          {items.map(({ title, sectors, location, salary_package, role_type, published_at, href }, k) => (
            <Col key={k} className="mb-3" xs={12} md={{ row: 3, column: 12 }[direction]}>
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
}

RelatedJobs.defaultProps = {
  className: "py-5",
  title: "Related Jobs",
  items: [],
  direction: "row",
};

RelatedJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      sectors: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
        })
      ),
      location: PropTypes.string,
      salary_package: PropTypes.string,
      role_type: PropTypes.string,
      published_at: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  direction: PropTypes.oneOf(["row", "column"]),
};
