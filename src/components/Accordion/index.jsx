import classes from "./styles.module.scss";
import clsx from "classnames";
import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { AccordionItem } from "@/ui/AccordionItem";

export const Accordion = ({ className, items, defaultActiveKey }) => {
  const [active, setActive] = useState(defaultActiveKey);

  return (
    <div className={clsx(className, classes.accordion)}>
      <Container className="mw-lg">
        {items.map(({ title, body }, k) => (
          <AccordionItem
            key={k}
            eventKey={k}
            title={title}
            body={body}
            active={k === active}
            onClick={() => setActive(k === active ? null : k)}
          />
        ))}
      </Container>
    </div>
  );
};

Accordion.defaultProps = {
  className: "py-5",
  items: [],
  defaultActiveKey: 0,
};

Accordion.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(AccordionItem.propTypes)),
  defaultActiveKey: PropTypes.number,
};
