"use client";

import { deletePost } from "@/app/actions/post/deletePost";

export const DeleteOnePost = (postToDelete: any) => {
    const handleDelete = async (post: any) => 
        await deletePost(post.id);
    return (
        <button onClick={() => handleDelete(postToDelete.post)} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
            Supprimer le post
        </button>
    );
};