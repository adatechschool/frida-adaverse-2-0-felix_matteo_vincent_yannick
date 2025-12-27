"use client";

import { desactivatePost } from "@/app/actions/post/desactivatePost";

export const DesactivateOnePost = ({postId}: {postId: number}) => {
    const handleDelete = async (id: number) => 
        await desactivatePost(id);
    return (
        <button onClick={() => handleDelete(postId)} className="mt-2 px-4 py-2 bg-red-200">
            Supprimer l'annonce
        </button>
    );
};