import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { DynamicHtml, DynamicText } from "@/ui";

export default function BrandPositioning({ className, title, description }) {
  return (
    <div className={className}>
      <Container className="text-center py-5 mw-md">
        <DynamicText path={`_component.${this}.title`} tag="h2">
          {title}
        </DynamicText>
        <DynamicHtml path={`_component.${this}.description`}>
          <p>{description}</p>
        </DynamicHtml>
      </Container>
    </div>
  );
}

BrandPositioning.defaultProps = {
  className: "py-5",
  title: generateTitle(),
  description: generateDescription(),
};

BrandPositioning.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
