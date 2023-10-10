import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function OfficeLocator({ className, title, locations }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearchClick = () => {};

  return (
    <aside className={clsx(className, classes.locator)}>
      <h2 className="mb-3">{title}</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter town or postcode</Form.Label>
          <Form.Control value={term} onChange={(e) => setTerm(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Or select a location</Form.Label>
          <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="" disabled>
              Select
            </option>
            {locations.map(({ id, title }, k) => (
              <option key={k} value={id}>
                {title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button className="w-100" variant="dark" onClick={handleSearchClick}>
            Search
          </Button>
        </Form.Group>
      </Form>
    </aside>
  );
}

OfficeLocator.defaultProps = {
  title: "Our Branches",
  offices: [],
};

OfficeLocator.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  offices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ),
};
