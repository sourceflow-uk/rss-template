import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";

export const HorizontalListings = ({ className, title, items }) => {
  return (
    <div className={clsx(className, classes.listings)}>
      <Container className="mw-lg">
        <h3>{title}</h3>
        <Row>
          {items.map(({ title, img, description }, k) => (
            <Col key={k} xs={12} md={4}>
              <div className={classes.listings__item}>
                <div>
                  <img src={img} alt="" />
                </div>
                <div>
                  <h4 className="h6">{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

HorizontalListings.defaultProps = {
  className: "",
  title: "",
  items: [],
};

HorizontalListings.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
