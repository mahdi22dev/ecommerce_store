import { z } from "zod";
export const allProductSchema = z.array(
  z.object({ title: z.string(), price: z.number() }).strict()
);
