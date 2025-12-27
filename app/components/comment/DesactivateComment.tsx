"use client";

import { desactivateComment } from "@/app/actions/comment/desactivateComment";

export const DesactivateComment = ({commentId}: {commentId: number}) => {
    const handleDelete = async (id: number) => 
        await desactivateComment(id);
    return (
        <button onClick={() => handleDelete(commentId)} className="mt-2 px-4 py-2 bg-red-200">
            Supprimer le commentaire
        </button>
    );
};