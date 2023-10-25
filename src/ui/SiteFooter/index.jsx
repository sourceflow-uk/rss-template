import clsx from "classnames";
import { Container, Stack } from "react-bootstrap";
import { SiteFooterCopyright, SiteFooterDetails, SiteFooterNav, SiteFooterSocials } from "./__components";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { getRoute } from "@/getters/getRoute";
import { getAsset } from "@/getters/getAsset";
import { getGlobal } from "@/getters/getGlobal";

export default function SiteFooter({ className }) {
  const global = getGlobal();
  const company_name = global["_theme.company.name"];
  const company_logo = getAsset("_theme.company.logo.white");

  return (
    <div
      className={clsx(className, classes.footer, "pt-5 pb-4")}
      style={{ backgroundImage: `url(${getAsset("_theme.footer.bg")})` }}
    >
      <Container>
        <SiteFooterNav className={clsx(classes.footer__nav, "flex-md-row mb-4")} />
      </Container>
      <Container className="my-4">
        <hr />
      </Container>
      <Container className="text-center text-md-start">
        <SiteFooterSocials
          className={clsx(classes.footer__socials, "justify-content-center justify-content-lg-start mb-4")}
        />
        <Stack className="flex-lg-row justify-content-between align-items-center" gap={3}>
          <SiteFooterDetails className={clsx(classes.footer__details, "flex-lg-row")} />
          <a className={classes.footer__brand} href={getRoute("home")}>
            <SourceFlowImage src={company_logo} size="260x44" alt={company_name} />
          </a>
        </Stack>
        <SiteFooterCopyright className={clsx(classes.footer__copyright, "flex-lg-row mt-5 small")} />
      </Container>
    </div>
  );
}

SiteFooter.defaultProps = {
  className: "",
};

SiteFooter.propTypes = {
  className: PropTypes.string,
};
