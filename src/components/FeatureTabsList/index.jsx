import { Container, Nav, Stack, Tab } from "react-bootstrap";
import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Body, Description, Image, Title } from "@/ui";

export default function FeatureTabsList({ className, title, description, items, defaultActiveKey, vertical }) {
  return (
    <div className={clsx(className, classes.featured, { vertical })}>
      <Container>
        <Title title={title} />
        <Description className="mb-4" description={description} />
        <Tab.Container defaultActiveKey={defaultActiveKey}>
          <Stack className={clsx({ "flex-row": vertical })}>
            <Nav variant="pills" className={clsx({ "flex-column": vertical })}>
              {items.map(({ title, icon }, k) => (
                <Nav.Item key={k} className={clsx({ "flex-grow-1": !vertical })}>
                  <Nav.Link eventKey={k} className="p-3 gap-2">
                    <Image img={icon} size="75x75" />
                    <Title title={title} tag="h6" className="fw-semibold" />
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content>
              {items.map(({ title, img, body }, k) => (
                <Tab.Pane key={k} eventKey={k} className="text-start p-5">
                  <Stack as="article" className="flex-row" gap="3">
                    <Body body={body} />
                    <Image img={img} size="420x291" />
                  </Stack>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Stack>
        </Tab.Container>
      </Container>
    </div>
  );
}

FeatureTabsList.defaultProps = {
  className: "py-4 py-md-5",
  title: null,
  description: null,
  items: [],
  defaultActiveKey: 0,
  vertical: false,
};

FeatureTabsList.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      img: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
  defaultActiveKey: PropTypes.number,
  vertical: PropTypes.bool,
};
