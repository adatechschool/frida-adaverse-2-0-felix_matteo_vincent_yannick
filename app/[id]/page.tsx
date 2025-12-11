"use server";

import { notFound } from "next/navigation";
import { db } from "@/lib/db/drizzle";
import { post, user, comment } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

interface commentProps { id: number; userId: string; postId: number; content: string; createdAt: Date; updatedAt: Date; }
interface Props { params: { id: string } };

export default async function PostPage({ params }: Props) {

    const paramsId = await params.id;

    console.log("🥳",paramsId);

    const postItem = await db.select().from(post)
        .leftJoin(user, eq(post.userId, user.id))
        .leftJoin(comment, eq(comment.postId, post.id))
        .where(eq(post.id, paramsId));

    if (!postItem) {
        return notFound();  
    }

    const comments = await db.select().from(comment).where(eq(comment.postId, paramsId));

    return (
        <main>
            {/* <h1>{postItem.post.title}</h1>
            <p>Posté par {postItem.user?.name}</p>
            <p>{postItem.post.content}</p>
            {/* {comments.map((commentItem: commentProps) =>
                <p key={commentItem.id}>{commentItem.content}</p>)} */}
        </main>
    )
};
