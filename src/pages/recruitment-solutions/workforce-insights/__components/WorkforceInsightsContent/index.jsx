import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { CaseStudyCard, Description, Title } from "@/ui";
import { getRoute } from "@/getters/getRoute";

export default function WorkforceInsightsContent({ className, items }) {
  return (
    <div className={clsx(className)}>
      <Container>
        {items.map((i) => {
          const showMoreCard = i.children.length > 7 && i.url_slug;

          return (
            <Row key={i.id} className="py-5">
              <Col xs={12} md={8} className="mb-4">
                <div className="d-flex flex-column h-100 p-4 bg-primary text-white">
                  <Title title={i.title} />
                  <Description description={i.intro} />
                </div>
              </Col>
              {i.children.slice(0, showMoreCard ? 6 : 7).map((c) => (
                <Col key={c.id} xs={12} md={4} className="mb-4">
                  <CaseStudyCard
                    title={c.title}
                    img={c.card_image}
                    href={getRoute("dynamic", {
                      url_slugs: ["recruitment-solutions", "workforce-insights", i.url_slug, c.url_slug].filter(
                        (i) => !!i,
                      ),
                    })}
                  />
                </Col>
              ))}
              {showMoreCard && (
                <Col xs={12} md={4} className="mb-4">
                  <a
                    className="d-flex flex-column justify-content-end h-100 p-4 bg-primary text-white text-decoration-none"
                    href={getRoute("dynamic", {
                      url_slugs: ["recruitment-solutions", "workforce-insights", i.url_slug],
                    })}
                  >
                    <Title
                      title={{
                        path: "page.workforceInsights.more",
                        placeholder: "Discover more expert articles, blogs and resources >>",
                      }}
                      tag="h3"
                    />
                  </a>
                </Col>
              )}
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

WorkforceInsightsContent.defaultProps = {
  className: "py-5",
};

WorkforceInsightsContent.propTypes = {
  className: PropTypes.string,
};
