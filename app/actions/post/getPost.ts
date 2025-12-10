"use server";

import { user } from "@/auth-schema";
import { db } from "@/lib/db/drizzle";
import { category, post } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const getPost = async () => {
    const allPosts = await db.select()
        .from(post)
        .leftJoin(user, eq(post.userId, user.id))
        .leftJoin(category, eq(post.categoryId, category.id))

        return allPosts
}
