import { Container, Row, Col, Stack } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Body, CTA, SidebarNavigation, Title } from "@/ui";

export default function RichText({ className, containerClassName, title, body, sidebar, ctas }) {
  const hasCtas = ctas && ctas.map((i) => i.label).join("").length === 0;

  if (!body) {
    return null;
  }
  return (
    <div className={clsx(className, classes.text)}>
      <Container className={containerClassName}>
        <Row>
          <Col xs={12} md={sidebar ? 8 : 12}>
            {title && <Title title={title} />}
            <Body body={body} />
            {hasCtas && (
              <Stack className="flex-md-row" gap={2}>
                {ctas.map((cta, k) => (
                  <CTA key={k} label={cta.label} href={cta.href} variant={cta.variant} />
                ))}
              </Stack>
            )}
          </Col>
          {sidebar && (
            <Col xs={12} md={4}>
              <SidebarNavigation title="In this section" items={sidebar} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

RichText.defaultProps = {
  className: "py-4 py-md-5",
  containerClassName: "mw-lg",
  body: null,
};
