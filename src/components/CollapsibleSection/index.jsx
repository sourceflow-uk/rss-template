import clsx from "classnames";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { CollapsibleSectionItem } from "@/ui/CollapsibleSectionItem";
import { useState } from "react";

export const CollapsibleSection = ({ className, title, description, items, defaultActiveKey }) => {
  const [active, setActive] = useState(defaultActiveKey);

  return (
    <div className={clsx(className)}>
      <Container>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <div>
          {items.map(({ title, body }, k) => (
            <CollapsibleSectionItem
              title={title}
              body={body}
              active={k === active}
              onClick={() => setActive(k === active ? null : k)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

CollapsibleSection.defaultProps = {
  className: "",
  title: "",
  description: "",
  items: [],
  defaultActiveKey: 0,
};

CollapsibleSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(CollapsibleSectionItem.propTypes),
  defaultActiveKey: PropTypes.number,
};
