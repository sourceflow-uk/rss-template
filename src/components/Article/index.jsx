import { Col, Container, Row, Stack } from "react-bootstrap";
import clsx from "classnames";
import { SocialMediaShare } from "@/components/SocialMediaShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import { Time } from "@/ui/Time";
import { Tag } from "@/ui/Tag";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const Article = ({ className, title, description, body, img, tags, published_at, related }) => {
  return (
    <article className={clsx(className, classes.article)}>
      <Container className="mw-xl">
        <Row>
          <Col xs={12} md={8}>
            <h1 className="text-tertiary mb-3">{title}</h1>
            <Stack className="flex-row flex-wrap align-items-center mb-3" gap={2}>
              <Time date={published_at} />
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
          </Col>
          <Col xs={12} md={4}>
            <RelatedArticles items={related} />
          </Col>
        </Row>
      </Container>
    </article>
  );
};

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
  tags: PropTypes.arrayOf(Tag.propTypes),
  published_at: PropTypes.string,
  related: RelatedArticles.propTypes.items,
};
