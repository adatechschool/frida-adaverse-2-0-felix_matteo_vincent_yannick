"use server";

import { db } from "@/lib/db/drizzle";
import { user } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const toggleBanAction = async (formData: FormData): Promise<void> => {
    const banField = formData.get("isBanned") as string;
    const userId = formData.get("userId") as string; // Garder comme string

    if (banField === "true") {
        await db.update(user)
            .set({ isBanned: false })
            .where(eq(user.id, userId));
    } else {
        await db.update(user)
            .set({ isBanned: true })
            .where(eq(user.id, userId));
    }
};