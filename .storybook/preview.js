import markerSDK from "@marker.io/browser";
import "../src/scss/styles.scss";

const widget = await markerSDK.loadWidget({
  project: "650adf0bd99272e001bce8bb",
});

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
