import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['学习笔记', '项目总结', '面试准备', '随笔']).default('学习笔记'),
    order: z.number().optional(),
    demo: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    repo: z.string().optional(),
    demo: z.string().optional(),
    techStack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
