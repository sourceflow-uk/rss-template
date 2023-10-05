import markerSDK from "@marker.io/browser";

export const initializeMarker = async () => {
  if (typeof window !== "undefined") {
    await markerSDK.loadWidget({
      project: "650adf0bd99272e001bce8bb",
    });
  }
};
