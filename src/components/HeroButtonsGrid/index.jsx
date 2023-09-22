import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./styles.module.scss";
import { HeroButton } from "@/ui/HeroButton";

export const HeroButtonsGrid = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.grid)}>
      <Container>
        <Row>
          {items.map(({ title, img, href }) => (
            <Col md={3} className="p-2">
              <HeroButton title={title} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

HeroButtonsGrid.defaultProps = {
  className: "",
  items: [],
};

HeroButtonsGrid.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      img: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
