"use server";

import { db } from "@/lib/db/drizzle";
import { category } from "@/lib/db/schema";
import { createPost } from "@/app/actions/post/createPost";

export const CreatePost = async () => {

    const categories = await db.select().from(category);

    return (
        <form action={createPost} className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <label htmlFor="category">Catégorie</label>
            <select name="category" id="" required>
                <option value="">Choisissez une catégorie</option>
                {categories.map((item) =>
                    <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            <label htmlFor="title">Titre</label>
            <input name="title" type="text" required />
            <label htmlFor="content">Annonce</label>
            <textarea name="content" required />
            <button className="bg-blue-200">Publier</button>
        </form>
    );
};
