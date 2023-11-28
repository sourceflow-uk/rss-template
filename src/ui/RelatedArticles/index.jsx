import clsx from "classnames";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { RelatedArticleCard } from "@/ui";
import { getRoute } from "@/getters/getRoute";

export default function RelatedArticles({ className, title, items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className={clsx(className)}>
      <h3 className="text-tertiary mt-2 mb-4">{title}</h3>
      <Row>
        {items.map(({ title, image, tags, publish_date, url_slug }, k) => (
          <Col key={k} className="mb-3" xs={12}>
            <RelatedArticleCard
              className="h-100"
              title={title}
              image={image}
              tags={tags}
              publish_date={publish_date}
              href={getRoute("blogPost", { url_slug })}
            />
          </Col>
        ))}
      </Row>
    </aside>
  );
}

RelatedArticles.defaultProps = {
  className: "",
  title: "You may also like",
  items: [],
};

RelatedArticles.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          label: PropTypes.string,
          href: PropTypes.string,
          variant: PropTypes.string,
        }),
      ),
      publish_date: PropTypes.string,
      url_slug: PropTypes.string,
    }),
  ),
};
