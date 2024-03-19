import { defineCollection, z } from "astro:content";

export const collection = {
  work: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      tag: z.array(z.string()),
      image: z.string(),
      img_alt: z.string().optional(),
      link: z.string(),
    }),
  }),
};
