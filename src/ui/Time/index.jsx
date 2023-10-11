import Calendar from "@/assets/Calendar.svg";
import { format as formatDate } from "date-fns";
import PropTypes from "prop-types";
import { Detail } from "@/ui";

export default function Time({ className, icon, date, format }) {
  return (
    <Detail
      className={className}
      icon={icon && <Calendar width="21" height="21" />}
      value={<time>{formatDate(new Date(date), format)}</time>}
    />
  );
}

Time.defaultProps = {
  className: "",
  icon: true,
  date: "",
  format: "do LLLL, yyyy",
};

Time.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.bool,
  date: PropTypes.string,
  format: PropTypes.string,
};
