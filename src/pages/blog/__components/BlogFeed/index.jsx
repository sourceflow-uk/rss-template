import PropTypes from "prop-types";
import clsx from "classnames";
import { Button, Col, Container, Dropdown, FormControl, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";
import { BlogFeedCard } from "@/ui";
import { blog_helper } from "@/helpers/blog_helper";
import { getRoute } from "@/getters/getRoute";
import classes from "./styles.module.scss";
import { useLoadMore } from "@/hooks/useLoadMore";
import { useEffect, useState } from "react";
import { useOptionFilter } from "@/hooks/useOptionFilter";

export default function BlogArticleFeed({ className }) {
  const [_rawItems] = useState(blog_helper.fetch());
  const [items, setItems, loadMore, page, pages] = useLoadMore(_rawItems);
  const [categories, categoryFilter, setCategoryFilter] = useOptionFilter(_rawItems, "category", setItems);
  const [tags, tagFilter, setTagFilter] = useOptionFilter(_rawItems, "tags", setItems);
  const [term, setTerm] = useState(null);

  useEffect(() => {
    setItems(
      _rawItems.filter((i) => (term ? i["title"].toLowerCase().trim().includes(term.toLowerCase().trim()) : true)),
    );
  }, [term]);

  return (
    <div className={clsx(className, classes.feed)}>
      <Container className="mw-xxl">
        <Stack className={clsx(classes.feed__filters, "p-4 mb-4")}>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <FormLabel>Keywords</FormLabel>
                <FormControl
                  className="mt-3"
                  value={term ?? ""}
                  onChange={(e) => setTerm(e.target.value)}
                  placeholder="Search..."
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4}>
              <Dropdown>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Toggle className="mt-3" variant="white">
                  {categoryFilter ?? "Select Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setCategoryFilter(null)}>Select Category</Dropdown.Item>
                  {categories.map((c) => (
                    <Dropdown.Item onClick={() => setCategoryFilter(c)}>{c}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={12} md={4}>
              <Dropdown>
                <Dropdown.Header className="mb-3">Tags</Dropdown.Header>
                <Dropdown.Toggle variant="white">{tagFilter ?? "Select Tag"}</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setTagFilter(null)}>Select Tag</Dropdown.Item>
                  {tags.map((c) => (
                    <Dropdown.Item onClick={() => setTagFilter(c)}>{c}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Stack>
        <Row>
          {items.map(({ title, image, publish_date, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <BlogFeedCard
                className="h-100"
                title={title}
                img={image}
                published_at={publish_date}
                href={getRoute("blogPost", { url_slug })}
              />
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

BlogArticleFeed.defaultProps = {
  className: "py-5",
};

BlogArticleFeed.propTypes = {
  className: PropTypes.string,
};
