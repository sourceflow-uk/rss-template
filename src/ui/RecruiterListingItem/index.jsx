import clsx from "classnames";
import PropTypes from "prop-types";
import { Col, Row, Stack } from "react-bootstrap";
import classes from "./styles.module.scss";

export const RecruiterListingItem = ({ className, name, title, email, linkedIn, phone, profile_pic, description }) => {
  return (
    <div className={clsx(className, classes.item)}>
      <Row>
        <Col xs={12} md={6}>
          <Stack className="flex-row" gap={4}>
            <div>
              <img src={profile_pic} alt="" />
            </div>
            <div>
              <h4 className="h6">{name}</h4>
              <dl className="mb-4">
                <dt className="visually-hidden">Title</dt>
                <dd>{title}</dd>
              </dl>
              <dl className="mb-0">
                <dt className="visually-hidden">Email</dt>
                <dd>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </dl>
              <dl className="mb-0">
                <dt className="visually-hidden">LinkedIn</dt>
                <dd>
                  <a href={linkedIn}>LinkedIn Profile</a>
                </dd>
              </dl>
              <dl className="mb-0">
                <dt className="visually-hidden">Phone</dt>
                <dd>
                  <a href={`tel:${phone}`}>{phone}</a>
                </dd>
              </dl>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md={6}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Col>
      </Row>
    </div>
  );
};

RecruiterListingItem.defaultProps = {
  className: "",
  name: "",
  title: "",
  email: "",
  linkedIn: "",
  phone: "",
  profile_pic: "",
  description: "",
};

RecruiterListingItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  linkedIn: PropTypes.string,
  phone: PropTypes.string,
  profile_pic: PropTypes.string,
  description: PropTypes.string,
};
