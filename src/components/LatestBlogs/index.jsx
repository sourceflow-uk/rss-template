import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import { LatestBlogCard, DynamicText } from "@/ui";

export default function LatestBlogs({ className, title, items, button }) {
  return (
    <div className={clsx(className, classes.blogs)}>
      <Container className="mw-xxl">
        <DynamicText path={`_component.${this}.title`} tag="h2">
          {title}
        </DynamicText>
        <Row className="mb-4">
          {items.map(({ title, description, img, published_at, tags }, k) => (
            <Col key={k} xs={12} md={4}>
              <LatestBlogCard
                className="h-100"
                title={title}
                description={description}
                img={img}
                published_at={published_at}
                tags={tags}
              />
            </Col>
          ))}
        </Row>
        <div className={classes.blogs__footer}>
          {button && (
            <a className={classes.blogs__link} href={button.href}>
              {button.label}
              <ChevronRight width="7" height="13" className="ms-2" />
            </a>
          )}
        </div>
      </Container>
    </div>
  );
}

LatestBlogs.defaultProps = {
  className: "py-5",
  title: "Latest Blogs",
  items: [],
  button: {
    label: "View more blogs",
    href: "#",
  },
};

LatestBlogs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
      published_at: PropTypes.string,
    })
  ),
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
