import { Container, Nav, Stack, Tab } from "react-bootstrap";
import clsx from "classnames";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export const FeatureTabsList = ({ className, items, defaultActiveKey, vertical }) => {
  return (
    <div className={clsx(className, classes.featured, { vertical })}>
      <Container>
        <Tab.Container defaultActiveKey={defaultActiveKey}>
          <Stack className={clsx({ "flex-row": vertical })}>
            <Nav variant="pills" className={clsx({ "flex-column": vertical })}>
              {items.map(({ title, icon }, k) => (
                <Nav.Item key={k} className={clsx({ "flex-grow-1": !vertical })}>
                  <Nav.Link eventKey={k} className="p-3 gap-2">
                    <SourceFlowImage src={icon} size="75x75" alt={title} />
                    <span>{trimText(title, 24)}</span>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content>
              {items.map(({ title, img, body }, k) => (
                <Tab.Pane key={k} eventKey={k} className="p-5">
                  <Stack as="article" className="flex-row" gap="3">
                    <div dangerouslySetInnerHTML={{ __html: body }} />
                    <SourceFlowImage src={img} size="420x291" alt={title} />
                  </Stack>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Stack>
        </Tab.Container>
      </Container>
    </div>
  );
};

FeatureTabsList.defaultProps = {
  className: "py-5",
  items: [],
  defaultActiveKey: 0,
  vertical: false,
};

FeatureTabsList.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      img: PropTypes.string,
      body: PropTypes.string,
    })
  ),
  defaultActiveKey: PropTypes.number,
  vertical: PropTypes.bool,
};

export default FeatureTabsList;
