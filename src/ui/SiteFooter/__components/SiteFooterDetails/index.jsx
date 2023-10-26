import PropTypes from "prop-types";
import ArrowRight from "@/assets/ArrowRight.svg";
import Location from "@/assets/Location.svg";
import { Stack } from "react-bootstrap";
import { getGlobal } from "@/getters/getGlobal";
import { getRoute } from "@/getters/getRoute";
import classes from "./styles.module.scss";
import clsx from "classnames";

export default function SiteFooterDetails({ className }) {
  const global = getGlobal();
  const address = global["_theme.company.address"];

  return (
    <Stack className={clsx(className, classes.details)} gap={{ xs: 2, lg: 4 }}>
      <dl>
        <dt className="visually-hidden">Website</dt>
        <dd>
          <a href={getRoute("contact")}>
            Get in touch <ArrowRight className="ms-2 mb-1" />
          </a>
        </dd>
      </dl>
      <dl>
        <dt>
          <span className="visually-hidden">Address</span>
        </dt>
        <dd>
          <Location width={16} height={20} className="me-2 mb-1" />
          {address}
        </dd>
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
