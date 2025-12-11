"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { post } from "@/lib/db/schema";
import { headers } from "next/headers";

export const createPost = async (formData: FormData) => {

    const session = await auth.api.getSession({ headers: await headers() });
    const category = formData.get("category");
    const title = formData.get("title");
    const content = formData.get("content");

    const newPost = await db.insert(post).values({
        userId: session.user.id,
        categoryId: category,
        title: title,
        content: content
    }).returning();

    return newPost;
};
