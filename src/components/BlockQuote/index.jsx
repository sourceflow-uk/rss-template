import PropTypes from "prop-types";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import clsx from "classnames";
import { BlockQuoteCard } from "@/ui/BlockQuoteCard";

const BlockQuoteCards = ({ className, items, visibleCount }) => (
  <Row className={clsx(className, { "h-100 px-4": visibleCount > 1 })}>
    {items.map(({ quote, author }, k) => (
      <Col key={k}>
        <BlockQuoteCard className="h-100" quote={quote} author={author} />
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
  items: PropTypes.arrayOf(PropTypes.shape(BlockQuoteCard.propTypes)),
  carousel: PropTypes.bool,
  visibleCount: PropTypes.number,
};
