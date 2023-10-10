import classes from "./styles.module.scss";
import clsx from "classnames";
import PropTypes from "prop-types";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export default function HeroButton({ className, title, img, href }) {
  return (
    <a className={clsx(className, classes.button)} href={href}>
      <SourceFlowImage className={classes.button__img} src={img} size="160x160" alt={title} />
      <div className={classes.button__body}>
        <h5 className="p-4 mx-auto mb-0">{title}</h5>
      </div>
    </a>
  );
}

HeroButton.defaultProps = {
  className: "",
  title: "",
  img: "",
  href: "",
};

HeroButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  href: PropTypes.string,
};
