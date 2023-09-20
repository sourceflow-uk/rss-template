import { LatestJobs } from "./component";

const items = [
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    img: "https://picsum.photos/54/40?random=1",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    logo: "https://picsum.photos/54/40?random=1",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
  {
    title: "Job Title",
    sectors: ["Sector 1", "Sector 2", "Sector 3"],
    location: "London",
    salary_package: "£20,000",
    role_type: "Permanent",
    published_at: new Date(),
    href: "#",
  },
];

export default {
  title: "Components/LatestJobs",
  component: LatestJobs,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: items.slice(0, 6),
  },
};

export const FourJobs = {
  args: {
    items: items.slice(0, 8),
    visibleCount: 4,
  },
};
