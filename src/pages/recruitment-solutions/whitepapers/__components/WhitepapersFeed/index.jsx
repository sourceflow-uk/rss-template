import PropTypes from "prop-types";
import clsx from "classnames";
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";
import { BlogFeedCard } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import classes from "./styles.module.scss";
import { useLoadMore } from "@/hooks/useLoadMore";
import { useEffect, useState } from "react";

export default function WhitepapersFeed({ className, items: _rawItems }) {
  const [items, setItems, loadMore, page, pages] = useLoadMore(_rawItems);
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
          </Row>
        </Stack>
        <Row>
          {items.map(({ title, image, publish_date, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <BlogFeedCard
                className="h-100"
                title={title}
                img={image}
                href={getRoute("whitepapersPage", { url_slug })}
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

WhitepapersFeed.defaultProps = {
  className: "py-5",
};

WhitepapersFeed.propTypes = {
  className: PropTypes.string,
};
