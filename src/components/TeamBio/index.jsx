import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import Email from "@/assets/Email.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Phone from "@/assets/Phone.svg";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Image } from "@/ui";

export default function TeamBio({
  className,
  name,
  role,
  email,
  linkedIn,
  phone,
  qualification,
  photo,
  description,
  reverse,
}) {
  return (
    <div className={clsx(className, classes.bio)}>
      <Container>
        <Row className={clsx("flex-column", { "flex-md-row": !reverse, "flex-md-row-reverse": reverse })}>
          <Col xs={12} md={4}>
            <figure>
              <Image img={photo} size="291x291" alt={name} />
            </figure>
          </Col>
          <Col xs={12} md={8}>
            <h3 className="mb-2">{name}</h3>
            <dl className="mb-4">
              <dt className="visually-hidden">Role</dt>
              <dd className="fw-semibold">{role}</dd>
            </dl>
            <div className="mb-3">
              {qualification && (
                <dl className="mb-2">
                  <dt className="visually-hidden">Qualification</dt>
                  <dd>{qualification}</dd>
                </dl>
              )}
              {email && (
                <dl className="mb-2">
                  <dt>
                    <Email width={25} height={25} />
                    <span className="visually-hidden">Email</span>
                  </dt>
                  <dd className={classes.bio__email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </dd>
                </dl>
              )}
              {linkedIn && (
                <dl className="mb-2">
                  <dt>
                    <LinkedIn width={25} height={25} />
                    <span className="visually-hidden">LinkedIn</span>
                  </dt>
                  <dd>
                    <a href={linkedIn}>LinkedIn Profile</a>
                  </dd>
                </dl>
              )}
              {phone && (
                <dl className="mb-2">
                  <dt>
                    <Phone width={25} height={25} />
                    <span className="visually-hidden">Phone</span>
                  </dt>
                  <dd>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </dd>
                </dl>
              )}
            </div>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

TeamBio.defaultProps = {
  className: "py-4 py-md-5",
  name: "",
  role: "",
  email: "",
  linkedIn: "",
  phone: "",
  qualification: "",
  photo: "",
  description: "",
  reverse: false,
};

TeamBio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  phone: PropTypes.string,
  qualification: PropTypes.string,
  photo: PropTypes.string,
  description: PropTypes.string,
  reverse: PropTypes.bool,
};
