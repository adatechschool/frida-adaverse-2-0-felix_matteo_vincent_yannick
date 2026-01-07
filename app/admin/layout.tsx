import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { user } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Collab'",
  description: "Collab' est un site qui vous met en lien avec d'autres musiciens, afin de signer vos futures collaborations musicales",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user?.id) {
        redirect("/")
    }

    const ConnectedUser = await db.select().from(user).where(eq(user.id, session.user.id));
    if (ConnectedUser[0].role !== "admin"){
      redirect("/")
    }
  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}
