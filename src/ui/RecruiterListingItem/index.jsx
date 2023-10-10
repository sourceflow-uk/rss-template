import clsx from "classnames";
import PropTypes from "prop-types";
import { Col, Row, Stack } from "react-bootstrap";
import classes from "./styles.module.scss";
import SourceFlowImage from "@sourceflow-uk/sourceflowimage";
import { trimText } from "@/functions/trimText";
import Email from "@/assets/Email.svg";
import Phone from "@/assets/Phone.svg";
import LinkedIn from "@/assets/LinkedIn.svg";

export default function RecruiterListingItem({
  className,
  name,
  title,
  email,
  linkedIn,
  phone,
  profile_pic,
  description,
}) {
  return (
    <div className={clsx(className, classes.item)}>
      <Row>
        <Col xs={12} md={6}>
          <Stack className="flex-row" gap={4}>
            <div>
              <SourceFlowImage src={profile_pic} size="167x167" alt={name} />
            </div>
            <div>
              <h4 className="h6">{name}</h4>
              <dl className="mb-4">
                <dt className="visually-hidden">Title</dt>
                <dd>{title}</dd>
              </dl>
              <dl className="mb-0">
                <dt>
                  <Email width={18} />
                  <span className="visually-hidden">Email</span>
                </dt>
                <dd className={classes.item__email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </dd>
              </dl>
              <dl className="mb-0">
                <dt>
                  <LinkedIn width={18} />
                  <span className="visually-hidden">LinkedIn</span>
                </dt>
                <dd>
                  <a href={linkedIn}>LinkedIn Profile</a>
                </dd>
              </dl>
              <dl className="mb-0">
                <dt>
                  <Phone width={18} />
                  <span className="visually-hidden">Phone</span>
                </dt>
                <dd>
                  <a href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
                </dd>
              </dl>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md={6}>
          {trimText(description, 480)}
        </Col>
      </Row>
    </div>
  );
}

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
