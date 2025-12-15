"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { post } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export const editPost = async (formData:FormData): Promise<void> => {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
    }

    const postId = parseInt(formData.get("postId") as string);
    const category = formData.get("category") as string;
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const modifiedPost = await db.update(post).set({
        categoryId: Number(category),
        title: title,
        content: content
    }).where(eq(post.id, postId));

    revalidatePath("/");
};