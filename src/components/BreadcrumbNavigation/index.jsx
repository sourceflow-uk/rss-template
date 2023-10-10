import { Breadcrumb, Container } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export default function BreadcrumbNavigation({ className, items }) {
  return (
    <div className={clsx(className, classes.breadcrumbs)}>
      <Container className="mw-xxl">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          {items.map(({ label, href }, k) => (
            <Breadcrumb.Item key={k} href={href}>
              {label}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Container>
    </div>
  );
}

BreadcrumbNavigation.defaultProps = {
  className: "",
  items: [],
};

BreadcrumbNavigation.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
