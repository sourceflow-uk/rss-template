import PropTypes from "prop-types";
import clsx from "classnames";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { BlogFeedCard } from "@/ui";
import { blog_helper } from "@/helpers/blog_helper";
import { getRoute } from "@/getters/getRoute";
import classes from "./styles.module.scss";
import { useLoadMore } from "@/hooks/useLoadMore";

export default function BlogArticleFeed({ className }) {
  const [items, loadMore, page, pages] = useLoadMore(blog_helper.fetch());

  return (
    <div className={clsx(className, classes.feed)}>
      <Container className="mw-xl">
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
