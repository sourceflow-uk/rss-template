import PropTypes from "prop-types";
import clsx from "classnames";
import { Button, Carousel, Col, Container, Row, Stack } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import { JobCard, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { jobs_helper } from "@/helpers/jobs_helper";
import { sector_helper } from "@/helpers/sector_helper";
import { useEffect, useState } from "react";

export default function LatestJobs({ className, title, button, visibleCount, sector, filters }) {
  const [items] = useState(jobs_helper.fetch({ filter: (i) => (sector ? JSON.stringify(i).includes(sector) : true) }));
  const [sectors] = useState(sector_helper.fetch({ filter: (i) => i.is_carousel_filter === true }));
  const [sectorFilter, setSector] = useState("");
  const [computedItems, setComputedItems] = useState([]);

  useEffect(() => {
    if (sectors.length > 0) {
      setSector(sectors[0].id);
    }
  }, [sectors]);

  useEffect(() => {
    setComputedItems(items.filter((i) => JSON.stringify(i).includes(sectorFilter)));
  }, [sectorFilter, items]);

  return (
    <div className={clsx(className, classes.jobs)}>
      <Container className="mw-xxl">
        <Stack className="flex-md-row justify-content-between mb-4">
          <Title title={title} className="mb-md-0 text-center text-md-start" />
          {filters && (
            <Stack
              as="aside"
              className={clsx(classes.jobs__filter, "flex-md-row justify-content-end flex-grow-0")}
              gap={3}
            >
              <h3 className="h6 mb-0">Show me jobs for</h3>
              <Stack className="flex-row flex-grow-0 justify-content-center" gap={3}>
                {sectors.map(({ id, title }) => (
                  <a onClick={() => setSector(id)} className={clsx({ active: sectorFilter === id })}>
                    {title}
                  </a>
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
        <Carousel
          controls={computedItems.length > visibleCount}
          indicators={false}
          prevIcon={<ChevronLeft width="14" height="25" />}
          nextIcon={<ChevronRight width="14" height="25" />}
        >
          {chunk(computedItems, visibleCount).map((items, k) => (
            <Carousel.Item key={k}>
              <Row>
                {items.map((job, k) => (
                  <Col key={k} xs={12} md={12 / visibleCount} className="mb-4">
                    <JobCard className="bg-light h-100 " {...job} />
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
  filters: false,
  sector: null,
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
  filters: PropTypes.bool,
  sector: PropTypes.string,
  visibleCount: PropTypes.number,
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
