import Icon from "@/assets/Phone.svg";
import PropTypes from "prop-types";
import { Detail } from "@/ui";

export default function Phone({ className, number }) {
  return (
    <Detail
      className={className}
      label="Phone"
      icon={<Icon width="21" height="21" />}
      value={<a href={`tel:${number.replaceAll(" ", "")}`}>{number}</a>}
    />
  );
}

Phone.defaultProps = {
  className: "",
  number: "",
};

Phone.propTypes = {
  className: PropTypes.string,
  number: PropTypes.string,
};
