import { Col, Container, Row, Stack } from "react-bootstrap";
import clsx from "classnames";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { RelatedArticles, SocialShare, Tag, Time } from "@/ui";

export default function Article({ className, title, description, body, img, tags, published_at, related }) {
  return (
    <article className={clsx(className, classes.article)}>
      <Container className="mw-xl">
        <Row>
          <Col xs={12} md={8}>
            <h1 className="text-tertiary mb-3">{title}</h1>
            <Stack className="flex-row flex-wrap align-items-center mb-3" gap={2}>
              {published_at && <Time date={published_at} />}
              {tags.map(({ label, href }, k) => (
                <Tag key={k} label={label} href={href} />
              ))}
            </Stack>
            <SourceFlowImage className={clsx(classes.article__img, "mb-4")} src={img} size="785x459" alt={title} />
            <div className={classes.article__body}>
              <p className="mb-4">
                <b>{description}</b>
              </p>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </div>
            <SocialShare className="mt-5" />
          </Col>
          <Col xs={12} md={4}>
            <RelatedArticles items={related} />
          </Col>
        </Row>
      </Container>
    </article>
  );
}

Article.defaultProps = {
  className: "py-5",
  title: "",
  description: "",
  body: "",
  img: "",
  tags: [],
  published_at: "",
  related: [],
};

Article.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string,
  img: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  published_at: PropTypes.string,
  related: PropTypes.arrayOf(
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
