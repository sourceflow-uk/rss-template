import clsx from "classnames";
import { Stack } from "react-bootstrap";
import Email from "@/assets/Email.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Twitter from "@/assets/Twitter.svg";
import Facebook from "@/assets/Facebook.svg";
import WhatsApp from "@/assets/WhatsApp.svg";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const SocialNavigation = ({ className, linkedIn, twitter, facebook, whatsapp, email }) => {
  if (!linkedIn && !twitter && !facebook && !whatsapp && !email) {
    return null;
  }

  return (
    <div className={clsx(className, classes.socials)}>
      <Stack>
        {linkedIn && (
          <a href={linkedIn}>
            <LinkedIn width={25} height={25} />
          </a>
        )}
        {twitter && (
          <a href={twitter}>
            <Twitter width={25} height={25} />
          </a>
        )}
        {facebook && (
          <a href={facebook}>
            <Facebook width={25} height={25} />
          </a>
        )}
        {whatsapp && (
          <a href={whatsapp}>
            <WhatsApp width={25} height={25} />
          </a>
        )}
        {email && (
          <a href={email}>
            <Email width={25} height={25} />
          </a>
        )}
      </Stack>
    </div>
  );
};

SocialNavigation.defaultProps = {
  className: "",
  linkedIn: null,
  twitter: null,
  facebook: null,
  whatsapp: null,
  email: null,
};

SocialNavigation.propTypes = {
  className: PropTypes.string,
  linkedIn: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  whatsapp: PropTypes.string,
  email: PropTypes.string,
};
