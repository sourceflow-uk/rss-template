import { Col, Container, Row, Stack } from "react-bootstrap";
import clsx from "classnames";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { RelatedArticles, SocialNavigation, SocialShare, Tag, Time } from "@/ui";

export default function BlogArticleContent({ className, title, description, body, img, tags, published_at, related }) {
  return (
    <article className={clsx(className, classes.article)}>
      <header className={clsx(classes.article__header)}>
        <SocialNavigation className={classes.article__share} />
        <SourceFlowImage src={img} size="1440x360" alt={title} />
        <Container className="mw-xxl">
          <Row>
            <Col xs={12} md={6}>
              <h1 className="text-white mb-3">{title}</h1>
              <Stack className="flex-row align-items-center mb-3" gap={2}>
                {published_at && <Time className={classes.article__published} date={published_at} />}
                {tags.map(({ label, href }, k) => (
                  <Tag key={k} label={label} href={href} />
                ))}
              </Stack>
            </Col>
          </Row>
        </Container>
      </header>
      <div className={clsx(classes.article__body, "py-5")}>
        <Container className="mw-xxl">
          <Row>
            <Col xs={12} md={8}>
              <p className="mb-4">
                <b>{description}</b>
              </p>
              <div dangerouslySetInnerHTML={{ __html: body }} />
            </Col>
            <Col xs={12} md={4}>
              <RelatedArticles items={related} />
            </Col>
          </Row>
        </Container>
      </div>
    </article>
  );
}

BlogArticleContent.defaultProps = {
  className: "",
  title: "",
  description: "",
  body: "",
  img: "",
  tags: [],
  published_at: "",
  related: [],
};

BlogArticleContent.propTypes = {
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
