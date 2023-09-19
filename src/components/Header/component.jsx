import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Button, Col, Row } from "react-bootstrap";

export const Header = ({ className, title, img, description, cta }) => {
  return (
    <div className={clsx(className, classes.header, "p-5")} style={{ backgroundImage: `url(${img}` }}>
      <Row className="h-100">
        <Col xs={5} className="d-flex flex-column justify-content-center h-100">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {cta && (
            <div>
              <Button variant="dark" href={cta.href}>
                {cta.label}
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

Header.defaultProps = {
  title: "",
  img: "",
  description: "",
  cta: null,
};

Header.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
