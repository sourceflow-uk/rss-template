import PropTypes from "prop-types";
import { format } from "date-fns";
import { Stack } from "react-bootstrap";
import { getGlobal } from "@/getters/getGlobal";

export default function SiteFooterCopyright({ className }) {
  const global = getGlobal();
  const company_name = global["_theme.company.name"];
  const company_number = global["_theme.company.number"];
  const vat_number = global["_theme.company.vat.number"];

  return (
    <Stack className={className}>
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
  );
}

SiteFooterCopyright.defaultProps = {
  className: "py-5",
};

SiteFooterCopyright.propTypes = {
  className: PropTypes.string,
};
