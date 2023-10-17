import PropTypes from "prop-types";
import clsx from "classnames";
import { Container } from "react-bootstrap";

export default function Divider({ className }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <hr />
      </Container>
    </div>
  );
}

Divider.defaultProps = {
  className: "",
};

Divider.propTypes = {
  className: PropTypes.string,
};
