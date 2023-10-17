import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";

export default function NoSSR({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof children !== "function") {
      throw new Error("Children of NoSSR must be a function");
    }

    if (typeof window !== "undefined") {
      setLoading(false);
    }
  }, [children]);

  if (loading) {
    return (
      <div className="d-flex h-100 w-100 align-items-center justify-content-center">
        <Spinner />
      </div>
    );
  }

  return <>{children()}</>;
}

NoSSR.propTypes = {
  children: PropTypes.func,
};
