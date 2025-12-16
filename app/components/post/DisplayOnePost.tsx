"use client";

import { useState } from "react";
import { EditPost } from "./EditPost";

interface CommentProps {
  id: number;
  userId: string;
  postId: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PostDetail {
  post: {
    id: number;
    title: string;
    content: string;
    userId: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;
  };
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  comment: CommentProps | null;
}

interface Category {
  id: number;
  title: string;
}

interface PostToModify {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  postDetail: PostDetail;
  comments: CommentProps[];
  postId: number;
  categories: Category[];
  postToModify: PostToModify;
}

export const DisplayOnePost = ({
  postDetail,
  comments,
  postId,
  categories,
  postToModify,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main>
      <div>
        {isEditing ? (
          <div></div>
        ) : (
          <div className="h2">
            {postDetail.post.title}
            <div>{postDetail.post.content}</div>
          </div>
        )}

        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-200 px-4 py-2 rounded mt-2"
        >
          {isEditing ? "Annuler l'édition" : "Editer"}
        </button>
        {isEditing && (
          <EditPost
            postId={postId}
            categories={categories}
            postToModify={postToModify}
          />
        )}
        {comments.length > 0 ? (
          comments.map((commentItem) => {
            return <div key={commentItem.id}>{commentItem.content}</div>;
          })
        ) : (
          <div>Aucun commentaires actuellement</div>
        )}
      </div>
    </main>
  );
};
