import { Button, Col, Container, Form, Row } from "react-bootstrap";
import clsx from "classnames";
import ArrowRight from "@/assets/ArrowRight.svg";
import classes from "./styles.module.scss";
import { useCallback, useState } from "react";

export default function QuickJobSearch({ className }) {
  const [query, setQuery] = useState();
  const [sector, setSector] = useState();
  const [location, setLocation] = useState();
  const [type, setType] = useState();
  const [salary, setSalary] = useState();
  const [radius, setRadius] = useState();

  const handleSubmit = useCallback(() => {
    // TODO: handle submit
  }, [query, sector, location, type, salary, radius]);

  return (
    <div className={clsx(className, classes.search)}>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Form className={clsx(classes.search__form)} onSubmit={handleSubmit}>
              <div className="p-4">
                <h3>Quick Job Search</h3>
                <Row className="mb-4">
                  <Col xs={12} md={4}>
                    <Form.Group>
                      <Form.Label>Job Title / keywords</Form.Label>
                      <Form.Control
                        placeholder="E.g. LGV Driver"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group>
                      <Form.Label>Sector</Form.Label>
                      <Form.Select value={sector} onChange={(e) => setSector(e.target.value)}>
                        <option value="">Select</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group>
                      <Form.Label>Location / Postcode</Form.Label>
                      <Form.Control
                        placeholder="E.g. London"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4}>
                    <Form.Group>
                      <Form.Label>Job type</Form.Label>
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Check label="Contract" />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Check label="Full-time" />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Check label="Permanent" />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Check label="Part-time" />
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Check label="Temporary" />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Row>
                      <Col xs={12} md={6}>
                        <Form.Group>
                          <Form.Label>Salary</Form.Label>
                          <Form.Select>
                            <option value="">Select</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6}>
                        <Form.Group>
                          <Form.Label>Within</Form.Label>
                          <Form.Select value={radius} onChange={(e) => setRadius(e.target.value)}>
                            <option value="5">5 Miles</option>
                            <option value="10">10 Miles</option>
                            <option value="15">15 Miles</option>
                            <option value="20">20 Miles</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Button variant="secondary">
                Search Jobs
                <ArrowRight />
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

QuickJobSearch.defaultProps = {
  className: "py-5",
};
