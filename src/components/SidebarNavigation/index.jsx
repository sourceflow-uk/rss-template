import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

export const SidebarNavigation = ({ className, title, items }) => {
  return (
    <div className={clsx(className, classes.sidebar)}>
      <h3>{title}</h3>
      <Nav className={classes.sidebar__nav}>
        {items.map(({ label, href }) => (
          <Nav.Item>
            <Nav.Link href={href}>{label}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

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
    })
  ),
};
