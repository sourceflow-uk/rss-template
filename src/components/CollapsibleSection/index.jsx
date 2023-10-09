import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { CollapsibleSectionItem } from "@/ui/CollapsibleSectionItem";
import { useState } from "react";
import classes from "./styles.module.scss";

export const CollapsibleSection = ({ className, title, description, items, defaultActiveKey }) => {
  const [active, setActive] = useState(defaultActiveKey);

  return (
    <div className={clsx(className, classes.collapsible)}>
      <Container className="mw-xl">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <Row>
          <Col xs={12} md={8}>
            {items.map(({ title, body }, k) => (
              <CollapsibleSectionItem
                key={k}
                title={title}
                body={body}
                active={k === active}
                onClick={() => setActive(k === active ? null : k)}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CollapsibleSection.defaultProps = {
  className: "py-5",
  title: "",
  description: "",
  items: [],
  defaultActiveKey: 0,
};

CollapsibleSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(CollapsibleSectionItem.propTypes)),
  defaultActiveKey: PropTypes.number,
};

export default CollapsibleSection;
