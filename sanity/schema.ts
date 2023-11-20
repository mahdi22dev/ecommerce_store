import { type SchemaTypeDefinition } from "sanity";
import { category } from "./schemas/category";
import { product } from "./schemas/prouduct";
import { productimage } from "./schemas/productimage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, productimage],
};
