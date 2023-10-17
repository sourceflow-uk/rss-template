import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { SidebarNavigation } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { career_advice_helper } from "@/helpers/career_advice_helper";

export default function CareerAdviceArticleContent({ className, id, body }) {
  const items = career_advice_helper.fetch({ exclude: [] });

  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={8}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Col>
          <Col xs={12} md={4}>
            <SidebarNavigation
              title="In this section"
              items={[
                {
                  label: "Careers Advice",
                  href: getRoute("careerAdvice"),
                  children: items.map(({ title, url_slug }) => ({
                    label: title,
                    href: getRoute("careerAdviceArticle", { url_slug }),
                  })),
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

CareerAdviceArticleContent.defaultProps = {
  className: "py-5",
  body: null,
};

CareerAdviceArticleContent.propTypes = {
  className: PropTypes.string,
  body: PropTypes.string,
};
