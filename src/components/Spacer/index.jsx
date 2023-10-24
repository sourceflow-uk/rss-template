import PropTypes from "prop-types";
import clsx from "classnames";
import { Container } from "react-bootstrap";

export default function Spacer({ className }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl"></Container>
    </div>
  );
}

Spacer.defaultProps = {
  className: "pb-4 pb-md-5",
};

Spacer.propTypes = {
  className: PropTypes.string,
};
