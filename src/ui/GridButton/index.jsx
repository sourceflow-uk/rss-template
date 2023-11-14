import classes from "./styles.module.scss";
import clsx from "classnames";
import PropTypes from "prop-types";
import Image from "../Image";

export default function GridButton({ className, title, img, href }) {
  return (
    <a className={clsx(className, classes.button)} href={href}>
      <Image className={classes.button__img} img={img} size="160x160" alt={title} />
      <div className={classes.button__body}>
        <h5 className="p-4 mx-auto mb-0">{title}</h5>
      </div>
    </a>
  );
}

GridButton.defaultProps = {
  className: "",
  title: "",
  img: "",
  href: "",
};

GridButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
