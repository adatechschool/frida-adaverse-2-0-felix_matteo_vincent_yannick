"use client";

import { deleteComment } from "@/app/actions/comment/deleteComment";

export const DeleteComment = ({commentId}: {commentId: number}) => {
    const handleDelete = async (id: number) => 
        await deleteComment(id);
    return (
        <button onClick={() => handleDelete(commentId)} className="mt-2 px-4 py-2 bg-red-200">
            Supprimer le commentaire
        </button>
    );
};