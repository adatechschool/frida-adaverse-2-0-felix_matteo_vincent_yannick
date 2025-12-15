"use server";

import { createComment } from "@/app/actions/comment/createComment";

export const CreateComment = async () => {

    return (
        <form action={createComment} className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <label htmlFor="content">Commentaire</label>
            <input name="content" type="text" required />
            <button className=" bg-blue-200">Publier</button>
        </form>
    );
};
