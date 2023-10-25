import ChevronDown from "@/assets/ChevronDown.svg";
import PropTypes from "prop-types";
import { Dropdown, Nav } from "react-bootstrap";
import { getHeaderMenu } from "@/getters/getHeaderMenu";
import { useState } from "react";

export default function SiteHeaderNav({ className }) {
  const nav = getHeaderMenu();
  const [show, setShow] = useState(null);

  return (
    <Nav className={className}>
      {nav.map(({ label, children, href, target }, k) =>
        children ? (
          <Dropdown
            key={k}
            align={nav.length - 1 === k ? "end" : "start"}
            onMouseEnter={() => setShow(k)}
            onMouseLeave={() => setShow(null)}
          >
            <Nav.Item>
              <Nav.Link href={href} target={target}>
                {label}
              </Nav.Link>
              <Dropdown.Toggle variant={false}>
                <ChevronDown onClick={() => setShow(k)} />
              </Dropdown.Toggle>
            </Nav.Item>
            <Dropdown.Menu show={show === k}>
              {children.map(({ label, href, target }, k) => (
                <Dropdown.Item as={Nav.Item} key={k} className="bg-tertiary hover-bg-quaternary text-white">
                  <Nav.Link href={href} target={target}>
                    {label}
                  </Nav.Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Nav.Item key={k}>
            <Nav.Link href={href} target={target}>
              {label}
            </Nav.Link>
          </Nav.Item>
        ),
      )}
    </Nav>
  );
}

SiteHeaderNav.defaultProps = {
  className: "",
};

SiteHeaderNav.propTypes = {
  className: PropTypes.string,
};
