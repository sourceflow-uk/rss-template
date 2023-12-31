import clsx from "classnames";
import { Stack } from "react-bootstrap";
import Email from "@/assets/Email.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Twitter from "@/assets/Twitter.svg";
import Facebook from "@/assets/Facebook.svg";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { NoSSR } from "@/ui";

export default function SocialNavigation({ className }) {
  return (
    <aside className={clsx(className, classes.socials)}>
      <NoSSR>
        {() => (
          <Stack className="p-3" gap={3}>
            <LinkedinShareButton url={window.location.href}>
              <LinkedIn width={25} height={25} />
            </LinkedinShareButton>
            <TwitterShareButton url={window.location.href}>
              <Twitter width={25} height={25} />
            </TwitterShareButton>
            <FacebookShareButton url={window.location.href}>
              <Facebook width={25} height={25} />
            </FacebookShareButton>
            <EmailShareButton url={window.location.href}>
              <Email width={25} height={25} />
            </EmailShareButton>
          </Stack>
        )}
      </NoSSR>
    </aside>
  );
}

SocialNavigation.defaultProps = {
  className: "",
};

SocialNavigation.propTypes = {
  className: PropTypes.string,
};
