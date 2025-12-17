"use client";
import { useState } from "react";
import { EditPost } from "./EditPost";
import { DeleteOnePost } from "./DeleteOnePost";
import { Props } from "@/app/interface";
import { CreateComment } from "../comment/CreateComment";

interface ClientProps extends Props {
    canEdit: boolean;
}

export const DisplayOnePostClient = ({
    postDetail,
    comments,
    postId,
    categories,
    postToModify,
    canEdit,
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

            <CreateComment id={postId}/>

            {comments.length > 0 ? (
                comments.map((commentItem) => (
                    <div key={commentItem.id}><h3>username</h3>{commentItem.content}</div>
                ))
            ) : (
                <div>Aucun commentaires actuellement</div>
            )}
        </div>
    );
};