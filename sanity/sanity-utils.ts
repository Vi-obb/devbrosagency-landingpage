import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Project } from "../types/Project";
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

export function getProjects(): Promise<Project[]> {
  const client = createClient(config).fetch(
    groq`*[_type == "project"]{
			_id,
			name,
			"slug": slug.current,
			"image": image.asset->url,
			"gallery": images[].asset->url,		
		      }`,
    {
      cache: "no-cache",
    }
  );

  return client;
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
	    _id,
	    _createdAt,
	    name,
	    "slug": slug.current,
	    "image": image.asset->url,
	    "gallery": images[].asset->url,
	  client,
	  date,
	  service,
	    content
	  }`,
    { slug }
  );
}

export function getProjectsForPage(excludeSlug: string): Promise<Project[]> {
  const client = createClient(config).fetch(
    groq`*[_type == "project" && slug.current != $excludeSlug]{
	    _id,
	    name,
	    "slug": slug.current,
	    "image": image.asset->url
	  }`,
    { excludeSlug } // Pass the excludeSlug as a parameter
  );

  return client;
}
