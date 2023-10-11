import clsx from "classnames";
import { Card, Stack } from "react-bootstrap";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import Email from "@/assets/Email.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import Twitter from "@/assets/Twitter.svg";
import Facebook from "@/assets/Facebook.svg";
import classes from "./styles.module.scss";
import { NoSSR } from "@/ui";

export default function SocialShare({ className, title }) {
  return (
    <Card className={clsx(className, classes.share)}>
      <Card.Header>
        <h3>{title}</h3>
      </Card.Header>
      <Card.Body>
        <Stack className="flex-row" gap={3}>
          <NoSSR>
            {() => (
              <>
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
              </>
            )}
          </NoSSR>
        </Stack>
      </Card.Body>
    </Card>
  );
}

SocialShare.defaultProps = {
  className: "",
  title: "Share this",
};
