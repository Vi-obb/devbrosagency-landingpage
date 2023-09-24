const service = {
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Service Name",
      type: "string",
    },
    {
      name: "content",
      title: "Service Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default service;
