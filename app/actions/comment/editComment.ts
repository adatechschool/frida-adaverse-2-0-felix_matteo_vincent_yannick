"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { comment } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const editComment = async (formData: FormData): Promise<void> => {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
    }

    const postId = parseInt(formData.get("postId") as string);
    const commentId = parseInt(formData.get("commentId") as string);
    const content = formData.get("content") as string;

    const modifiedComment = await db.update(comment).set({

        content: content
    }).where(eq(comment.id, commentId));

    redirect(`/${postId}`);
};