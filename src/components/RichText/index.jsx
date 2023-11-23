import { Container } from "react-bootstrap";
import clsx from "classnames";
import classes from "./styles.module.scss";
import Body from "@/ui/Body";

export default function RichText({ className, body }) {
  if (!body) {
    return null;
  }
  return (
    <div className={clsx(className, classes.text)}>
      <Container className="mw-lg">
        <Body body={body} />
      </Container>
    </div>
  );
}

RichText.defaultProps = {
  className: "py-4 py-md-5",
  body: null,
};
