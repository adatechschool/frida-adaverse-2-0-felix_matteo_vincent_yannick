"use client";

import { deactivateComment } from "@/app/actions/comment/deactivateComment";

export const DeactivateComment = ({commentId}: {commentId: number}) => {
    const handleDelete = async (id: number) => 
        await deactivateComment(id);
    return (
        <button onClick={() => handleDelete(commentId)} className="mt-2 px-4 py-2 bg-red-200">
            Supprimer le commentaire
        </button>
    );
};