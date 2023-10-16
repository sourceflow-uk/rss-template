import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { BlockQuoteCard, DynamicText } from "@/ui";

export default function CaseStudyContent({
  className,
  client,
  contact,
  business_type,
  staffing_type,
  geographical_footprint,
  number_of_employees,
  turnover,
  company_background,
  key_features,
  challenge,
  solution,
  journey,
  result,
  testimonial,
  url_slug,
}) {
  return (
    <div className={clsx(className)}>
      <div className="py-5">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <aside className="bg-primary text-white p-4">
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.client.title`}>Client</DynamicText>
                  </dt>
                  <dd>{client}</dd>
                </dl>
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.contact.title`}>
                      Contact
                    </DynamicText>
                  </dt>
                  <dd>{contact}</dd>
                </dl>
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.business_type.title`}>
                      Business type
                    </DynamicText>
                  </dt>
                  <dd>{business_type}</dd>
                </dl>
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.staffing_type.title`}>
                      Staffing type
                    </DynamicText>
                  </dt>
                  <dd>{staffing_type}</dd>
                </dl>
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.geographical_footprint.title`}>
                      Geographical footprint
                    </DynamicText>
                  </dt>
                  <dd>{geographical_footprint}</dd>
                </dl>
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.number_of_employees.title`}>
                      Number of employees
                    </DynamicText>
                  </dt>
                  <dd>{number_of_employees}</dd>
                </dl>
                <dl>
                  <dt>
                    <DynamicText path={`page.${url_slug}.component.CaseStudyContent.turnover.title`}>
                      Turnover
                    </DynamicText>
                  </dt>
                  <dd>{turnover}</dd>
                </dl>
              </aside>
            </Col>
            <Col xs={12} md={8}>
              <DynamicText path={`page.${url_slug}.component.CaseStudyContent.background.title`} tag="h2">
                Company Background
              </DynamicText>
              <div dangerouslySetInnerHTML={{ __html: company_background }} />
              <aside className="bg-light text-tertiary p-4">
                <DynamicText path={`page.${url_slug}.component.CaseStudyContent.features.title`} tag="h3">
                  Key Features
                </DynamicText>
                <ul>
                  {key_features.split(",").map((i) => (
                    <li>{i.trim()}</li>
                  ))}
                </ul>
              </aside>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <DynamicText path={`page.${url_slug}.component.CaseStudyContent.challenge.title`} tag="h2">
                The Challenge
              </DynamicText>
              <div dangerouslySetInnerHTML={{ __html: challenge }} />
            </Col>
            <Col xs={12} md={6}></Col>
          </Row>
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <DynamicText path={`page.${url_slug}.component.CaseStudyContent.solution.title`} tag="h2">
                The Solution
              </DynamicText>
              <div dangerouslySetInnerHTML={{ __html: solution }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-primary text-white py-5">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <DynamicText path={`page.${url_slug}.component.CaseStudyContent.journey.title`} tag="h2">
                The Journey
              </DynamicText>
              <div dangerouslySetInnerHTML={{ __html: journey }} />
            </Col>
            <Col xs={12} md={6}></Col>
          </Row>
        </Container>
      </div>
      <div className="bg-tertiary text-white py-5">
        <Container>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }}>
              <DynamicText path={`page.${url_slug}.component.CaseStudyContent.result.title`} tag="h2">
                The Result
              </DynamicText>
              <div dangerouslySetInnerHTML={{ __html: result }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <BlockQuoteCard quote={testimonial} />
        </Container>
      </div>
    </div>
  );
}

CaseStudyContent.defaultProps = {
  className: "py-5",
};

CaseStudyContent.propTypes = {
  className: PropTypes.string,
};
