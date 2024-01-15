import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Body, Title } from "@/ui";

export default function CollapsibleSectionItem({ active, title, body, onClick }) {
  return (
    <article className={clsx(classes.item, active && classes["item--active"])}>
      <header onClick={onClick} className="py-3">
        <Title tag="h2" title={title} className="m-2"/>
        <div className={classes.item__toggle}>
          <span />
          <span />
        </div>
      </header>
      <Body body={body} tag="section" />
    </article>
  );
}

CollapsibleSectionItem.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func,
};
