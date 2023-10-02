import { Col, Container, Row, Stack } from "react-bootstrap";
import clsx from "classnames";
import { SocialMediaShare } from "@/components/SocialMediaShare";
import { RelatedArticles } from "@/components/RelatedArticles";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import classes from "./styles.module.scss";
import { format } from "date-fns";
import { Tag } from "@/ui/Tag";
import Calendar from "@/assets/Calendar.svg";

export const Article = ({ className, title, description, body, img, related, tags, published_at }) => {
  return (
    <article className={clsx(className, classes.article)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={8}>
            <h1 className="mb-3">{title}</h1>
            <Stack className="flex-row flex-wrap align-items-center mb-3" gap={2}>
              <Calendar />
              <time>{format(published_at, "do LLLL, yyyy")}</time>
              {tags.map(({ label, href }, k) => (
                <Tag className="p-1" key={k} label={label} href={href} />
              ))}
            </Stack>
          </Col>
          <Col xs={12} md={4}>
            <SocialMediaShare />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
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
  related: [],
};

Article.propTypes = {
  related: RelatedArticles.propTypes.items,
};
