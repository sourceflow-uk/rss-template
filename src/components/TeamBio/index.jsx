import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import Email from "@/assets/Email.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export const TeamBio = ({ className, name, role, email, linkedIn, qualification, photo, description, reverse }) => {
  return (
    <div className={clsx(className, classes.bio)}>
      <Container>
        <Row className={clsx("flex-column", { "flex-md-row": !reverse, "flex-md-row-reverse": reverse })}>
          <Col xs={12} md={4}>
            <figure>
              <SourceFlowImage src={photo} size="291x291" alt={name} />
            </figure>
          </Col>
          <Col xs={12} md={8}>
            <h3 className="mb-2">{name}</h3>
            <dl className="mb-4">
              <dt className="visually-hidden">Role</dt>
              <dd className="fw-semibold">{role}</dd>
            </dl>
            <dl className="mb-2">
              <dt className="visually-hidden">Qualification</dt>
              <dd>{qualification}</dd>
            </dl>
            <dl className="mb-2">
              <dt>
                <Email />
                <span className="visually-hidden">Email</span>
              </dt>
              <dd className={classes.bio__email}>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </dl>
            <dl className="mb-3">
              <dt>
                <LinkedIn />
                <span className="visually-hidden">LinkedIn</span>
              </dt>
              <dd>
                <a href={linkedIn}>LinkedIn Profile</a>
              </dd>
            </dl>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

TeamBio.defaultProps = {};

TeamBio.propTypes = {};
