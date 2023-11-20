import PropTypes from "prop-types";
import clsx from "classnames";
import Script from "next/script";

export default function ContactPageForm({ className }) {
  return (
    <>
      <a id="form" />
      <div className={clsx(className)}>
        <Script
          type="text/javascript"
          src="https://bot.leadoo.com/bot/visual.js?code=9f570568#seamless"
          strategy="afterInteractive"
        />
        <ld-slot name="Contact-Us-slot" />
      </div>
    </>
  );
}

ContactPageForm.defaultProps = {
  className: "py-4 py-md-5",
};

ContactPageForm.propTypes = {
  className: PropTypes.string,
};
