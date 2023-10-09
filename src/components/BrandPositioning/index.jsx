import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export const BrandPositioning = ({ className, title, description }) => {
  return (
    <div className={className}>
      <Container className="text-center py-5 mw-md">
        <h2>{title}</h2>
        <p>{description}</p>
      </Container>
    </div>
  );
};

BrandPositioning.defaultProps = {
  className: "py-5",
  title: "",
  description: "",
};

BrandPositioning.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default BrandPositioning;
