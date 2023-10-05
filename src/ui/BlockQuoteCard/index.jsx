import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const BlockQuoteCard = ({ className, quote, author }) => {
  return (
    <blockquote className={clsx(className, classes.card, "p-4")}>
      <section dangerouslySetInnerHTML={{ __html: quote }} />
      <cite>
        <b dangerouslySetInnerHTML={{ __html: author.name }} />
        <br />
        <span dangerouslySetInnerHTML={{ __html: author.position }} />
      </cite>
      <svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5 27.9717L0.911547 0.971677L32.0885 0.971679L16.5 27.9717Z" />
      </svg>
    </blockquote>
  );
};

BlockQuoteCard.defaultProps = {
  className: "",
  quote: "",
  author: {
    name: "",
    position: "",
  },
};

BlockQuoteCard.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
  }),
};
