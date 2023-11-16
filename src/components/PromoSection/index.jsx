import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { PromoItem, Title } from "@/ui";

export default function PromoSection({ className, title, items, md }) {
  if (
    items
      .map((i) => i.title)
      .join()
      .trim().length === 0
  ) {
    return null;
  }

  return (
    <div className={clsx(className, classes.section)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Row>
          {items.map(({ title, description, img, featured, href, cta }, k) => (
            <Col key={k} xs={12} md={md} className="mb-4 mb-md-5">
              <PromoItem
                className="h-100"
                title={title}
                description={description}
                img={img}
                href={href}
                cta={cta}
                featured={featured}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

PromoSection.defaultProps = {
  className: "pt-4 pt-md-5",
  title: null,
  items: [],
  md: 4,
};

PromoSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
