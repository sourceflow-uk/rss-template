import PropTypes from "prop-types";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import clsx from "classnames";

const BlockQuoteCards = ({ className, items, visibleCount }) => (
  <Row className={clsx(className, { "px-4": visibleCount > 1 })}>
    {items.map(({ quote, author }) => (
      <Col>
        <blockquote className={clsx(classes.blockquotes__card, "p-3")}>
          <section className="mb-4" dangerouslySetInnerHTML={{ __html: quote }} />
          <cite>
            <b dangerouslySetInnerHTML={{ __html: author.name }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: author.position }} />
          </cite>
        </blockquote>
      </Col>
    ))}
  </Row>
);

export const BlockQuote = ({ className, title, items, carousel, visibleCount }) => {
  return (
    <div className={clsx(className, classes.blockquotes)}>
      <Container>
        <h2>{title}</h2>
        {carousel ? (
          <Carousel className={classes.blockquotes__carousel} controls={true} indicators={false}>
            {chunk(items, visibleCount).map((items) => (
              <Carousel.Item>
                <BlockQuoteCards items={items} visibleCount={visibleCount} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="px-5">
            {chunk(items, visibleCount).map((items) => (
              <BlockQuoteCards items={items} visibleCount={visibleCount} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

BlockQuote.defaultProps = {
  className: "",
  title: "",
  items: [],
  carousel: false,
  visibleCount: 1,
};

BlockQuote.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string,
        position: PropTypes.string,
      }),
    })
  ),
  carousel: PropTypes.bool,
  visibleCount: PropTypes.number,
};
