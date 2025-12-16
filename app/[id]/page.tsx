"use server";

import { notFound } from "next/navigation";
import { db } from "@/lib/db/drizzle";
import { post, user, comment, category } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { DisplayOnePost } from "../components/post/DisplayOnePost";

interface commentProps {
  id: number;
  userId: string;
  postId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  params: { id: string };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const paramsId = Number(id);

  console.log("🥳", paramsId);

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
    .where(eq(comment.postId, paramsId));

  // Récupérer les catégories et le post à modifier pour l'édition
  const categories = await db.select().from(category);
  const postToModify = await db.select().from(post).where(eq(post.id, paramsId));

  if (!postDetail) {
    return (
      <main>
        <div>Aucun post ne correspond à cette route</div>
      </main>
    );
  }

  return <DisplayOnePost postDetail={postDetail} comments={comments} postId={paramsId} categories={categories} postToModify={postToModify[0]} />;
}