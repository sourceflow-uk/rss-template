import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Card, Nav } from "react-bootstrap";

export default function SidebarNavigation({ className, title, items }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Card className={clsx(className, classes.sidebar)}>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Nav className={classes.sidebar__nav}>
          {items.map(({ label, href, children }, k) => (
            <Nav.Item key={k}>
              <Nav.Link href={href}>{label}</Nav.Link>
              {children && (
                <Nav className={classes.sidebar__subnav}>
                  {children.map(({ label, href, active }, k) => (
                    <Nav.Item key={k}>
                      <Nav.Link className={clsx({ active })} href={href}>
                        {label}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              )}
            </Nav.Item>
          ))}
        </Nav>
      </Card.Body>
    </Card>
  );
}

SidebarNavigation.defaultProps = {
  className: "",
  title: "",
  items: [],
};

SidebarNavigation.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
};
