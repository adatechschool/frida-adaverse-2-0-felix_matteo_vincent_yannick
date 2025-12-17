"use server";

import { headers } from "next/headers";
import { auth } from "@/auth";
import { db } from "@/lib/db/drizzle";
import { user } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { DisplayOnePostClient } from "./DisplayOnePostClient";
import { Props } from "@/app/interface";

export const DisplayOnePost = async ({
  postDetail,
  comments,
  postId,
  categories,
  postToModify,
}: Props) => {
  const session = await auth.api.getSession({ headers: await headers() });

  let canEdit = false;

  if (session?.user?.id) {
    const connectedUser = await db.select().from(user).where(eq(user.id, session.user.id));

    if (connectedUser && connectedUser.length > 0) {
      const bannedUser = connectedUser[0].isBanned === true;
      const isPostAuthor = postDetail.post.userId === connectedUser[0].id;
      canEdit = !!session && isPostAuthor && !bannedUser;
    }
  }

  console.log("😜 canEdit:", canEdit);

  return (
    <DisplayOnePostClient
      postDetail={postDetail}
      comments={comments}
      postId={postId}
      categories={categories}
      postToModify={postToModify}
      canEdit={canEdit}
    />
  );
};