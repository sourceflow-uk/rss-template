import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./styles.module.scss";
import { GridButton, Title } from "@/ui";

export default function GridButtonsGrid({ className, title, items, md }) {
  return (
    <div className={clsx(className, classes.grid)}>
      <Container className="mw-lg">
        <Title title={title} className="text-center" />
        <Row>
          {items.map(({ title, img, href }, k) => (
            <Col key={k} md={md} className="p-2">
              <GridButton className="text-center" title={title} img={img} href={href} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

GridButtonsGrid.defaultProps = {
  className: "py-4 py-md-5",
  title: "",
  items: [],
  md: 3,
};

GridButtonsGrid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.string,
      img: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
