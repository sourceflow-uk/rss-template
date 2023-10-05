import { hexToRgb } from "@/functions/hexToRgb";
import { getGlobal } from "@/getters/getGlobal";

export const RootStyleOverrides = () => {
  const global = getGlobal();

  return (
    <style key="root-style-overrides">
      {`
        :root {
          --bs-primary: ${global["_theme.color.primary"]} !important;
          --bs-primary-rgb: ${hexToRgb(global["_theme.color.primary"])} !important;
          --bs-primary-active: ${global["_theme.color.primary.active"]} !important;
          --bs-secondary: ${global["_theme.color.secondary"]} !important;
          --bs-secondary-rgb: ${hexToRgb(global["_theme.color.secondary"])} !important;
          --bs-secondary-active: ${global["_theme.color.secondary.active"]} !important;
          --bs-tertiary: ${global["_theme.color.tertiary"]} !important;
          --bs-tertiary-rgb: ${hexToRgb(global["_theme.color.tertiary"])} !important;
          --bs-tertiary-active: ${global["_theme.color.tertiary.active"]} !important;
          --bs-quaternary: ${global["_theme.color.quaternary"]} !important;
          --bs-quaternary-rgb: ${hexToRgb(global["_theme.color.quaternary"])} !important;
          --bs-quaternary-active: ${global["_theme.color.quaternary.active"]} !important;
          --bs-light: ${global["_theme.color.light"]} !important;
          --bs-light-rgb: ${hexToRgb(global["_theme.color.light"])} !important;
          --bs-dark: ${global["_theme.color.dark"]} !important;
          --bs-dark-rgb: ${hexToRgb(global["_theme.color.dark"])} !important;
          --bs-border-radius: ${global["_theme.border.radius"]} !important;
          --bs-border-radius-sm: ${global["_theme.border.radius.sm"]} !important;
          --bs-font-family: ${global["_theme.font.family.default"]} !important;
          --bs-font-family-heading: ${global["_theme.font.family.heading"]} !important;
          --bs-font-family-heading-small: ${global["_theme.font.family.heading.small"]} !important;
        }
      `}
    </style>
  );
};
