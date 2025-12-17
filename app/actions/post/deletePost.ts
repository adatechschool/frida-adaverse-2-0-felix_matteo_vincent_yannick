"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { post } from "@/lib/db/schema";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export const deletePost = async (postId: number) => {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        throw new Error("Utilisateur non authentifié");
    }    
    await db.delete(post).where(eq(post.id, postId));
    redirect("/");
    
};