import PropTypes from "prop-types";
import clsx from "classnames";
import { Container } from "react-bootstrap";
import { Description, Image, Title } from "@/ui";
import classes from "./styles.module.scss";

export default function Hero({ className, img, title, subtitle }) {
  return (
    <div className={clsx(className, classes.hero)}>
      <figure className={classes.hero__img}>
        <Image img={img} size="1920x700" alt="Hero image" />
      </figure>
      <div className={classes.hero__content}>
        <Container>
          <Title tag="h1" title={title} />
          <Description description={subtitle} tag="h2" />
        </Container>
      </div>
    </div>
  );
}

Hero.defaultProps = {
  className: "",
};

Hero.propTypes = {
  className: PropTypes.string,
};
