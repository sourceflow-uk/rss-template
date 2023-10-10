import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export default function CollapsibleSectionItem({ active, title, body, onClick }) {
  return (
    <article className={clsx(classes.item, active && classes["item--active"])}>
      <header onClick={onClick} className="py-3">
        <h4>{title}</h4>
        <div className={classes.item__toggle}>
          <span />
          <span />
        </div>
      </header>
      <section dangerouslySetInnerHTML={{ __html: body }} />
    </article>
  );
}

CollapsibleSectionItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
};
