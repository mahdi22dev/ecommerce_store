import { type SchemaTypeDefinition } from "sanity";
import { category } from "./schemas/category";
import { product } from "./schemas/prouduct";
import { productimage } from "./schemas/productImage";
import { color } from "./schemas/color";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, productimage, color],
};
