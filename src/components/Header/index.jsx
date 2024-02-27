import { HeaderSideImage, HeaderTextOverlay } from "./components";
import { useMemo } from "react";

export default function Header({ page, back }) {
  const props = useMemo(() => {
    // prettier-ignore
    const usingNewVersion = "header_text_color" in page && !!page.header_text_color && "header_background_color" in page && !!page.header_background_color;
    // prettier-ignore
    const originalClasses = page.header_classes ?? page.cover_image ? "bg-tertiary text-white" : "bg-light text-tertiary";

    const textColor = page?.header_text_color?.toLowerCase() ?? "tertiary";
    const backgroundColor = page?.header_background_color?.toLowerCase() ?? "light";

    return {
      className: usingNewVersion ? `text-${textColor} bg-${backgroundColor}` : originalClasses,
      title: page?.title ?? null,
      description: page?.description ?? null,
      img: page?.header_image ?? page?.cover_image ?? null,
      back,
    };
  }, [page, back]);

  switch (page?.header_image_position) {
    case "50/50":
      return <HeaderSideImage {...props} />;

    case "Under Text":
    default:
      return <HeaderTextOverlay {...props} />;
  }
}
