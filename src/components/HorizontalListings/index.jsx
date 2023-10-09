import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

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
                  <figure className="ratio ratio-1x1">
                    <SourceFlowImage src={img} alt={title} size="64x64" />
                  </figure>
                </div>
                <div>
                  <h4 className="h6">{trimText(title, 50)}</h4>
                  <p>{trimText(description, 180)}</p>
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
  className: "py-5",
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

export default HorizontalListings;
