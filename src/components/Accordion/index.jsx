import classes from "./styles.module.scss";
import clsx from "classnames";
import { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { AccordionItem, Title } from "@/ui";

export default function Accordion({ className, title, items, defaultActiveKey }) {
  const [active, setActive] = useState(defaultActiveKey);

  return (
    <div className={clsx(className, classes.accordion)}>
      <Container className="mw-lg">
        <Title title={title} />
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
}

Accordion.defaultProps = {
  className: "py-5",
  title: null,
  items: [],
  defaultActiveKey: 0,
};

Accordion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.oneOf([
    PropTypes.shape({
      label: PropTypes.string,
      placeholder: PropTypes.string,
    }),
    PropTypes.string,
  ]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      title: PropTypes.string,
      body: PropTypes.string,
      eventKey: PropTypes.number,
      onClick: PropTypes.func,
    })
  ),
  defaultActiveKey: PropTypes.number,
};
