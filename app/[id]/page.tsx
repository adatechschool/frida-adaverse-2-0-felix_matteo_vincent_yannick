"use server";

import { notFound } from "next/navigation";
import { db } from "@/lib/db/drizzle";
import { post, user, comment, category } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { DisplayOnePost } from "../components/post/DisplayOnePost";

interface Props {
  params: { id: string };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const paramsId = Number(id);

  const postItem = await db
    .select()
    .from(post)
    .leftJoin(user, eq(post.userId, user.id))
    .leftJoin(comment, eq(comment.postId, post.id))
    .where(eq(post.id, paramsId));

  if (!postItem || postItem.length === 0) {
    return notFound();
  }

  const postDetail = postItem[0];
  const comments = await db
    .select()
    .from(comment)
    .leftJoin(user, eq(comment.userId, user.id))
    .where(and(eq(comment.postId, paramsId), eq(comment.isActive, true)));


  const categories = await db.select().from(category);

  const postToModify = await db
    .select()
    .from(post)
    .where(eq(post.id, paramsId));

  if (!postDetail) {
    return (
      <main>
        <div>Aucun post ne correspond à cette route</div>
      </main>
    );
  }

  return (
    <DisplayOnePost
      postDetail={postDetail}
      comments={comments}
      postId={paramsId}
      categories={categories}
      postToModify={postToModify[0]}
      isActive={postItem[0].post.isActive}
    />
  );
}
