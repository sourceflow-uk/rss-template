import { FadeIn } from "react-slide-fade-in";
import * as components from "@/components";
import { Collapse, Container } from "react-bootstrap";
import { useState } from "react";

/**
 *
 * @param items
 * @param allowedComponents
 * @returns {JSX.Element}
 * @constructor
 */
export const Content = ({ items, additionalComponents }) => {
  const allowedComponents = {
    ...components,
    ...additionalComponents,
  };

  return (
    <section>
      {items.map(({ component, id, props }, k) => {
        const [open, setOpen] = useState(true);

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
                      onClick={() => setOpen(!open)}
                    >
                      <a className="d-block p-2" href={`#${component}`}>
                        {component}
                      </a>
                    </code>
                    <Collapse in={open}>
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
