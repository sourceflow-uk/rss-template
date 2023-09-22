import clsx from "classnames";
import { Button } from "react-bootstrap";
import classes from "./styles.module.scss";

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
