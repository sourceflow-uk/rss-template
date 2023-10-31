import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Container, ListGroup, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { parseString } from "xml2js";

export default function SitemapContent({ className }) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch(new Request(`/sitemap-0.xml`)).then((results) => {
      results.text().then((str) => {
        parseString(str, { trim: true }, function (err, result) {
          setItems(result?.urlset?.url ? result.urlset.url.map((i) => i.loc[0]) : false);
        });
      });
    });
  }, []);

  return (
    <div className={clsx(className, classes.sitemap)}>
      <Container>
        {items === null ? (
          <div className="d-flex justify-content-center py-5">
            <Spinner variant="primary" />
          </div>
        ) : (
          <ListGroup variant="flush">
            {items.map((i, k) => (
              <ListGroup.Item as="a" href={i} key={k}>
                {i}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Container>
    </div>
  );
}

SitemapContent.defaultProps = {
  className: "py-5",
};

SitemapContent.propTypes = {
  className: PropTypes.string,
};
