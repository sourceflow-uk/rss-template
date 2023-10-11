import PropTypes from "prop-types";
import clsx from "classnames";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import { DynamicText, JobCard } from "@/ui";

export default function LatestJobs({ className, title, items, button, visibleCount }) {
  return (
    <div className={clsx(className, classes.jobs)}>
      <Container className="mw-xxl">
        <DynamicText path={`_component.${this}.title`} tag="h2">
          {title}
        </DynamicText>
        <Carousel
          className="mb-4"
          controls={true}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(items, visibleCount).map((items, k) => (
            <Carousel.Item key={k}>
              <Row>
                {items.map(({ title, sectors, location, logo, salary_package, role_type, published_at, href }, k) => (
                  <Col key={k} xs={12} md={12 / visibleCount}>
                    <JobCard
                      className="bg-light h-100"
                      title={title}
                      sectors={sectors}
                      location={location}
                      logo={logo}
                      salary_package={salary_package}
                      role_type={role_type}
                      published_at={published_at}
                      href={href}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className={classes.jobs__footer}>
          {button && (
            <a className={classes.jobs__link} href={button.href}>
              {button.label}
              <ChevronRight width="7" height="13" className="ms-2" />
            </a>
          )}
        </div>
      </Container>
    </div>
  );
}

LatestJobs.defaultProps = {
  className: "py-5",
  title: "Latest Jobs",
  visibleCount: 3,
  items: [],
  button: {
    label: "View more jobs",
    href: "/jobs",
  },
};

LatestJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      location: PropTypes.string,
      salary_package: PropTypes.string,
      role_type: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  visibleCount: PropTypes.number,
};
