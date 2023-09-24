import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  gallery: string[];
  date: Date;
  client: string;
  service: string;
  content: PortableTextBlock[];
};
