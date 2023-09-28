import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Container, Tab, Tabs } from "react-bootstrap";
import { trimText } from "@/functions/trimText";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";

export const KeyTabListing = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.listings)}>
      <Container className="mw-lg">
        <Tabs>
          {items.map(({ title, icon, body }, k) => (
            <Tab
              title={
                <div className="d-flex py-1 gap-2">
                  <figure className="ratio ratio-1x1">
                    <SourceFlowImage src={icon} size="25x25" alt={title} />
                  </figure>
                  <span className="flex-grow-1 text-center">{trimText(title, 20)}</span>
                </div>
              }
              eventKey={k}
            >
              <div className="p-3" dangerouslySetInnerHTML={{ __html: body }} />
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
};

KeyTabListing.defaultProps = {
  className: "",
  items: [],
};

KeyTabListing.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};
