"use client";

import { createComment } from "@/app/actions/comment/createComment";

export const CreateComment = ({ id }: { id: number }) => {
  return (
    <form action={createComment} className="flex flex-col">
      <label htmlFor="content">Ajouter un commentaire</label>
      <textarea
        name="content"
        placeholder="respectez les règles de la communauté 😜"
        required
      />
      <input type="hidden" name="postId" value={String(id)} />
      <button type="submit" className=" bg-blue-200">
        Publier
      </button>
    </form>
  );
};
