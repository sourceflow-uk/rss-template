import { FadeIn } from "react-slide-fade-in";
import * as components from "@/components";
import { Collapse } from "react-bootstrap";
import { useState } from "react";

/**
 *
 * @param items
 * @param allowedComponents
 * @returns {JSX.Element}
 * @constructor
 */
export const Content = ({ items, additionalComponents }) => {
  const [open, setOpen] = useState(items.reduce((acc, i, k) => ({ ...acc, [k]: true }), {}));
  const allowedComponents = {
    ...components,
    ...additionalComponents,
  };

  return (
    <section>
      {items.map(({ component, id, props }, k) => {
        return (
          <FadeIn
            from="bottom"
            positionOffset={0}
            triggerOffset={0}
            durationInMilliseconds={500}
            delayInMilliseconds={100}
            key={k}
          >
            {id && <a id={id} />}
            {(() => {
              if (typeof component !== "undefined" && component in allowedComponents) {
                const Component = allowedComponents[component];

                return (
                  <>
                    <a id={component} />
                    <code
                      className="d-block bg-tertiary hover-bg-quaternary border-bottom text-white"
                      style={{ cursor: "pointer" }}
                      onClick={() => setOpen({ ...open, [k]: !open[k] })}
                    >
                      <a className="d-block p-2" href={`#${component}`}>
                        {component}
                      </a>
                    </code>
                    <Collapse in={open[k]}>
                      <div>
                        <Component {...props} />
                      </div>
                    </Collapse>
                  </>
                );
              }
            })()}
          </FadeIn>
        );
      })}
    </section>
  );
};

Content.defaultProps = {
  items: [],
  additionalComponents: {},
};
