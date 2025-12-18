"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { comment } from "@/lib/db/schema";
import { revalidatePath } from "next/cache";

export const deleteComment = async (commentId: number) => {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
    } await db.update(comment)
        .set({ isActive: false })
        .where(eq(comment.id, commentId));

    revalidatePath("./");
};