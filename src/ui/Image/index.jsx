import PropTypes from "prop-types";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import imagesMetaData from "@/../.sourceflow/image_metadata.json";

export default function Image({ className, img, size, alt }) {
  if (!img) {
    return null;
  }

  if (typeof img === "string") {
    return <SourceFlowImage className={className} src={img} size={size} alt={alt} />;
  }

  if (typeof img === "object") {
    if ("path" in img) {
      return <SourceFlowImage className={className} path={img.path} size={size} imagesMetaData={imagesMetaData} />;
    }

    if ("src" in img && img.src) {
      return <SourceFlowImage className={className} src={img.src} alt={img.alt ?? "tbd"} size={size} />;
    }
  }

  return null;
}

Image.defaultProps = {
  className: "",
  img: null,
  size: null,
  alt: null,
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.any,
  size: PropTypes.string,
  alt: PropTypes.string,
};
