import { auth } from "@/auth";
import { DisplayCategories } from "./components/post/DisplayCategories";
import { headers } from "next/headers";
import { db } from "@/lib/db/drizzle";
import { user } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

export default async function Home() {

    const session = await auth.api.getSession({ headers: await headers() });

    let bannedUser = false;
    if (session?.user?.id) {
        const connectedUsers = await db.select().from(user).where(eq(user.id, session.user.id));
        if (connectedUsers.length > 0) {
            bannedUser = connectedUsers[0].isBanned === true;
        }
    }

    const isDisabled = !session || bannedUser;

    return (
        <main className="flex flex-col justify-center items-center">
            {isDisabled ? (
                <></>
            ) : (
                <Link href="/publication">
                    <button className="bg-blue-200 mb-5">Créer une annonce</button>
                </Link>
            )}

            {!session && <p className="text-sm text-gray-500 mt-2 mb-5">Connectez-vous pour créer une annonce.</p>}

            <DisplayCategories />
        </main>
    );
};