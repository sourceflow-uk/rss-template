import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { ArticleCard } from "@/ui/ArticleCard";
import ChevronRight from "@/assets/ChevronRight.svg";

export const LatestBlogs = ({ className, title, items, button }) => {
  return (
    <div className={clsx(className, classes.blogs)}>
      <Container>
        <h2>{title}</h2>
        <Row className="mb-4">
          {items.map(({ title, description, img, published_at, tags }, k) => (
            <Col key={k} xs={12} md={4}>
              <ArticleCard title={title} description={description} img={img} published_at={published_at} tags={tags} />
            </Col>
          ))}
        </Row>
        {button && (
          <a className={classes.blogs__link} href={button.href}>
            {button.label}
            <ChevronRight className="ms-2" />
          </a>
        )}
      </Container>
    </div>
  );
};

LatestBlogs.defaultProps = {
  className: "",
  title: "",
  items: [],
  button: null,
};

LatestBlogs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(ArticleCard.propTypes)),
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
