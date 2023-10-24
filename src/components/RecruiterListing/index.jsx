import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { RecruiterListingItem } from "@/ui";

export default function RecruiterListing({ className, items }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
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
}

RecruiterListing.defaultProps = {
  className: "py-4 py-md-5",
  items: [],
};

RecruiterListing.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      email: PropTypes.string,
      linkedIn: PropTypes.string,
      phone: PropTypes.string,
      profile_pic: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};
