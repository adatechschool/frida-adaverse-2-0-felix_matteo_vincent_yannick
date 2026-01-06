"use server";

import { user } from "@/lib/db/schema";
import { db } from "@/lib/db/drizzle";
import { category, post } from "@/lib/db/schema";
import { and, asc, desc, eq } from "drizzle-orm";

export const getPost = async (categoryFetch: string) => {
    const allPosts = await db.select()
        .from(post)
        .leftJoin(user, eq(post.userId, user.id))
        .leftJoin(category, eq(post.categoryId, category.id))
        .where(and(eq(category.title, categoryFetch), eq(post.isActive, true)))
        .orderBy(desc(post.createdAt))
    return allPosts;
};
