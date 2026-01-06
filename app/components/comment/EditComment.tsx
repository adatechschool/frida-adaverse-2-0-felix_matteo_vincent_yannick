"use client";

import { editComment } from "@/app/actions/comment/editComment";

interface Category {
    id: number;
    title: string;
}

interface CommentToModify {

    id: number;
    content: string;
    userId: string;
    postId: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Props {
    postId: number;
    commentId: number;
    categories?: Category[];
    commentToModify: CommentToModify;
}

export const EditComment = ({ commentId, postId, commentToModify }: Props) => {
    return (
        <form action={editComment} className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <input type="hidden" name="postId" value={postId} />
            <input type="hidden" name="commentId" value={commentId} />
            <textarea name="content" defaultValue={commentToModify.content} required />
            <button className="bg-blue-200">Modifier</button>
        </form>
    );
};