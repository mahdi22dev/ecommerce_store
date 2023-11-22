import { z } from "zod";
import { allProductSchema } from "../schema/schemaValidation";

export type allType = z.infer<typeof allProductSchema>;
