"use client";

import { editPost } from "@/app/actions/post/editPost";

interface Category {
  id: number;
  title: string;
}

interface PostToModify {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Props {
  postId: number;
  categories: Category[];
  postToModify: PostToModify;
}

export const EditPost = ({ postId, categories, postToModify }: Props) => {
  return (
    <form action={editPost} className="flex flex-col w-100 gap-1 p-1 m-1 border">
      <input type="hidden" name="postId" value={postId} />
      <label htmlFor="category">Catégorie</label>
      <select name="category" id="category" defaultValue={postToModify.categoryId}>
        <option value="0">Choisissez une catégorie</option>
        {categories.map((item) =>
          <option key={item.id} value={item.id}>{item.title}</option>)}
      </select>
      <label htmlFor="title">Titre</label>
      <input name="title" type="text" defaultValue={postToModify.title} required />
      <label htmlFor="content">Annonce</label>
      <input name="content" type="text" defaultValue={postToModify.content} required />
      <button className="bg-blue-200">Modifier</button>
    </form>
  );
};