import { db } from "@/lib/db/drizzle";
import { category } from "@/lib/db/schema";
import { DisplayPost } from "./DisplayPost";
import { getPost } from "@/app/actions/post/getPost";

export const DisplayCategories = async () => {
    const categoriesArray = await db.select().from(category);

    const categoriesWithPosts = await Promise.all(
        categoriesArray.map(async (item: any) => {
            const posts = await getPost(item.title);
            return { item, posts };
        })
    );

    return (
        <div>
            {categoriesWithPosts.map(({ item, posts }) => (
                <div key={item.id}>
                    {posts && posts.length > 0 ? (
                        <div className="">
                            <h2>{item.title}</h2>
                            <DisplayPost category={item} posts={posts} />
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};