import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Tag } from "@/ui";

export default function Recruiter({
  className,
  name,
  title,
  email,
  sectors,
  location,
  linkedIn,
  phone,
  profile_pic,
  description,
}) {
  return (
    <div className={clsx(className, classes.recruiter)}>
      <Container className="mw-xl">
        <Row>
          <Col xs={12}>
            <SourceFlowImage className="mb-4" src={profile_pic} size="167x167" alt={name} />
            <h2>{name}</h2>
          </Col>
          <Col xs={12} md={8}>
            <div>
              <dl className="mb-1">
                <dt>Title:</dt>
                <dd>{title}</dd>
              </dl>
              <dl className="mb-1">
                <dt>Location:</dt>
                <dd>{location}</dd>
              </dl>
              <dl className="mb-1">
                <dt>Sectors:</dt>
                {sectors.map(({ label, href }, k) => (
                  <dd key={k}>
                    <Tag label={label} href={href} />
                  </dd>
                ))}
              </dl>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <dl className="mb-1">
              <dt className="visually-hidden">Email</dt>
              <dd className={classes.recruiter__email}>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </dl>
            <dl className="mb-1">
              <dt className="visually-hidden">LinkedIn</dt>
              <dd>
                <a href={linkedIn}>LinkedIn Profile</a>
              </dd>
            </dl>
            <dl className="mb-1">
              <dt className="visually-hidden">Phone</dt>
              <dd>
                <a href={`tel:${phone}`}>{phone}</a>
              </dd>
            </dl>
          </Col>
          <Col xs={12}>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: description }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Recruiter.defaultProps = {
  className: "py-5",
  name: "",
  title: "",
  email: "",
  location: "",
  linkedIn: "",
  sectors: [],
  phone: "",
  profile_pic: "",
  description: "",
};

Recruiter.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  linkedIn: PropTypes.string,
  sectors: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  phone: PropTypes.string,
  profile_pic: PropTypes.string,
  description: PropTypes.string,
};
