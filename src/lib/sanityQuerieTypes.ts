import { z } from "zod";
import { allProductSchema } from "./schemaValidation";

export type allType = z.infer<typeof allProductSchema>;
