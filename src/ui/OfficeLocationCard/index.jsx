import clsx from "classnames";
import classes from "./styles.module.scss";
import PropTypes from "prop-types";

export const OfficeLocationCard = ({ className, address, phone, email, map_embed_url, opening_hours }) => {
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
        <dl className="mb-0">
          <dt className="visually-hidden">Phone</dt>
          <dd dangerouslySetInnerHTML={{ __html: phone }} />
        </dl>
        <dl>
          <dt className="visually-hidden">Email</dt>
          <dd dangerouslySetInnerHTML={{ __html: email }} />
        </dl>
        <dl>
          <dt>Opening Times</dt>
          <dd dangerouslySetInnerHTML={{ __html: opening_hours }} />
        </dl>
      </div>
    </div>
  );
};

OfficeLocationCard.defaultProps = {};

OfficeLocationCard.propTypes = {
  className: PropTypes.string,
  address: PropTypes.string,
  phone_number: PropTypes.string,
  email: PropTypes.string,
  map_embed_url: PropTypes.string,
  opening_hours: PropTypes.string,
};
