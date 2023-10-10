import clsx from "classnames";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import ChevronDown from "@/assets/ChevronDown.svg";

export default function SiteHeader({ className, company_name, company_logo, nav }) {
  return (
    <Navbar className={clsx(className, classes.header)}>
      <Container className="p-0">
        <Navbar.Brand className="me-auto p-2" href="/">
          <img src={company_logo} alt={company_name} />
        </Navbar.Brand>
        <Nav>
          {nav.map(({ label, children, href, target }, k) =>
            children ? (
              <NavDropdown
                key={k}
                title={
                  <>
                    {label}
                    <ChevronDown />
                  </>
                }
                href={href}
                target={target}
                align={nav.length - 1 === k ? "end" : "start"}
              >
                {children.map(({ label, href, target }, k) => (
                  <Nav.Item key={k} className="bg-tertiary hover-bg-quaternary text-white">
                    <Nav.Link href={href} target={target}>
                      {label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </NavDropdown>
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
