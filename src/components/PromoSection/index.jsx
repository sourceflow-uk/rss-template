import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { PromoItem } from "@/ui/PromoItem";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";

export const PromoSection = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.section)}>
      <Container>
        <Row>
          {items.map(({ title, description, img, href }, k) => (
            <Col key={k}>
              <PromoItem className="h-100" title={title} description={description} img={img} href={href} />
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
  items: PropTypes.arrayOf(PropTypes.shape(PromoItem.propTypes)),
};
