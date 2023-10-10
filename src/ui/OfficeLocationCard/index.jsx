import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";
import Email from "@/assets/Email.svg";
import Phone from "@/assets/Phone.svg";
import { trimText } from "@/functions/trimText";

export default function OfficeLocationCard({ className, address, phone, email, map_embed_url, opening_hours }) {
  return (
    <div className={clsx(className, classes.card)}>
      <div className={classes.card__map}>
        <iframe
          src={map_embed_url}
          width="480"
          height="480"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className={classes.card__body}>
        <address dangerouslySetInnerHTML={{ __html: address }} />
        <dl className="mb-2">
          <dt>
            <Phone width={18} />
            <span className="visually-hidden">Phone</span>
          </dt>
          <dd>
            <a href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>
          </dd>
        </dl>
        <dl>
          <dt>
            <Email width={18} />
            <span className="visually-hidden">Email</span>
          </dt>
          <dd>
            <a href={`mailto:${email}`}>{trimText(email, 26)}</a>
          </dd>
        </dl>
        <dl className="d-block">
          <dt>Opening Times</dt>
          <dd dangerouslySetInnerHTML={{ __html: opening_hours }} />
        </dl>
      </div>
    </div>
  );
}

OfficeLocationCard.defaultProps = {};

OfficeLocationCard.propTypes = {
  className: PropTypes.string,
  address: PropTypes.string,
  phone_number: PropTypes.string,
  email: PropTypes.string,
  map_embed_url: PropTypes.string,
  opening_hours: PropTypes.string,
};
