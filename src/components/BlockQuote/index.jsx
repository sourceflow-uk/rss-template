import PropTypes from "prop-types";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { chunk } from "lodash";
import classes from "./styles.module.scss";
import clsx from "classnames";
import ChevronLeft from "@/assets/ChevronLeft.svg";
import ChevronRight from "@/assets/ChevronRight.svg";
import { BlockQuoteCard, DynamicText } from "@/ui";

const BlockQuoteCards = ({ className, items, visibleCount }) => (
  <Row className={clsx(className, { "h-100 px-4": visibleCount > 1 })}>
    {items.map(({ quote, author }, k) => (
      <Col key={k}>
        <BlockQuoteCard className="h-100" quote={quote} author={author} />
      </Col>
    ))}
  </Row>
);

export default function BlockQuote({ className, title, items, carousel, visibleCount }) {
  return (
    <div className={clsx(className, classes.blockquotes)}>
      <Container>
        <DynamicText path={`_component.${this}.title`} tag="h2">
          {title}
        </DynamicText>
        {carousel ? (
          <Carousel
            className={classes.blockquotes__carousel}
            controls={true}
            indicators={false}
            prevIcon={<ChevronLeft width="14" height="25" />}
            nextIcon={<ChevronRight width="14" height="25" />}
          >
            {chunk(items, visibleCount).map((items, k) => (
              <Carousel.Item key={k}>
                <BlockQuoteCards items={items} visibleCount={visibleCount} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div className="px-5">
            {chunk(items, visibleCount).map((items, k) => (
              <BlockQuoteCards key={k} items={items} visibleCount={visibleCount} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

BlockQuote.defaultProps = {
  className: "bg-white py-5",
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
      className: PropTypes.string,
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
