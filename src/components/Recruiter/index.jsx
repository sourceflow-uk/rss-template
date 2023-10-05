import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Tag } from "@/ui/Tag";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export const Recruiter = ({
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
}) => {
  return (
    <div className={clsx(className, classes.recruiter)}>
      <Container>
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
};

Recruiter.defaultProps = {
  className: "",
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
  sectors: PropTypes.arrayOf(Tag.propTypes),
  phone: PropTypes.string,
  profile_pic: PropTypes.string,
  description: PropTypes.string,
};
