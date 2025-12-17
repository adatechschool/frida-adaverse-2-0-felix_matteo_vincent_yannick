"use client";

import { deletePost } from "@/app/actions/post/deletePost";

export const DeleteOnePost = ({postId}: {postId: number}) => {
    const handleDelete = async (id: number) => 
        await deletePost(id);
    return (
        <button onClick={() => handleDelete(postId)} className="mt-2 px-4 py-2 bg-red-200">
            Supprimer le post
        </button>
    );
};