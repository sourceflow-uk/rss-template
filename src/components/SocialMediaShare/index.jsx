import clsx from "classnames";
import { Stack } from "react-bootstrap";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import Email from "@/assets/Email.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Twitter from "@/assets/Twitter.svg";
import Facebook from "@/assets/Facebook.svg";

export const SocialMediaShare = ({ className }) => {
  return typeof window !== "undefined" ? (
    <div className={clsx(className)}>
      <h4 className="h6 fw-semibold mb-3">Share this</h4>
      <Stack className="flex-row" gap={3}>
        <LinkedinShareButton url={window.location.href}>
          <LinkedIn />
        </LinkedinShareButton>
        <TwitterShareButton url={window.location.href}>
          <Twitter />
        </TwitterShareButton>
        <FacebookShareButton url={window.location.href}>
          <Facebook />
        </FacebookShareButton>
        <EmailShareButton url={window.location.href}>
          <Email />
        </EmailShareButton>
      </Stack>
    </div>
  ) : null;
};
