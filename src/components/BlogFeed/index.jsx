import PropTypes from "prop-types";
import clsx from "classnames";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { BlogFeedCard } from "@/ui";
import { blog_helper } from "@/helpers/blog_helper";
import { getRoute } from "@/getters/getRoute";
import { useCallback, useEffect, useState } from "react";
import { paginate } from "@/functions/paginate";
import classes from "./styles.module.scss";

export default function BlogArticleFeed({ className }) {
  const items = blog_helper.fetch();
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [perPage, _setPerPage] = useState(9);
  const [computedItems, setComputedItems] = useState([]);

  const loadMore = useCallback(() => {
    const data = paginate(items, perPage, page + 1);

    setPage(data.__metadata.page);
    setPages(data.__metadata.pages);
    setComputedItems([...computedItems, ...data.items]);
  }, [computedItems, items, page, perPage]);

  useEffect(() => {
    if (computedItems.length === 0) {
      loadMore();
    }
  }, [computedItems, loadMore]);

  return (
    <div className={clsx(className, classes.feed)}>
      <Container className="mw-xl">
        <Row>
          {computedItems.map(({ title, image, publish_date, url_slug }, k) => (
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
