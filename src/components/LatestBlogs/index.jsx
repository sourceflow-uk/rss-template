import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import ChevronRight from "@/assets/ChevronRight.svg";
import { LatestBlogCard, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { blog_helper } from "@/helpers/blog_helper";
import { trimText } from "@/functions/trimText";

export default function LatestBlogs({ className, title, button }) {
  const items = blog_helper.fetch({ limit: 3 });

  return (
    <div className={clsx(className, classes.blogs)}>
      <Container className="mw-xxl">
        <Title title={title} />
        <Row className="mb-md-4">
          {items.map(({ title, body, image, publish_date, url_slug }, k) => (
            <Col key={k} xs={12} md={4} className="mb-4 mb-md-0">
              <LatestBlogCard
                className="h-100"
                title={title}
                description={trimText(body)}
                img={image}
                published_at={publish_date}
                href={getRoute("blogPost", { url_slug })}
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
  className: "py-4 py-md-5",
  title: null,
  button: {
    label: "View more blogs",
    href: getRoute("blog"),
  },
};

LatestBlogs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.any,
  button: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
};
