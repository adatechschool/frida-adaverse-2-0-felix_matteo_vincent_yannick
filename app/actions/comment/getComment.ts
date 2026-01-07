"use server";

import { db } from "@/lib/db/drizzle";
import { post, comment, user } from "@/lib/db/schema";
import { asc, desc, eq } from "drizzle-orm";

export const getComment = async () => {
    const allComments = await db.select()
        .from(comment)
        .leftJoin(user, eq(comment.userId, user.id))
        .leftJoin(post, eq(comment.postId, post.id))
        .where(eq(comment.isActive, true))
        .orderBy(asc(comment.createdAt))
    return allComments
}
