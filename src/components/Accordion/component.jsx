import classes from "./styles.module.scss";
import clsx from "classnames";
import { useState } from "react";

export const Accordion = ({ className, items, defaultActiveKey }) => {
  const [active, setActive] = useState(defaultActiveKey);

  return (
    <div className={clsx(className, classes.accordion)}>
      {items.map(({ title, body }, k) => (
        <article className={clsx(classes.accordion__item, k === active && classes["accordion__item--active"])}>
          <header onClick={() => setActive(k)} className="py-3">
            <h4>{title}</h4>
            <a id={`accordion-item-${k}`} />
          </header>
          <section dangerouslySetInnerHTML={{ __html: body }} />
        </article>
      ))}
    </div>
  );
};

Accordion.defaultProps = {
  className: "",
  items: [],
  defaultActiveKey: 0,
};
