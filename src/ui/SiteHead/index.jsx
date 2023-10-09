import SourceFlowHead from "@sourceflow-uk/sourceflow-head";
// import metaObject from "../../.sourceflow/metadata.json";

export const SiteHead = ({ meta }) => {
  let metaObject = {}; // TODO remove

  return (
    <SourceFlowHead metaObject={metaObject} addTracker={true} cookieExpiryTime={3000}>
      {meta?.title && <title>{meta.title}</title>}
    </SourceFlowHead>
  );
};

export default SiteHead;
