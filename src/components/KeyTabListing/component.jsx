import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Container, Tab, Tabs } from "react-bootstrap";

export const KeyTabListing = ({ className, items }) => {
  return (
    <div className={clsx(className, classes.listings)}>
      <Container className="mw-lg">
        <Tabs>
          {items.map(({ title, icon, body }, k) => (
            <Tab
              title={
                <div className="d-flex py-2 gap-2">
                  <img src={icon} alt="" />
                  <span>{title}</span>
                </div>
              }
              eventKey={k}
            >
              <div className="p-4" dangerouslySetInnerHTML={{ __html: body }} />
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
};

HoverKeyTabListing.defaultProps = {
  className: "",
  items: [],
};

HoverKeyTabListing.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      body: PropTypes.string,
    })
  ),
};
