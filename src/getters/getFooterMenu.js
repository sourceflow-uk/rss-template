// import data from "../../.sourceflow/main_menu.json";
// import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

import { getRoute } from "@/getters/getRoute";

export const getFooterMenu = (locale = "en") => {
  return [
    {
      label: "Recruitment Solutions",
      href: "/recruitment-solutions/why-choose-blue-arrow",
      children: [
        { label: "Why choose Blue Arrow?", href: "/recruitment-solutions/why-choose-blue-arrow" },
        { label: "Case Studies", href: "/recruitment-solutions/case-studies" },
        { label: "Labour Market Insights", href: "/recruitment-solutions/industry-insights" },
        { label: "Client Portal", href: "/already-a-client" },
        { label: "Workforce Planning", href: "/recruitment-solutions/workforce-insights/workforce-planning" },
        { label: "Improving Productivity", href: "/recruitment-solutions/workforce-insights/improving-productivity" },
        { label: "Whitepapers", href: "/recruitment-solutions/whitepapers" },
      ],
    },
    {
      label: "Become a Recruitment Superhero",
      href: "/enhancing-your-everyday",
      children: [
        { label: "Recruiter Jobs", href: "/enhancing-your-everyday/recruiter-jobs" },
        { label: "Great place to work", href: "/enhancing-your-everyday/great-place-to-work" },
        { label: "Recruiter Career Progression", href: "/enhancing-your-everyday/recruiter-career-progression" },
        { label: "Recruiter Rewards", href: "/enhancing-your-everyday/recruiter-rewards" },
      ],
    },
    {
      label: "Company",
      children: [
        { label: "About Us", href: "/enhancing-your-everyday" },
        { label: "Our CSR Agenda", href: "/enhancing-your-everyday/our-csr-agenda" },
        { label: "Our EDI Strategy", href: "/our-edi-strategy" },
        { label: "Our Branches", href: getRoute("branches") },
        { label: "Contact us", href: getRoute("contact") },
      ],
    },
    {
      label: "Corporate Governance",
      children: [
        { label: "Accessibility", href: "/accessibility" },
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "https://www.rssglobal.com/privacy-policy/", target: "_blank" },
        {
          label: "Modern Slavery Compliance",
          href: "https://www.rssglobal.com/modern-slavery-statement/",
          target: "_blank",
        },
        { label: "Gender Pay Gap Report", href: "/gender-pay-gap-2022" },
        { label: "Carbon Reduction Plan", href: "https://www.rssglobal.com/carbon-reduction-plan/", target: "_blank" },
        { label: "Cookie Policy", href: "https://www.rssglobal.com/cookie-policy/", target: "_blank" },
        { label: "Data Access Request", href: "/data-access-request" },
        { label: "EDI Statement", href: "https://www.rssglobal.com/edi_statement/", target: "_blank" },
        { label: "Whistleblowing Policy", href: "https://www.rssglobal.com/whistleblowing-policy/", target: "_blank" },
      ],
    },
  ];

  // const collection = new BaseCollection(data, locale).orderBy((i) => parseInt(i.order.en)).getItems();
  //
  // return collection
  //   .filter((i) => i.parent.id === null)
  //   .map((i) => {
  //     const children = collection.filter((i) => i.enabled).filter((c) => c.parent.id === i.id);
  //
  //     return children ? { ...i, children } : i;
  //   });
};
