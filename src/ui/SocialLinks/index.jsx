import clsx from "classnames";
import { Card, Stack } from "react-bootstrap";
import LinkedIn from "@/assets/LinkedIn.svg";
import Twitter from "@/assets/Twitter.svg";
import Facebook from "@/assets/Facebook.svg";
import classes from "./styles.module.scss";
import { NoSSR } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";

export default function SocialLinks({ className, title }) {
  const global = getGlobal();

  return (
    <Card className={clsx(className, classes.links)}>
      <Card.Header>
        <h3>{title}</h3>
      </Card.Header>
      <Card.Body>
        <Stack className="flex-row" gap={3}>
          <NoSSR>
            {() => (
              <>
                <a href={global["_theme.social.linkedin"]}>
                  <LinkedIn width={25} height={25} />
                </a>
                <a href={global["_theme.social.twitter"]}>
                  <Twitter width={25} height={25} />
                </a>
                <a href={global["_theme.social.facebook"]}>
                  <Facebook width={25} height={25} />
                </a>
              </>
            )}
          </NoSSR>
        </Stack>
      </Card.Body>
    </Card>
  );
}

SocialLinks.defaultProps = {
  className: "",
  title: "Connect with us",
};
