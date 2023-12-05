import PropTypes from "prop-types";
import clsx from "classnames";
import { Carousel, Col, Container, Row, Stack } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import { JobCard, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { sector_helper } from "@/helpers/sector_helper";
import { useEffect, useState } from "react";

export default function LatestJobs({ className, title, button, items, visibleCount, filters }) {
  const [sectors] = useState(sector_helper.fetch({ filter: (i) => i.is_carousel_filter === true }));
  const [sectorFilter, setSector] = useState("");
  const [computedItems, setComputedItems] = useState([]);

  useEffect(() => {
    if (sectors.length > 0 && filters) {
      setSector(sectors[0].id);
    }
  }, [sectors, filters]);

  useEffect(() => {
    if (sectorFilter && filters) {
      setComputedItems(items.filter((i) => JSON.stringify(i).includes(sectorFilter)).slice(0, visibleCount));
    } else {
      setComputedItems(items);
    }
  }, [sectorFilter, items, filters, visibleCount]);

  return (
    <div className={clsx(className, classes.jobs)}>
      <Container className="mw-xxl">
        {(title || filters) && (
          <Stack className="flex-md-row justify-content-between mb-4">
            <Title title={title} className="mb-md-0 text-center text-md-start" />
            {filters && (
              <Stack
                as="aside"
                className={clsx(classes.jobs__filter, "flex-md-row justify-content-end flex-grow-0")}
                gap={3}
              >
                <h3 className="h6 mb-0">Show me jobs for</h3>
                <Stack className="flex-row flex-grow-0 justify-content-center" gap={2}>
                  {sectors.map(({ id, title }) => (
                    <a key={id} onClick={() => setSector(id)} className={clsx({ active: sectorFilter === id })}>
                      {title}
                    </a>
                  ))}
                </Stack>
              </Stack>
            )}
          </Stack>
        )}
        {computedItems.length > 0 ? (
          <Carousel
            id="jobs"
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
        ) : (
          <span>Sorry there are no live jobs at the moment.</span>
        )}
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
  className: "py-4 py-md-5",
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
  title: PropTypes.any,
  filters: PropTypes.bool,
  sector: PropTypes.string,
  visibleCount: PropTypes.number,
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
