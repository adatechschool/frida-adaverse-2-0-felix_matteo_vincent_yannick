import { db } from "@/lib/db/drizzle";
import { category } from "@/lib/db/schema";
import { DisplayPosts } from "./DisplayPosts";
import { getAllPosts } from "@/app/actions/post/getAllPosts";

export const DisplayCategories = async () => {
    const categoriesArray = await db.select().from(category);

    const categoriesWithPosts = await Promise.all(
        categoriesArray.map(async (item: any) => {
            const posts = await getAllPosts(item.title);
            return { item, posts };
        })
    );

    return (
        <div>
            {categoriesWithPosts.map(({ item, posts }) => (
                <div key={item.id}>
                    {posts && posts.length > 0 ? (
                        <div>
                            <h2>{item.title}</h2>
                            <DisplayPosts category={item} posts={posts} />
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};