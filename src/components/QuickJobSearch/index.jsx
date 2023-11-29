import { Button, Col, Container, Form, Row } from "react-bootstrap";
import clsx from "classnames";
import ArrowRight from "@/assets/ArrowRight.svg";
import classes from "./styles.module.scss";
import { useCallback, useState } from "react";
import { sector_helper } from "@/helpers/sector_helper";
import { getRoute } from "@/getters/getRoute";
import { job_type_helper } from "@/helpers/job_type_helper";
import { salary_helper } from "@/helpers/salary_helper";

export default function QuickJobSearch({ className }) {
  const [sectors] = useState(sector_helper.fetch());
  const [job_types] = useState(job_type_helper.fetch());
  const [salaries] = useState(salary_helper.fetch());

  const [query, setQuery] = useState("");
  const [sector, setSector] = useState("");
  const [location, setLocation] = useState("");
  const [job_type, setJobType] = useState([]);
  const [salary, setSalary] = useState("");
  const [radius, setRadius] = useState("");

  const handleSubmit = useCallback(() => {
    const params = new URLSearchParams({
      query,
      location,
      radius,
    });

    let urlFilters = [];
    let url = `${getRoute("jobs")}?${params.toString()}`;

    if (sector) {
      urlFilters = [...urlFilters, sector];
    }

    if (job_type) {
      urlFilters = [...urlFilters, ...job_type];
    }

    if (salary) {
      urlFilters = [...urlFilters, salary];
    }

    if (urlFilters.length > 0) {
      url = `${url}#/${urlFilters.join("/")}`;
    }

    window.location.href = `${url}/`.toLowerCase();
  }, [query, sector, location, job_type, salary, radius]);

  return (
    <div className={clsx(className, classes.search)}>
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Form className={clsx(classes.search__form)} onSubmit={handleSubmit}>
              <div className="p-4">
                <h3>Quick Job Search</h3>
                <Row className="mb-lg-4">
                  <Col xs={12} lg={4} className="mb-2 mb-lg-0">
                    <Form.Group>
                      <Form.Label>Job Title / keywords</Form.Label>
                      <Form.Control
                        placeholder="E.g. LGV Driver"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={4} className="mb-2 mb-lg-0">
                    <Form.Group>
                      <Form.Label>Sector</Form.Label>
                      <Form.Select value={sector} onChange={(e) => setSector(e.target.value)}>
                        <option value="">Select</option>
                        {sectors.map(({ title }) => (
                          <option key={title} value={title}>
                            {title}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} lg={4} className="mb-2 mb-lg-0">
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
                        {job_types.map(({ title }) => (
                          <Col key={title} xs={6} sm={12} xl={6}>
                            <Form.Check
                              value={title}
                              label={title}
                              onChange={(e) => {
                                setJobType(
                                  e.target.checked ? [...job_type, title] : job_type.filter((i) => i !== title),
                                );
                              }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={8} xxl={4}>
                    <Row>
                      <Col xs={6} md={12} lg={6}>
                        <Form.Group>
                          <Form.Label>Salary</Form.Label>
                          <Form.Select onChange={(e) => setSalary(e.target.value)}>
                            <option value="">Select</option>
                            {salaries.map(({ annum }) => (
                              <option key={annum} value={annum}>
                                {annum}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={6} md={12} lg={6}>
                        <Form.Group>
                          <Form.Label>Within</Form.Label>
                          <Form.Select value={radius} onChange={(e) => setRadius(e.target.value)}>
                            <option value="5">5 miles</option>
                            <option value="10">10 miles</option>
                            <option value="20">20 miles</option>
                            <option value="30">30 miles</option>
                            <option value="40">40 miles</option>
                            <option value="50">50 miles</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Button variant="secondary" onClick={handleSubmit}>
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
  className: "",
};
