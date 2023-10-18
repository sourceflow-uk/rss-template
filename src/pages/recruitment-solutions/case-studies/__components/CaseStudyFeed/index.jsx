import clsx from "classnames";
import { Button, Col, Container, Dropdown, Row, Stack } from "react-bootstrap";
import PropTypes from "prop-types";
import { CaseStudyCard } from "@/ui";
import { case_study_helper } from "@/helpers/case_study_helper";
import { getRoute } from "@/getters/getRoute";
import classes from "./styles.module.scss";
import { useState } from "react";
import { useLoadMore } from "@/hooks/useLoadMore";
import { useOptionFilter } from "@/hooks/useOptionFilter";

export default function CaseStudyFeed({ className }) {
  const [_rawItems] = useState(case_study_helper.fetch());
  const [items, setItems, loadMore, page, pages] = useLoadMore(_rawItems);
  const [categories, categoryFilter, setCategoryFilter] = useOptionFilter(_rawItems, "category", setItems);

  return (
    <div className={clsx(className, classes.feed)}>
      <Container className="mw-xxl">
        <Stack className={clsx(classes.feed__filters, "p-4 mb-4")}>
          <Row>
            <Col xs={12} md={4}>
              <Dropdown>
                <Dropdown.Header className="mb-3">Categories</Dropdown.Header>
                <Dropdown.Toggle variant="white">{categoryFilter ?? "Select Category"}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCategoryFilter(null)}>Select Category</Dropdown.Item>
                  {categories.map((c, k) => (
                    <Dropdown.Item key={k} onClick={() => setCategoryFilter(c)}>
                      {c}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Stack>
        <Row>
          {items.map(({ title, card_image, cover_image, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <CaseStudyCard title={title} img={card_image ?? cover_image} href={getRoute("caseStudy", { url_slug })} />
            </Col>
          ))}
        </Row>
        {page < pages && (
          <Stack className={clsx(classes.feed__footer)}>
            <Button variant="secondary" onClick={loadMore}>
              Load More
            </Button>
          </Stack>
        )}
      </Container>
    </div>
  );
}

CaseStudyFeed.defaultProps = {
  className: "py-5",
};

CaseStudyFeed.propTypes = {
  className: PropTypes.string,
};
