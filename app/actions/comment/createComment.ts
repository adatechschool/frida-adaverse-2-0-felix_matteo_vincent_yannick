"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { comment, post } from "@/lib/db/schema";
import { headers } from "next/headers";

export const createComment = async (formData:FormData) => {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
    }

    const content = formData.get("content") as string;

    const newComment = await db.insert(comment).values({
        userId: session.user.id,
        postId: Number(post.id),
        content: content as string,
    });
};
