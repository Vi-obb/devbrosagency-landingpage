const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "client",
      title: "Client Name",
      type: "string",
    },
    {
      name: "service",
      title: "Service",
      type: "string",
    },
    {
      name: "date",
      title: "Project Date",
      type: "datetime",
    },

    {
      name: "images",
      title: "Project Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
