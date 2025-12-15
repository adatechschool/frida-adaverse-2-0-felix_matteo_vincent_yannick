"use server";

import { db } from "@/lib/db/drizzle";
import { category, post } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { editPost } from "@/app/actions/post/editPost";

export const EditPost = async ({ postId }: { postId: number }) => {
    const postToModify = await db.select().from(post).where(eq(post.id, postId))
    const categories = await db.select().from(category);

    return (
        <form action={editPost} className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <input type="hidden" name="postId" value={postId} />
            <label htmlFor="category">Catégorie</label>
            <select name="category" id="category" defaultValue={postToModify[0]?.categoryId}>
                <option value="0">Choisissez une catégorie</option>
                {categories.map((item) =>
                    <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            <label htmlFor="title">Titre</label>
            <input name="title" type="text" defaultValue={postToModify[0]?.title} required />
            <label htmlFor="content">Annonce</label>
            <input name="content" type="text" defaultValue={postToModify[0]?.content} required />
            <button className="bg-blue-200">Modifier</button>
        </form>
    );
};