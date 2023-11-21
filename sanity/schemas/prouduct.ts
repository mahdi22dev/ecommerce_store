export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required().positive().max(10000),
    },
    {
      name: "color",
      title: "Color",
      type: "array",
      of: [{ type: "reference", to: { type: "colorOption" } }],
      validation: (Rule: any) => Rule.required().positive(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "reference", to: { type: "productImage" } }],
      validation: (rule: any) => rule.required(),
    },
  ],
};
