import PropTypes from "prop-types";
import clsx from "classnames";
import classes from "./styles.module.scss";
import { Button, Container, Stack } from "react-bootstrap";
import { DynamicText } from "@/ui";

export default function TrendingJobs({ className, title }) {
  return (
    <div className={clsx(className, classes.trending)}>
      <Container className="mw-xl text-center">
        <DynamicText path={`_component.${this}.title`} tag="h2" className="mb-5">
          {title}
        </DynamicText>
        <Stack className="flex-row flex-wrap justify-content-center" gap={2}>
          <Button className="mb-1 px-3" variant="outline-dark">
            Accountant jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Work from home jobss
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Administrator jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Immediate start jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Part time jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Manager jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Receptionist jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Warehouse jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Finance jobs
          </Button>
          <Button className="mb-1 px-3" variant="outline-dark">
            Customer service jobs
          </Button>
        </Stack>
      </Container>
    </div>
  );
}

TrendingJobs.defaultProps = {
  className: "py-5",
  title: "Trending Jobs",
  items: [],
};

TrendingJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};
