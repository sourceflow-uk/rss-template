import React from "react";
import PropTypes from "prop-types";

export default function GoogleJobsSchema({
  employment_type,
  job,
  job_currency,
  job_payment_type,
  site_name,
  site_domain_link,
  site_google_logo_link,
}) {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    title: `${job.title}`,
    description: `${job.description}`,

    identifier: {
      "@type": "PropertyValue",
      name: `${site_name}`,
      value: `${job.external_reference}`,
    },
    datePosted: `${job.created_at}`,
    validThrough: `${job.expires_at}`,
    hiringOrganization: {
      "@type": "Organization",
      name: `${site_name}`,
      sameAs: `${site_domain_link}`,
      logo: `${site_google_logo_link}`,
    },
    employmentType: `${employment_type}`,
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${job.location}`,
        addressLocality: `${job.location}`,
        addressRegion: `${job.location}`,
        addressCountry: `${job.location}`,
        postalCode: "-",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: `${job_currency}`,
      value: {
        "@type": "QuantitativeValue",
        value: `${job.salary_package}`,
        unitText: `${job_payment_type}`,
      },
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}

GoogleJobsSchema.defaultProps = {
  job_currency: "GBP",
  job_payment_type: "YEAR",
};

GoogleJobsSchema.propTypes = {
  jobs: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    external_reference: PropTypes.string,
    created_at: PropTypes.string,
    expires_at: PropTypes.string,
    location: PropTypes.string,
    salary_package: PropTypes.string,
  }),
  employment_type: PropTypes.oneOf([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACTOR",
    "TEMPORARY",
    "INTERN",
    "VOLUNTEER",
    "PER_DIEM",
    "OTHER",
  ]),
  job_currency: PropTypes.string,
  job_payment_type: PropTypes.string,
  site_name: PropTypes.string,
  site_domain_link: PropTypes.string,
  site_google_logo_link: PropTypes.string,
};
