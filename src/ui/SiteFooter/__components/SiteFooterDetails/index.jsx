import PropTypes from "prop-types";
import { Stack } from "react-bootstrap";
import { getGlobal } from "@/getters/getGlobal";

export default function SiteFooterDetails({ className }) {
  const global = getGlobal();
  const website = global["_theme.company.website"];
  const phone = global["_theme.company.phone"];
  const address = global["_theme.company.address"];

  return (
    <Stack className={className} gap={{ xs: 2, lg: 4 }}>
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
  );
}

SiteFooterDetails.defaultProps = {
  className: "",
};

SiteFooterDetails.propTypes = {
  className: PropTypes.string,
};
