import zod from "zod";

export const SearchAutoSchema = zod.array(
  zod.object({
    id: zod.number(),
    title: zod.string(),
  })
);

export type SearchType = zod.infer<typeof SearchAutoSchema>;
