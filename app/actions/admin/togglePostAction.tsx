"use server";

import { db } from "@/lib/db/drizzle";
import { eq } from "drizzle-orm";
import { post } from "@/lib/db/schema";

export const togglePostAction = async (formData: FormData): Promise<void> => {
    const isActiveField = formData.get("isActive") as string;
    const postId = parseInt(formData.get("postId") as string);

    if (isActiveField === "true") {
        await db.update(post)
            .set({ isActive: false })
            .where(eq(post.id, postId));
    } else {
        await db.update(post)
            .set({ isActive: true })
            .where(eq(post.id, postId));
    }
};