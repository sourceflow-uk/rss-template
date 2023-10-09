import clsx from "classnames";
import { Button, Col, Collapse, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import classes from "./styles.module.scss";
import Pay from "@/assets/Pay.svg";
import DoubleArrowDown from "@/assets/DoubleArrowDown.svg";
import SimilarJobCard from "@/ui/SimilarJobCard";

export const SimilarJobs = ({ className, title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx(className, classes.similar)}>
      <Container className="mw-xl">
        <Button className={clsx(classes.similar__button, { open })} variant="tertiary" onClick={() => setOpen(!open)}>
          <Pay />
          <span className="ms-3 me-auto">{title}</span>
          <div className={classes.similar__toggle}>
            <DoubleArrowDown />
          </div>
        </Button>
        <Collapse className={classes.similar__collapse} in={open}>
          <div>
            <Row className="py-4">
              {items.slice(0, 4).map(({ title, href, location, salary_package, role_type, published_at }, k) => (
                <Col key={k} xs={12} md={3}>
                  <SimilarJobCard
                    title={title}
                    href={href}
                    location={location}
                    salary_package={salary_package}
                    role_type={role_type}
                    published_at={published_at}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Collapse>
      </Container>
    </div>
  );
};

SimilarJobs.defaultProps = {
  className: "py-5",
  title: "Looking for similar job, better PAY?",
  items: [],
};

SimilarJobs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SimilarJobs;
