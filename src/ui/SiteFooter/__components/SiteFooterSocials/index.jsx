import PropTypes from "prop-types";
import Facebook from "@/assets/Facebook.svg";
import Twitter from "@/assets/Twitter.svg";
import LinkedIn from "@/assets/LinkedIn.svg";
import YouTube from "@/assets/YouTube.svg";
import { Stack } from "react-bootstrap";
import { getGlobal } from "@/getters/getGlobal";

export default function SiteFooterSocials({ className }) {
  const global = getGlobal();
  const facebook = global["_theme.social.facebook"];
  const twitter = global["_theme.social.twitter"];
  const linkedin = global["_theme.social.linkedin"];
  const youtube = global["_theme.social.youtube"];

  return (
    <Stack className={className} gap={3}>
      {facebook && (
        <a href={facebook}>
          <Facebook width={25} height={25} />
        </a>
      )}
      {twitter && (
        <a href={twitter}>
          <Twitter width={25} height={25} />
        </a>
      )}
      {linkedin && (
        <a href={linkedin}>
          <LinkedIn width={25} height={25} />
        </a>
      )}
      {youtube && (
        <a href={youtube}>
          <YouTube width={25} height={25} />
        </a>
      )}
    </Stack>
  );
}

SiteFooterSocials.defaultProps = {
  className: "",
};

SiteFooterSocials.propTypes = {
  className: PropTypes.string,
};
