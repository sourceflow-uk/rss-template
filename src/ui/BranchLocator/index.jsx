import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Button, Form } from "react-bootstrap";
import { useCallback, useState } from "react";

export default function BranchLocator({ className, title, branches }) {
  const [branch, setBranch] = useState("");
  const [term, setTerm] = useState("");

  const handleSearchClick = useCallback(() => {
    // TODO: handle search
  }, [branch, term]);

  return (
    <aside className={clsx(className, classes.locator)}>
      <h3 className="mb-3">{title}</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter town or postcode</Form.Label>
          <Form.Control value={term} onChange={(e) => setTerm(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Or select a location</Form.Label>
          <Form.Select value={branch} onChange={(e) => setBranch(e.target.value)}>
            <option value="" disabled>
              Select
            </option>
            {branches.map(({ id, title }, k) => (
              <option key={k} value={id}>
                {title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button className="w-100" variant="secondary" onClick={handleSearchClick}>
            Search
          </Button>
        </Form.Group>
      </Form>
    </aside>
  );
}

BranchLocator.defaultProps = {
  title: "Find Branch",
  offices: [],
};

BranchLocator.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  branches: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
    })
  ),
};
