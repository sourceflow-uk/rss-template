import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { SidebarNavigation } from "@/ui";
import { getRoute } from "@/getters/getRoute";

export default function EmployerPageArticleContent({
  className,
  title,
  body,
  url_slug,
  url_slugs,
  children,
  siblings,
  parent,
}) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={8}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Col>
          <Col xs={12} md={4}>
            {children.length > 0 ? (
              <SidebarNavigation
                title="In this section"
                items={[
                  {
                    label: title,
                    href: getRoute("employerPage", { url_slugs }),
                    children: children.map(({ title, url_slug }) => ({
                      label: title,
                      href: getRoute("employerPage", { url_slugs: [...url_slugs, url_slug] }),
                    })),
                  },
                ]}
              />
            ) : (
              parent &&
              siblings.length > 0 && (
                <SidebarNavigation
                  title="In this section"
                  items={[
                    {
                      label: parent.title,
                      href: getRoute("employerPage", { url_slugs: [...url_slugs.filter((i) => i !== url_slug)] }),
                      children: [
                        { label: title, href: getRoute("employerPage", { url_slugs }) },
                        ...siblings.map((s) => ({
                          label: s.title,
                          href: getRoute("employerPage", {
                            url_slugs: [...url_slugs.filter((i) => i !== url_slug), s.url_slug],
                          }),
                        })),
                      ],
                    },
                  ]}
                />
              )
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

EmployerPageArticleContent.defaultProps = {
  className: "py-4 py-md-5",
  body: null,
  siblings: [],
  children: [],
  parent: null,
};

EmployerPageArticleContent.propTypes = {
  className: PropTypes.string,
  body: PropTypes.string,
};
