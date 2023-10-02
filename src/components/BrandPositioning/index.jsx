import { Container } from "react-bootstrap";

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
