import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const AccordionItem = ({ active, title, body, eventKey, onClick }) => {
  return (
    <article className={clsx(classes.item, active && classes["item--active"])}>
      <header onClick={onClick} className="py-3">
        <h4>{title}</h4>
        <a id={`accordion-item-${eventKey}`} />
      </header>
      <section dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  );
};

AccordionItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  eventKey: PropTypes.number,
  onClick: PropTypes.func,
};
