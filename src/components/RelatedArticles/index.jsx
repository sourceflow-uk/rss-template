import clsx from "classnames";
import { Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { RelatedArticleCard } from "@/ui/RelatedArticleCard";

export const RelatedArticles = ({ className, title, items }) => {
  return (
    <div className={clsx(className)}>
      <h3 className="text-tertiary my-2">{title}</h3>
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
    </div>
  );
};

RelatedArticles.defaultProps = {
  className: "",
  title: "You may also like",
  items: [],
};

RelatedArticles.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(RelatedArticleCard.propTypes)),
};
