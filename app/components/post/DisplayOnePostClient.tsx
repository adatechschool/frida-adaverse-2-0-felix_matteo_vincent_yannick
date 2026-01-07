"use client";
import { useState } from "react";
import { EditPost } from "./EditPost";
import { DeleteOnePost } from "./DeleteOnePost";
import { Props } from "@/app/interface";
import { CreateComment } from "../comment/CreateComment";
import { EditComment } from "../comment/EditComment";
import { DeactivateComment } from "../comment/DeactivateComment";

interface ClientProps extends Props {
  canEdit: boolean;
  userId: string;
}

export const DisplayOnePostClient = ({
  postDetail,
  comments,
  postId,
  categories,
  postToModify,
  canEdit,
  userId,
}: ClientProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <></>
      ) : (
        <div>
          <h2>{postDetail.post.title}</h2>
          <p>{postDetail.post.content}</p>
        </div>
      )}

      {canEdit && (
        <>
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
          <DeleteOnePost postId={postId} />
        </>
      )}

      <CreateComment id={postId} />

      {comments.length > 0 ? (
        comments.map((commentItem) => (
          <div key={commentItem.comment.id}>
            <h3>{commentItem.user?.name}</h3>
            {commentItem.comment.content}
            {commentItem.comment.userId === userId && (
              <div>
                <EditComment
                  commentId={commentItem.comment.id}
                  postId={postId}
                  commentToModify={commentItem.comment}
                />
                <DeactivateComment commentId={commentItem.comment.id} />
              </div>
            )}
          </div>
        ))
      ) : (
        <div>Aucun commentaires actuellement</div>
      )}
    </div>
  );
};
