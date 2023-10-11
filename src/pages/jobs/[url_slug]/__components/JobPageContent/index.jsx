import { Card, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { CTA, Phone, SocialMediaShare } from "@/ui";
import Calendar from "@/assets/Calendar.svg";
import Contract from "@/assets/Contract.svg";
import Location from "@/assets/Location.svg";
import Salary from "@/assets/Salary.svg";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { getGlobal } from "@/getters/getGlobal";
import { formatDistanceToNowStrict } from "date-fns";

export default function JobPageContent({
  className,
  body,
  img,
  role_type,
  location,
  salary_package,
  external_reference,
  published_at,
}) {
  const global = getGlobal();

  return (
    <div className={clsx(className, classes.content)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={9}>
            <Card className={classes.content__details}>
              <Card.Header>Job Details</Card.Header>
              <Card.Body className="p-0">
                <div className="p-4">
                  <Row>
                    <Col xs={12} md={5}>
                      <dl>
                        <dt>
                          <Calendar />
                        </dt>
                        <dd>{`Posted ${formatDistanceToNowStrict(new Date(published_at))} ago`}</dd>
                      </dl>
                      <dl>
                        <dt>
                          <Location />
                        </dt>
                        <dd>{location}</dd>
                      </dl>
                    </Col>
                    <Col xs={12} md={5}>
                      <dl>
                        <dt>
                          <Contract />
                        </dt>
                        <dd>{role_type}</dd>
                      </dl>
                      <dl>
                        <dt>
                          <Salary />
                        </dt>
                        <dd>{salary_package}</dd>
                      </dl>
                    </Col>
                    <Col xs={12} md={2}>
                      {img && <img className="ms-auto d-block" src={img} alt="" />}
                    </Col>
                  </Row>
                  <div>
                    <b>Job Ref: </b>
                    {external_reference}
                  </div>
                </div>
                <CTA className={classes.content__details__cta} label="Apply now" href="#Apply" variant="secondary" />
                <div className="p-4" dangerouslySetInnerHTML={{ __html: body }} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <SocialMediaShare className="mb-4" title="Share this job" />
            <Card>
              <Card.Header>Have a Question?</Card.Header>
              <Card.Body>
                <Phone number={global["_theme.phone"]} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

JobPageContent.defaultProps = {
  className: "pb-4",
};

JobPageContent.propTypes = {
  className: PropTypes.string,
};
