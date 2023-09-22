import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PromoCard } from "@/ui/PromoCard";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export const PromoSection = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.section)}>
      <Container>
        <Row>
          {items.map(({ title, description, img }, k) => (
            <Col key={k}>
              <PromoCard className="h-100" title={title} description={description} img={img} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

PromoSection.defaultProps = {
  className: "",
  items: [],
};

PromoSection.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
