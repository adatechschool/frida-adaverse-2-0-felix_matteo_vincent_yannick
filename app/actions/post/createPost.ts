"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { post } from "@/lib/db/schema";
import { headers } from "next/headers";

export const createPost = async (formData:FormData) => {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
    }

    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const newPost = await db.insert(post).values({
        userId: session.user.id,
        categoryId: Number(category),
        title: title,
        content: content
    });
};
