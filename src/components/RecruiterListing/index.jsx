import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { RecruiterListingItem } from "@/ui/RecruiterListingItem";
import PropTypes from "prop-types";

export const RecruiterListing = ({ className, items }) => {
  return (
    <div className={clsx(className)}>
      <Container>
        <Row>
          {items.map(({ name, title, email, linkedIn, phone, profile_pic, description }, k) => (
            <Col xs={12} key={k} className="mb-5">
              <RecruiterListingItem
                name={name}
                title={title}
                email={email}
                linkedIn={linkedIn}
                phone={phone}
                profile_pic={profile_pic}
                description={description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

RecruiterListing.defaultProps = {
  className: "",
  items: [],
};

RecruiterListing.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(RecruiterListingItem.propTypes),
};
