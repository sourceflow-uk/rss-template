import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { CTA, Form, Phone, SocialShare, Tag, Title } from "@/ui";
import Calendar from "@/assets/Calendar.svg";
import Contract from "@/assets/Contract.svg";
import Location from "@/assets/Location.svg";
import Salary from "@/assets/Salary.svg";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { getGlobal } from "@/getters/getGlobal";
import { formatDistanceToNowStrict } from "date-fns";
import { RelatedJobs } from "@/components";
import { jobs_helper } from "@/helpers/jobs_helper";
import { branch_helper } from "@/helpers/branch_helper";
import { consultant_helper } from "@/helpers/consultant_helper";

export default function JobPageContent({
  className,
  id,
  description,
  img,
  categories,
  location,
  salary_package,
  external_reference,
  published_at,
  related,
  external_application_email,
}) {
  const job_types = jobs_helper.getCategoryValues("275d8990-bd9e-4f79-a0e2-d81bb734c855", { categories });
  const sectors = jobs_helper.getCategoryValues("3186657c-e89c-4a6f-9157-35eb7fe0b379", { categories });
  const branches = jobs_helper.getCategoryValues("33b21b47-15e3-40a2-bc7b-32019e94c7ba", { categories });

  const branch = branch_helper.find(branches[0]?.id, "id")

  const nameFragment = /^(.*)\.\d+\.\d+\@/.exec(external_application_email)[1]
  const sanitisedNameFragment = nameFragment.split('.').join('').toLowerCase()

  let consultant = consultant_helper.filter((c) => c.name.toLowerCase().replace(/\s+/g, '') == sanitisedNameFragment)[0]

  if(!consultant){
    consultant = consultant_helper.find(i => {
      const nameparts = i['name'].split(' ')
      const shortname = `${nameparts[0][0]}${nameparts.slice(1).join('')}`.toLowerCase()

      return shortname == sanitisedNameFragment
    })
  }

  const global = getGlobal();

  return (
    <div className={clsx(className, classes.content)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={9}>
            <Card className={clsx(classes.content__details, "mb-5")}>
              <Card.Header>
                <h3>Job Details</h3>
              </Card.Header>
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
                          <Location width={16} height={20} />
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
                        <dd>{job_types.map((i) => i.name).join(", ")}</dd>
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
                  <Stack className="flex-row flex-wrap flex-md-nowrap mb-3" gap={2}>
                    {sectors.map(({ name }, k) => (
                      <Tag key={k} label={name} variant="primary" />
                    ))}
                  </Stack>
                  <div>
                    <b>Job Ref: </b>
                    {external_reference}
                  </div>
                </div>
                <CTA className={classes.content__details__cta} label="Apply now" href="#Apply" variant="secondary" />
                <div className="p-4" dangerouslySetInnerHTML={{ __html: description }} />
                <a id="Apply" />
                <div className="bg-light p-4">
                  <Title title="Apply now" />
                  <Form
                    jobId={id}
                    onSubmitDone={() => {
                      if (typeof window !== "undefined") {
                        window.location.href = `/application-complete`;
                      }
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Stack gap={4}>
              <SocialShare title="Share this job" />
              { (consultant || branch) &&
                <Card>
                  <Card.Header>
                    <h3>Have a Question?</h3>
                  </Card.Header>
                  <Card.Body>
                    <Phone number={consultant?.phone_number || branch?.phone || global["_theme.company.phone"]} />
                  </Card.Body>
                </Card>
              }
              <RelatedJobs items={related} />
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

JobPageContent.defaultProps = {
  className: "pb-4",
  description: null,
  img: null,
  location: null,
  salary_package: null,
  external_reference: null,
  published_at: null,
};

JobPageContent.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  location: PropTypes.string,
  salary_package: PropTypes.string,
  external_reference: PropTypes.string,
  published_at: PropTypes.string,
};
