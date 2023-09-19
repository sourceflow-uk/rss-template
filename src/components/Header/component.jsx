import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { Button, Col, Row } from "react-bootstrap";

export const Header = ({ className, title, img, description, cta, video }) => {
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
      {video && (
        <a href={video}>
          <svg width="30" height="31" viewBox="0 0 30 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.875 19.5136V10.5536C11.8752 10.4415 11.9055 10.3316 11.9628 10.2352C12.0201 10.1388 12.1023 10.0597 12.2007 10.006C12.2991 9.95232 12.4102 9.9261 12.5222 9.93008C12.6342 9.93407 12.7431 9.96811 12.8375 10.0286L19.8075 14.5074C19.8958 14.5639 19.9684 14.6418 20.0187 14.7337C20.069 14.8257 20.0953 14.9288 20.0953 15.0336C20.0953 15.1385 20.069 15.2416 20.0187 15.3336C19.9684 15.4255 19.8958 15.5034 19.8075 15.5599L12.8375 20.0399C12.7431 20.1004 12.6342 20.1345 12.5222 20.1385C12.4102 20.1424 12.2991 20.1162 12.2007 20.0625C12.1023 20.0089 12.0201 19.9297 11.9628 19.8333C11.9055 19.737 11.8752 19.627 11.875 19.5149V19.5136Z" />
            <path d="M1.25 15.0332C1.25 7.43945 7.40625 1.2832 15 1.2832C22.5938 1.2832 28.75 7.43945 28.75 15.0332C28.75 22.627 22.5938 28.7832 15 28.7832C7.40625 28.7832 1.25 22.627 1.25 15.0332ZM15 3.1582C11.8506 3.1582 8.8301 4.40932 6.60311 6.63631C4.37611 8.8633 3.125 11.8838 3.125 15.0332C3.125 18.1826 4.37611 21.2031 6.60311 23.4301C8.8301 25.6571 11.8506 26.9082 15 26.9082C18.1494 26.9082 21.1699 25.6571 23.3969 23.4301C25.6239 21.2031 26.875 18.1826 26.875 15.0332C26.875 11.8838 25.6239 8.8633 23.3969 6.63631C21.1699 4.40932 18.1494 3.1582 15 3.1582Z" />
          </svg>
        </a>
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "",
  img: "",
  description: "",
  cta: null,
  video: null,
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
  video: PropTypes.string,
};
