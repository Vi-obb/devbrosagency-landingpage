import { PortableTextBlock } from "sanity";

export type Services = {
  _id: string;
  name: string;
  content: PortableTextBlock[];
};
