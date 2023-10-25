import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import PropTypes from "prop-types";
import { Container, Navbar } from "react-bootstrap";
import { SiteHeaderNav } from "@/ui/SiteHeader/__components";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { getRoute } from "@/getters/getRoute";
import { getAsset } from "@/getters/getAsset";
import { getGlobal } from "@/getters/getGlobal";

export default function SiteHeader({ className }) {
  const global = getGlobal();
  const company_logo = getAsset("_theme.company.logo");
  const company_name = global["_theme.company.name"];

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={clsx(className, classes.header)}>
      <Container className="p-0">
        <Navbar.Brand className={clsx(classes.header__brand, "me-auto px-2 py-0")} href={getRoute("home")}>
          <SourceFlowImage src={company_logo} size="174x54" alt={company_name} />
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
