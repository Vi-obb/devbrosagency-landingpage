interface Service {
  id: number;
  name: string;
  content: string[]; // Change the type of 'content' to string[]
}

export const services: Service[] = [
  {
    id: 1,
    name: "Web Design",
    content: ["UI/UX", "Branding","Identity"],
  },
  {
    id: 2,
    name: "Web Development",
    content: ["Custom Web App", "E-commerce", "CMS Integration"],
  },
  {
    id: 3,
    name: "Copywriting",
    content: ["Website copy", "Brand messaging", "Blog/Article Writing"],
  },
  // Add more service objects as needed
];
