import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Services } from "../types/Service";

export function getServices(): Promise<Services[]> {
  const services = createClient(config).fetch(
    groq`*[_type == "service"]{
			      _id,      
			      name,
			      content,      
			    }`,
    {
      cache: "no-cache",
    }
  );

  return services;
}

export function getApproach(): Promise<Services[]> {
  const approach = createClient(config).fetch(
    groq`*[_type == "approach"]{
			      _id,      
			      name,
			      content,      
			    }`,
    {
      cache: "no-cache",
    }
  );

  return approach;
}
