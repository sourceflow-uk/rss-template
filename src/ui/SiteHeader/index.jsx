import PropTypes from "prop-types";
import { Container, Navbar } from "react-bootstrap";
import { SiteHeaderNav } from "@/ui/SiteHeader/__components";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { getRoute } from "@/getters/getRoute";
import { getGlobal } from "@/getters/getGlobal";
import { Image } from "@/ui";

export default function SiteHeader({ className }) {
  const global = getGlobal();
  const company_name = global["_theme.company.name"];

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={clsx(className, classes.header)}>
      <Container className="p-0">
        <Navbar.Brand className={clsx(classes.header__brand, "me-auto px-2 py-0")} href={getRoute("home")}>
          <Image
            img={{
              path: "_theme.company.logo",
              src: "https://cdn.sourceflow.co.uk/__gallery/6381cc00-fd48-47b5-89cd-5ebb8cafa450",
            }}
            size="240x112"
            alt={company_name}
          />
        </Navbar.Brand>
        <Navbar.Toggle className="me-2" aria-controls="responsive-navbar-nav">
          <div>
            <span />
            <span />
            <span />
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-sm-end">
          <SiteHeaderNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

SiteHeader.defaultProps = {
  className: "",
};

SiteHeader.propTypes = {
  className: PropTypes.string,
};
