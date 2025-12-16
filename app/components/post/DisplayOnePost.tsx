"use client";

import { useState } from "react";
import { EditPost } from "./EditPost";
import { DeleteOnePost } from "./DeleteOnePost";

export default function DisplayOnePost({ postDetail, comments }: any) {
  const [editionMode, setEditionMode] = useState(false);

  return (
    <div>
      {editionMode ? (
        <div key={postDetail.post.id} className="border p-2">
          <h3>{postDetail.post.title}</h3>
          <h4>{postDetail.user?.name}</h4>
          <p>{postDetail.post.content}</p>
        </div>
      ) : (
        <EditPost postId={postDetail.post.id} />
      )}

      <button onClick={() => setEditionMode((v) => !v)}>Editer l'annonce</button>
      <DeleteOnePost post={postDetail.post} />

      {comments.length > 0 ? (
        comments.map((c: any) => <div key={c.comment.id}>{c.comment.content}</div>)
      ) : (
        <div>Aucun commentaires actuellement</div>
      )}
    </div>
  );
}