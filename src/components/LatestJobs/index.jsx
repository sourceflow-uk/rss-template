import PropTypes from "prop-types";
import clsx from "classnames";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { JobCard } from "@/ui/JobCard";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";

export const LatestJobs = ({ className, title, items, button, visibleCount }) => {
  return (
    <div className={clsx(className, classes.jobs)}>
      <Container className="mw-xl">
        <h2>{title}</h2>
        <Carousel
          className="mb-4"
          controls={true}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(items, visibleCount).map((items) => (
            <Carousel.Item>
              <Row className={clsx(className)}>
                {items.map(({ title, sectors, location, logo, salary_package, role_type, published_at, href }, k) => (
                  <Col key={k} xs={12} md={12 / visibleCount}>
                    <JobCard
                      className="h-100"
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
};

LatestJobs.defaultProps = {
  className: "",
  title: "Latest Jobs",
  visibleCount: 3,
  items: [],
  button: {
    label: "View more jobs",
    href: "#",
  },
};

LatestJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(JobCard.propTypes)),
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  visibleCount: PropTypes.number,
};
