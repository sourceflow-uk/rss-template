import { LatestJobs } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 2, max: 4 }),
      sectors: faker.helpers.multiple(() => faker.lorem.words({ min: 1, max: 2 }), { count: { min: 1, max: 3 } }),
      location: faker.location.city(),
      salary_package: faker.finance.amount({ symbol: "£", min: 12000, max: 100000, dec: 0 }),
      role_type: "Permanent",
      published_at: faker.date.past(),
      href: "#",
    }),
    { count: 10 }
  );

export default {
  title: "Components/LatestJobs",
  component: LatestJobs,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};

export const FourJobs = {
  args: {
    items: generateItems(),
    visibleCount: 4,
  },
};
