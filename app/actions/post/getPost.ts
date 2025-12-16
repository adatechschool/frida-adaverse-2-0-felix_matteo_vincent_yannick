"use server";

import { user } from "@/lib/db/schema";
import { db } from "@/lib/db/drizzle";
import { category, post } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const getAllPosts = async () => {
    const allPosts = await db.select()
        .from(post)
        .leftJoin(user, eq(post.userId, user.id))
        .leftJoin(category, eq(post.categoryId, category.id))

    return allPosts;
};

export const getPostByCategory = async (categoryFetch: string) => {
    const allPosts = await db.select()
        .from(post)
        .leftJoin(user, eq(post.userId, user.id))
        .leftJoin(category, eq(post.categoryId, category.id))
        .where(eq(category.title, categoryFetch))

    return allPosts;
};
