import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

export const NoSSR = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof children !== "function") {
      throw new Error("Children of NoSSR must be a function");
    }

    if (typeof window !== "undefined") {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="d-flex h-100 w-100 align-items-center justify-content-center">
        <Spinner />
      </div>
    );
  }

  return <>{children()}</>;
};

export default NoSSR;
