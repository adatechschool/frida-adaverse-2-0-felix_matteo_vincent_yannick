"use server";

import { user } from "@/auth-schema";
import { db } from "@/lib/db/drizzle";
import { category, post, comment } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const getComment = async () => {
    const allComments = await db.select()
        .from(comment)
        .leftJoin(user, eq(comment.userId, user.id))
        .leftJoin(post, eq(comment.postId, post.id))
        return allComments
}
