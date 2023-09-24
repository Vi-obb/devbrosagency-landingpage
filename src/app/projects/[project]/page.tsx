
import {
  getProject,
  getProjectsForPage,
} from "../../../../sanity/sanity-utils";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  // const slug = params.project;
  // const project = await getProject(slug);

  // const projects = await getProjectsForPage(slug);

  return <div>{/* map data here */}</div>;
}
