import PropTypes from "prop-types";
import { Nav, Stack } from "react-bootstrap";
import { getFooterMenu } from "@/getters/getFooterMenu";

export default function SiteFooterNav({ className }) {
  const nav = getFooterMenu();

  return (
    <Stack className={className} gap={{ xs: 3, lg: 5 }}>
      {nav.map(({ label, href, children }, k) => (
        <div key={k}>
          <h3 className="h6 mb-2">
            <a href={href}>{label}</a>
          </h3>
          <Nav className="flex-column">
            {children.map(({ label, href, target }, k) => (
              <Nav.Item key={k}>
                <Nav.Link href={href} target={target}>
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
      ))}
    </Stack>
  );
}

SiteFooterNav.defaultProps = {
  className: "",
};

SiteFooterNav.propTypes = {
  className: PropTypes.string,
};
