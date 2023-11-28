import classes from "./styles.module.scss";
import clsx from "classnames";
import PropTypes from "prop-types";
import Image from "../Image";
import { Title } from "@/ui";

export default function GridButton({ className, title, img, href }) {
  return (
    <a className={clsx(className, classes.button)} href={href}>
      <Image img={img} size="100x100" alt={title} />
      <div className={classes.button__body}>
        <Title className="mt-3 mx-auto mb-0" tag="h3" title={title} />
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
