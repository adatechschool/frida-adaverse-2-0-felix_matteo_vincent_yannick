"use server";

import { notFound } from "next/navigation";
import { getAllPosts } from "@/app/actions/post/getAllPosts";
import { getComment } from "@/app/actions/comment/getComment";
import DisplayOnePost from "../components/post/DisplayOnePost";

interface Props {
  params: { id: string };
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const paramsId = Number(id);

  const allPosts = await getAllPosts();
  const postDetail = allPosts.find((p: any) => p.post.id === paramsId);
  if (!postDetail) return notFound();

  const allComments = await getComment();
  const commentsForPost = allComments.filter((c: any) => c.comment.postId === paramsId);

  return (
    <main>
      <DisplayOnePost postDetail={postDetail} comments={commentsForPost} />
    </main>
  );
}