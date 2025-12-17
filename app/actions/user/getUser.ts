"use server";

import { db } from "@/lib/db/drizzle";
import { user } from "@/lib/db/schema";

export const getUser = async () => {
    const allUsers = await db.select()
        .from(user)
    return allUsers
}

