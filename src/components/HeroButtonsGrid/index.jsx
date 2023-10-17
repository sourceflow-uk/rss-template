import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./styles.module.scss";
import { HeroButton } from "@/ui";

export default function HeroButtonsGrid({ className, title, items }) {
  return (
    <div className={clsx(className, classes.grid)}>
      <Container className="mw-lg">
        <h2 className="text-center">{title}</h2>
        <Row>
          {items.map(({ title, img, href }, k) => (
            <Col key={k} md={3} className="p-2">
              <HeroButton className="text-center" title={title} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

HeroButtonsGrid.defaultProps = {
  className: "py-5",
  title: "",
  items: [],
};

HeroButtonsGrid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
