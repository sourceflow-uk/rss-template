import { Collapse } from "react-bootstrap";
import { useState } from "react";

export const CollapsibleContent = ({ className, title, body }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={className}>
      <details>
        <summary onClick={() => setShow(!show)}>{title}</summary>
        <Collapse in={show}>
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </Collapse>
      </details>
    </div>
  );
};
