import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { PromoButton } from "@/ui";

export default function PromoButtons({ className, items }) {
  return (
    <div className={clsx(className, classes.buttons)}>
      <Container className="mw-lg">
        <Row>
          {items.map(({ title, img, href }, k) => (
            <Col key={k} xs={12} md={4}>
              <PromoButton title={title} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

PromoButtons.defaultProps = {
  className: "py-5",
  items: [],
};

PromoButtons.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
