import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateSiteFooter = () => ({
  nav: faker.helpers.multiple(
    () => ({
      label: faker.lorem.words({ min: 1, max: 2 }),
      children: faker.helpers.multiple(
        () => ({
          label: faker.lorem.words({ min: 1, max: 3 }),
          href: "#",
        }),
        { count: { min: 5, max: 10 } }
      ),
    }),
    { count: { min: 3, max: 4 } }
  ),
  social_links: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    youtube: "#",
  },
  company_name: faker.company.name(),
  company_number: `${faker.number.bigInt()}`.slice(0, 6),
  company_logo: faker.image.urlPicsumPhotos({ width: 182, height: 40 }),
  vat_number: `${faker.number.bigInt()}`.slice(0, 9),
  website: faker.internet.domainName(),
  phone: faker.phone.number(),
  address: [faker.location.streetAddress(), faker.location.city(), faker.location.zipCode()].join(", "),
});
