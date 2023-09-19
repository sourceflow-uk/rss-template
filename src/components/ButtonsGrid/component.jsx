import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./styles.module.scss";

export const ButtonsGrid = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.grid)}>
      <Container>
        <Row>
          {items.map(({ title, img, href }) => (
            <Col md={3} className="p-2">
              <a className={classes.grid__button} href={href} style={{ backgroundImage: `url(${img})` }}>
                <h5 className="py-4">{title}</h5>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

ButtonsGrid.defaultProps = {
  className: "",
  items: [],
};

ButtonsGrid.propsTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
