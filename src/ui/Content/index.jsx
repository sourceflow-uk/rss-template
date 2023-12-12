import * as components from "@/components";
import { logo_carousel_helper } from "@/helpers/logo_carousel_helper";
import { useRouter } from "next/router";

export default function Content({ items, additionalComponents }) {
  const router = useRouter();
  const url_slugs = router.asPath.split("/").filter((i) => !!i);
  const [url_slug] = url_slugs.reverse();
  const logoItems = logo_carousel_helper.fetch({
    filter: (i) => i.tags.toLowerCase().includes(url_slug ?? "home") || i.tags.includes("*"),
  });

  const allowedComponents = {
    ...components,
    ...additionalComponents,
  };

  if (logoItems.length > 0) {
    items = [...items, { component: "LogoCarousel", props: { items: logoItems } }];
  }

  return (
    <section>
      {items
        .filter((i) => !!i)
        .map(({ component, id, props }, k) => (
          <div key={k}>
            <a id={id ?? component} />
            {(() => {
              if (typeof component !== "undefined" && component in allowedComponents) {
                const Component = allowedComponents[component];

                return <Component {...props} />;
              }
            })()}
          </div>
        ))}
    </section>
  );
}
/**
 *
 * @param items
 * @param allowedComponents
 * @returns {JSX.Element}
 * @constructor
 */
Content.defaultProps = {
  items: [],
  additionalComponents: {},
  demoMode: false,
};
