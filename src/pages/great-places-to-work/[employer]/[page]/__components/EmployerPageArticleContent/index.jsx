import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { SidebarNavigation } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { employer_page_helper } from "@/helpers/employer_page_helper";

export default function EmployerPageArticleContent({ className, id, employer, body }) {
  const items = employer_page_helper.fetch({ exclude: [] });

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
                  label: employer.name,
                  href: getRoute("employer", { employer: employer.url_slug }),
                  children: items.map(({ title, url_slug }) => ({
                    label: title,
                    href: getRoute("employerPage", { employer: employer.url_slug, page: url_slug }),
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

EmployerPageArticleContent.defaultProps = {
  className: "py-5",
  body: null,
};

EmployerPageArticleContent.propTypes = {
  className: PropTypes.string,
  body: PropTypes.string,
};
