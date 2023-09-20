import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const BlockQuoteCard = ({ className, quote, author }) => {
  return (
    <blockquote className={clsx(className, classes.card, "p-3")}>
      <section className="mb-4" dangerouslySetInnerHTML={{ __html: quote }} />
      <cite>
        <b dangerouslySetInnerHTML={{ __html: author.name }} />
        <br />
        <span dangerouslySetInnerHTML={{ __html: author.position }} />
      </cite>
    </blockquote>
  );
};

BlockQuoteCard.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
  }),
};
