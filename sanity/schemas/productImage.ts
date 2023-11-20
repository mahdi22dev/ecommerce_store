export const productimage = {
  name: "productImage",
  title: "Product Image",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule: any) => rule.required(),
    },
    // Other fields specific to your product image
  ],
};
