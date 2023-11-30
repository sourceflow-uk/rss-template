import clsx from "classnames";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import { Button, Form } from "react-bootstrap";
import { useCallback, useEffect, useState } from "react";
import { branch_helper } from "@/helpers/branch_helper";
import { getRoute } from "@/getters/getRoute";

export default function BranchLocator({ className, title, setAddressFunc }) {
  const branches = branch_helper.fetch();
  const [branch, setBranch] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const handleSearchClick = useCallback(() => {
    if (branch && typeof window !== "undefined") {
      window.location.href = getRoute("branch", { url_slug: branch.url_slug });
    }

    if (searchVal && setAddressFunc) {
      setAddressFunc(searchVal);
    }
  }, [branch, searchVal]);

  // useEffect(() => {
  //   const result = branches.find((i) => i.name.toLowerCase().includes(searchVal.toLowerCase().trim()));

  //   if (result) {
  //     setBranch(result);
  //   }
  // }, [searchVal]);

  return (
    <aside className={clsx(className, classes.locator)}>
      <h3 className="mb-3">
        <svg className="me-4" height="35" viewBox="0 0 29 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.5002 34.7494C14.1599 34.7494 13.8278 34.6973 13.5038 34.5931C13.1799 34.4889 12.8825 34.3327 12.6116 34.1244C9.85538 31.9368 7.09913 29.1848 4.34288 25.8681C1.58663 22.5514 0.208503 18.9494 0.208503 15.0618C0.208503 12.5966 0.642698 10.4348 1.51109 8.57643C2.37948 6.7181 3.49287 5.16463 4.85125 3.91602C6.21237 2.66602 7.74361 1.72852 9.445 1.10352C11.1464 0.478516 12.8314 0.166016 14.5002 0.166016C16.1675 0.166016 17.8519 0.478516 19.5533 1.10352C21.2547 1.72852 22.7859 2.66602 24.147 3.91602C25.5082 5.16602 26.6229 6.72018 27.4913 8.57852C28.3597 10.4368 28.7932 12.598 28.7918 15.0618C28.7918 18.9507 27.4137 22.5535 24.6575 25.8702C21.9012 29.1869 19.145 31.9382 16.3887 34.1244C16.1165 34.3327 15.8184 34.4889 15.4945 34.5931C15.1705 34.6973 14.8391 34.7494 14.5002 34.7494ZM14.5002 18.916C15.6231 18.916 16.5847 18.5077 17.385 17.691C18.1854 16.8743 18.5849 15.8938 18.5835 14.7493C18.5835 13.6035 18.1833 12.6223 17.383 11.8056C16.5827 10.9889 15.6217 10.5813 14.5002 10.5827C13.3773 10.5827 12.4156 10.991 11.6153 11.8077C10.815 12.6243 10.4155 13.6049 10.4168 14.7493C10.4168 15.8952 10.817 16.8764 11.6173 17.6931C12.4177 18.5098 13.3786 18.9174 14.5002 18.916ZM2.25017 41.8327C1.6717 41.8327 1.18646 41.6327 0.794462 41.2327C0.402462 40.8327 0.207142 40.3382 0.208503 39.7494C0.208503 39.1591 0.404503 38.6639 0.796503 38.2639C1.1885 37.8639 1.67306 37.6646 2.25017 37.666H26.7502C27.3286 37.666 27.8139 37.866 28.2059 38.266C28.5979 38.666 28.7932 39.1605 28.7918 39.7494C28.7918 40.3396 28.5958 40.8348 28.2038 41.2348C27.8118 41.6348 27.3273 41.8341 26.7502 41.8327H2.25017Z"
            fill="#006D9C"
          />
        </svg>
        {title}
      </h3>
      <Form
        onSubmit={(e) => e.preventDefault()}
        onKeyPress={(e) => { e.key === 'Enter' && handleSearchClick(); }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Enter town</Form.Label>
          <Form.Control
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setSearchVal(e.target.value);
              } else {
                setSearchVal("");
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
          <Button
            type="button"
            className="w-100"
            variant="secondary"
            disabled={!branch && !searchVal}
            onClick={handleSearchClick}
          >
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
