"use server";

import { db } from "@/lib/db/drizzle";
import { category } from "@/lib/db/schema";
import { createPost } from "@/app/actions/post/createPost";

export const CreatePost = async () => {

    const categories = await db.select().from(category);

    return (
        <form action={createPost} className="flex flex-col bg-[#EFEFEF] rounded-xl w-100 gap-2 p-2">
            <label htmlFor="category">Catégorie</label>
            <select className="bg-white rounded-xl p-2" name="category" id="" required>
                <option value="">Choisissez une catégorie</option>
                {categories.map((item) =>
                    <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            <label htmlFor="title">Titre</label>    
            <input name="title" className="bg-white rounded-xl" type="text" required />
            <label htmlFor="content">Annonce</label>
            <textarea name="content" className="bg-white rounded-xl" required />
            <button className="bg-blue-200">Publier</button>
        </form>
    );
};
