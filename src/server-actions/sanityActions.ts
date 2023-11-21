import { allQuery } from "@/lib/sanityQueries";
import { client } from "../../sanity/lib/client";

export async function allFetch() {
  const products = await client.fetch(allQuery);
  console.log(products);
  return products;
}