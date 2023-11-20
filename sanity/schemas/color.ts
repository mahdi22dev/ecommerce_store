export const color = {
  name: "colorOption",
  title: "color option",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
