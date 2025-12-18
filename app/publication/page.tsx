import { auth } from "@/auth";
import { CreatePost } from "../components/post/CreatePost";
import { headers } from "next/headers";
import { db } from "@/lib/db/drizzle";
import { user } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function Publication() {

    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        return <div>Veuillez vous connecter</div>;
    }

    const ConnectedUser = await db.select().from(user).where(eq(user.id, session.user.id));
    const bannedUser = ConnectedUser[0].isBanned === true;

    return (
        <div>
            {bannedUser ? "Vous n'avez pas accès au formulaire car vous êtes bannis" : < CreatePost /> }
        </div>
    )
};