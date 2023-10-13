import clsx from "classnames";
import { Container, Dropdown, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import ChevronDown from "@/assets/ChevronDown.svg";
import { getRoute } from "@/getters/getRoute";
import { useState } from "react";

export default function SiteHeader({ className, company_name, company_logo, nav }) {
  const [show, setShow] = useState(null);

  return (
    <Navbar className={clsx(className, classes.header)}>
      <Container className="p-0">
        <Navbar.Brand className="me-auto p-2" href={getRoute("home")}>
          <img src={company_logo} alt={company_name} />
        </Navbar.Brand>
        <Nav>
          {nav.map(({ label, children, href, target }, k) =>
            children ? (
              <Dropdown
                as={Nav.Item}
                key={k}
                align={nav.length - 1 === k ? "end" : "start"}
                onMouseEnter={() => setShow(k)}
                onMouseLeave={() => setShow(null)}
              >
                <Dropdown.Toggle as={Nav.Link} href={href} target={target}>
                  {label}
                  <ChevronDown />
                </Dropdown.Toggle>
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
            )
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

SiteHeader.defaultProps = {
  className: "",
  company_name: "",
  company_logo: "",
  nav: [],
};

SiteHeader.propTypes = {
  className: PropTypes.string,
  company_name: PropTypes.string,
  company_logo: PropTypes.string,
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          href: PropTypes.string,
        })
      ),
    })
  ),
};
