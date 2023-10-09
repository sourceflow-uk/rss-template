import Calendar from "@/assets/Calendar.svg";
import { format as formatDate } from "date-fns";
import PropTypes from "prop-types";
import classes from "./styles.module.scss";
import clsx from "classnames";

export const Time = ({ className, date, format }) => {
  return (
    <time className={clsx(className, classes.time)}>
      <Calendar />
      {formatDate(new Date(date), format)}
    </time>
  );
};

Time.defaultProps = {
  className: "",
  date: "",
  format: "do LLLL, yyyy",
};

Time.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  format: PropTypes.string,
};

export default Time;
