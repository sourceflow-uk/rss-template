import clsx from "classnames";
import { Container, Nav, Stack } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import Facebook from "@/assets/Facebook.svg";
import Twitter from "@/assets/Twitter.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import YouTube from "@/assets/YouTube.svg";
import { format } from "date-fns";

export const SiteFooter = ({
  className,
  nav,
  social_links,
  website,
  phone,
  address,
  company_name,
  company_number,
  company_logo,
  vat_number,
}) => {
  return (
    <div className={clsx(className, classes.footer, "py-md-5")}>
      <Container>
        <Stack className={clsx(classes.footer__nav, "flex-md-row mb-4 mb-lg-5")} gap={{ xs: 3, lg: 5 }}>
          {nav.map(({ title, items }, k) => (
            <div key={k}>
              <h3 className="mb-2">{title}</h3>
              <Nav className="flex-column">
                {items.map(({ label, href }, k) => (
                  <Nav.Item key={k}>
                    <Nav.Link href={href}>{label}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </div>
          ))}
        </Stack>
      </Container>
      <Container className="text-center text-md-start">
        {Object.values(social_links).filter((i) => !!i).length > 0 && (
          <Stack
            className={clsx(classes.footer__socials, "justify-content-center justify-content-lg-start mb-3 mb-lg-5")}
            gap={3}
          >
            {social_links.facebook && (
              <a href={social_links.facebook}>
                <Facebook width={25} height={25} />
              </a>
            )}
            {social_links.twitter && (
              <a href={social_links.twitter}>
                <Twitter width={25} height={25} />
              </a>
            )}
            {social_links.linkedin && (
              <a href={social_links.linkedin}>
                <LinkedIn width={25} height={25} />
              </a>
            )}
            {social_links.youtube && (
              <a href={social_links.youtube}>
                <YouTube width={25} height={25} />
              </a>
            )}
          </Stack>
        )}
        <Stack className={clsx(classes.footer__details, "flex-lg-row mb-2")} gap={{ xs: 2, lg: 4 }}>
          <dl>
            <dt className="visually-hidden">Website</dt>
            <dd>
              <a href={`//${website}`}>{website}</a>
            </dd>
          </dl>
          <dl>
            <dt className="visually-hidden">Phone</dt>
            <dd>
              <a href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
            </dd>
          </dl>
          <dl>
            <dt className="visually-hidden">Address</dt>
            <dd>{address}</dd>
          </dl>
        </Stack>
        <Stack className="flex-lg-row justify-content-between align-items-center">
          <Stack className={clsx(classes.footer__copyright, "flex-lg-row")}>
            <span className="mb-2">
              {`© ${company_name}. `}
              <br className="d-md-none" />
              {`All rights reserved ${format(new Date(), "yyyy")}`}
            </span>
            <dl className="mb-2">
              <dt>Company Number</dt>
              <dd>{company_number}</dd>
            </dl>
            <dl className="mb-2">
              <dt>VAT Number</dt>
              <dd>{vat_number}</dd>
            </dl>
          </Stack>
          <a href="/">
            <img src={company_logo} alt="" />
          </a>
        </Stack>
      </Container>
    </div>
  );
};

SiteFooter.propTypes = {
  social_links: PropTypes.shape({
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    youtube: PropTypes.string,
  }),
};