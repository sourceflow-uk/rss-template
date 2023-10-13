import clsx from "classnames";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { RelatedArticleCard } from "@/ui";

export default function RelatedArticles({ className, title, items }) {
  return (
    <aside className={clsx(className)}>
      <h3 className="text-tertiary mt-2 mb-4">{title}</h3>
      <Row>
        {items.map(({ title, img, tags, published_at, href }, k) => (
          <Col key={k} className="mb-3" xs={12}>
            <RelatedArticleCard
              className="h-100"
              title={title}
              img={img}
              tags={tags}
              published_at={published_at}
              href={href}
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
      description: PropTypes.string,
      img: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          label: PropTypes.string,
          href: PropTypes.string,
          variant: PropTypes.string,
        })
      ),
      published_at: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
