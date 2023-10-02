import clsx from "classnames";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import classes from "./styles.module.scss";

export const SiteHeader = ({ className, company_name, company_logo, nav }) => {
  return (
    <Navbar className={clsx(className, classes.header)}>
      <Container className="p-0">
        <Navbar.Brand className="me-auto p-2">
          <img src={company_logo} alt={company_name} />
        </Navbar.Brand>
        {nav.map(({ title, items }, k) => (
          <NavDropdown key={k} title={title} align={nav.length - 1 === k ? "end" : "start"}>
            {items.map(({ label, href }, k) => (
              <Nav.Item key={k}>
                <Nav.Link href={href}>{label}</Nav.Link>
              </Nav.Item>
            ))}
          </NavDropdown>
        ))}
      </Container>
    </Navbar>
  );
};
