import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Button, Form } from "react-bootstrap";
import { useCallback, useState } from "react";
import { branchHelper } from "@/helpers/branchHelper";
import { getRoute } from "@/getters/getRoute";

export default function BranchLocator({ className, title }) {
  const branches = branchHelper.fetch();
  const [branch, setBranch] = useState("");

  const handleSearchClick = useCallback(() => {
    if (branch && typeof window !== "undefined") {
      window.location.href = getRoute("branch", { url_slug: branch.url_slug });
    }
  }, [branch]);

  return (
    <aside className={clsx(className, classes.locator)}>
      <h3 className="mb-3">{title}</h3>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter town</Form.Label>
          <Form.Control
            onChange={(e) => {
              if (e.target.value.length > 1) {
                const result = branches.find((i) => i.name.toLowerCase().includes(e.target.value.toLowerCase().trim()));

                if (result) {
                  setBranch(result);
                } else {
                  setBranch("");
                }
              } else {
                setBranch("");
              }
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Or select a location</Form.Label>
          <Form.Select
            value={branch?.id ?? ""}
            onChange={(e) => setBranch(branches.find((i) => i.id === e.target.value) ?? "")}
          >
            <option value="">Select</option>
            {branches.map(({ id, name }, k) => (
              <option key={k} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Button className="w-100" variant="secondary" disabled={!branch} onClick={handleSearchClick}>
            Search
          </Button>
        </Form.Group>
      </Form>
    </aside>
  );
}

BranchLocator.defaultProps = {
  className: "",
  title: "Find Branch",
};

BranchLocator.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
