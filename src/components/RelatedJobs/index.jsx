import clsx from "classnames";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { DynamicText, RelatedJobCard } from "@/ui";

export default function RelatedJobs({ className, title, items }) {
  return (
    <Card className={clsx(className)}>
      <Card.Header>
        <DynamicText path={`_component.${this}.title`} tag="h3">
          {title}
        </DynamicText>
      </Card.Header>
      <Card.Body>
        {items.map(({ title, sectors, location, salary_package, role_type, published_at, href }, k) => (
          <RelatedJobCard
            key={k}
            className="h-100"
            title={title}
            sectors={sectors}
            location={location}
            salary_package={salary_package}
            role_type={role_type}
            published_at={published_at}
            href={href}
          />
        ))}
      </Card.Body>
    </Card>
  );
}

RelatedJobs.defaultProps = {
  className: "",
  title: "Other jobs you might like",
  items: [],
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
};
