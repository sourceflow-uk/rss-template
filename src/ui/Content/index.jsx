import { FadeIn } from "react-slide-fade-in";
import * as components from "@/components";
import { Button, ButtonGroup, Collapse } from "react-bootstrap";
import { Suspense, useState } from "react";

/**
 *
 * @param items
 * @param allowedComponents
 * @returns {JSX.Element}
 * @constructor
 */
export const Content = ({ items, additionalComponents, demoMode }) => {
  const [open, setOpen] = useState(items.reduce((acc, i, k) => ({ ...acc, [k]: true }), {}));
  const allowedComponents = {
    ...components,
    ...additionalComponents,
  };

  if (!demoMode) {
    return (
      <Suspense>
        {items.map(({ component, id, props }, k) => (
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

                return <Component {...props} />;
              }
            })()}
          </FadeIn>
        ))}
      </Suspense>
    );
  }

  const closeAll = () => {
    setOpen(items.reduce((acc, i, k) => ({ ...acc, [k]: false }), {}));
  };

  const openAll = () => {
    setOpen(items.reduce((acc, i, k) => ({ ...acc, [k]: true }), {}));
  };

  return (
    <Suspense>
      <ButtonGroup className="position-fixed z-3 bottom-0 p-3" style={{ right: 0 }}>
        <Button size="sm" variant="primary" onClick={openAll}>
          Open All
        </Button>
        <Button size="sm" variant="quaternary" onClick={closeAll}>
          Close All
        </Button>
      </ButtonGroup>
      {items.map(({ component, id, props }, k) => {
        return (
          <div key={k}>
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
          </div>
        );
      })}
    </Suspense>
  );
};

Content.defaultProps = {
  items: [],
  additionalComponents: {},
  demoMode: false,
};

export default Content;
