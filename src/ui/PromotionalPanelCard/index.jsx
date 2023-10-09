import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import { trimText } from "@/functions/trimText";
import { lazy } from "react";

const CTA = lazy(() => import("@/ui/CTA"));

export const PromotionalPanelCard = ({ className, title, description, cta }) => {
  return (
    <div className={clsx(className, classes.card)}>
      <div className={classes.card__body}>
        <h4 className="mb-4">{trimText(title, 50)}</h4>
        <p>{trimText(description, 480)}</p>
        {cta && (
          <div>
            <CTA label={cta.label} href={cta.href} />
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

export default PromotionalPanelCard;
