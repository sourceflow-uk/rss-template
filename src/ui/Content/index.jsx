import { FadeIn } from "react-slide-fade-in";
import * as components from "@/components";
import { Container } from "react-bootstrap";

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

              return (
                <>
                  <code className="d-block bg-primary text-white p-2">
                    <Container className="mw-xl">{component}</Container>
                  </code>
                  <Component {...props} />
                </>
              );
            }
          })()}
        </FadeIn>
      ))}
    </section>
  );
};

Content.defaultProps = {
  items: [],
  additionalComponents: {},
};
