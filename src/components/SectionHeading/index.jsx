import { Container } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const SectionHeading = ({ className, title }) => {
  return (
    <div className={clsx(className, classes.heading)}>
      <Container>
        <h2>{title}</h2>
      </Container>
    </div>
  );
};

SectionHeading.defaultProps = {
  className: "",
  title: "",
};

SectionHeading.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
