import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { CTA, Phone, SocialMediaShare, Tag } from "@/ui";
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
  sectors,
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
                          <span className="visually-hidden">Published</span>
                          <Calendar />
                        </dt>
                        <dd>
                          <time>{`Posted ${formatDistanceToNowStrict(new Date(published_at))} ago`}</time>
                        </dd>
                      </dl>
                      <dl>
                        <dt>
                          <span className="visually-hidden">Location</span>
                          <Location />
                        </dt>
                        <dd>{location}</dd>
                      </dl>
                    </Col>
                    <Col xs={12} md={5}>
                      <dl>
                        <dt>
                          <span className="visually-hidden">Role Type</span>
                          <Contract />
                        </dt>
                        <dd>{role_type}</dd>
                      </dl>
                      <dl>
                        <dt>
                          <span className="visually-hidden">Salary</span>
                          <Salary />
                        </dt>
                        <dd>{salary_package}</dd>
                      </dl>
                    </Col>
                    <Col xs={12} md={2}>
                      {img && <img className="ms-auto d-block" src={img} alt="" />}
                    </Col>
                  </Row>
                  <Stack className="flex-row mb-3" gap={2}>
                    {sectors.map(({ label }) => (
                      <Tag label={label} />
                    ))}
                  </Stack>
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
