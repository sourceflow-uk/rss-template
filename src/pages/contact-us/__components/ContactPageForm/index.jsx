import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";

export default function ContactPageForm({ className }) {
  return (
    <>
      <a id="form" />
      <div className={clsx(className, classes.form)}>
        <iframe
          src="https://bot.leadoo.com/bot/visual.html?code=9f570568"
          style={{ border: "none", display: "block" }}
          width="100%"
        />
      </div>
    </>
  );
}

ContactPageForm.defaultProps = {
  className: "",
};

ContactPageForm.propTypes = {
  className: PropTypes.string,
};
