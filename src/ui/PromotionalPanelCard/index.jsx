import clsx from "classnames";
import { Button } from "react-bootstrap";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { CTA } from "@/ui/CTA";

export const PromotionalPanelCard = ({ className, title, description, cta }) => {
  return (
    <div className={clsx(className, classes.card)}>
      <div className={classes.card__body}>
        <h4 className="mb-4">{title}</h4>
        <p>{description}</p>
        {cta && (
          <div>
            <Button variant="dark" href={cta.href}>
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

PromotionalPanelCard.defaultProps = {
  className: "",
  title: "",
  description: "",
  cta: null,
};

PromotionalPanelCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.shape(CTA.propTypes),
};
