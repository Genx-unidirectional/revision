import { z } from "zod";

export const SearchAutoSchema = z.array(
  z.object({
    id: z.number(),
    title: z.string(),
  })
);

export type SearchType = z.infer<typeof SearchAutoSchema>;

export const imageSchema = z.array(
  z.object({
    id: z.string(),
    author: z.string(),
    width: z.number(),
    height: z.number(),
    url: z.string().url(),
    download_url: z.string().url(),
  })
);

export type ImageSchemaType = z.infer<typeof imageSchema>;
