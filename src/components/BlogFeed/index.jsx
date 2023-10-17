import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { BlogFeedCard } from "@/ui";
import { blog_helper } from "@/helpers/blog_helper";
import { getRoute } from "@/getters/getRoute";

export default function BlogArticleFeed({ className }) {
  const items = blog_helper.fetch();

  return (
    <div className={clsx(className)}>
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
