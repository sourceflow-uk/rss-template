import PropTypes from "prop-types";
import clsx from "classnames";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import { JobCard, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { jobs_helper } from "@/helpers/jobs_helper";

export default function LatestJobs({ className, title, button, visibleCount, sector = null }) {
  const items = jobs_helper.fetch({ filter: (i) => (sector ? JSON.stringify(i).includes(sector) : true) });

  return (
    <div className={clsx(className, classes.jobs)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Carousel
          className="mb-4"
          controls={items.length > visibleCount}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(items, visibleCount).map((items, k) => (
            <Carousel.Item key={k}>
              <Row>
                {items.map((job, k) => (
                  <Col key={k} xs={12} md={12 / visibleCount}>
                    <JobCard className="bg-light h-100" {...job} />
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
  title: null,
  visibleCount: 3,
  button: {
    label: "View more jobs",
    href: getRoute("jobs"),
  },
};

LatestJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOf([
    PropTypes.shape({
      label: PropTypes.string,
      placeholder: PropTypes.string,
    }),
    PropTypes.string,
  ]),
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
  visibleCount: PropTypes.number,
};
