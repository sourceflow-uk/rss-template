import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { BlogFeedCard } from "@/ui";

export default function BlogArticleFeed({ className, items }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
        <Row>
          {items.map(({ title, description, img, published_at, href }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4">
              <BlogFeedCard className="h-100" title={title} img={img} published_at={published_at} href={href} />
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
