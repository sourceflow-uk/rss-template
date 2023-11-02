import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Body, Title } from "@/ui";

export default function AccordionItem({ active, title, body, eventKey, onClick }) {
  return (
    <article className={clsx(classes.item, active && classes["item--active"])}>
      <header onClick={onClick} className="py-3">
        <Title title={title} tag="h4" />
        <a id={`accordion-item-${eventKey}`} />
      </header>
      <Body body={body} tag="section" />
    </article>
  );
}

AccordionItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  eventKey: PropTypes.number,
  onClick: PropTypes.func,
};
