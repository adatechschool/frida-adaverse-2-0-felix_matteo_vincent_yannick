import { getPost } from "@/app/actions/post/getPost";
import { DeleteOnePost } from "./DeleteOnePost";
import { EditPost } from "./EditPost";

export const DisplayPost = async ({
    category,
    posts: initialPosts,
}: {
    category: { title: string };
    posts?: any[];
}) => {
    const posts = initialPosts ?? (await getPost(category.title));
    if (!posts || posts.length === 0) return null;

    return (
        <div className="flex flex-col gap-2 p-2 m-2 border">
            {posts.map((item) => (
                <div key={item.post.id} className="border p-2">
                    <h2 className="text-xl font-bold">{item.post.title}</h2>
                    <p>{item.post.content}</p>
                    <DeleteOnePost post={item.post} />
                    <EditPost postId={item.post.id} />
                </div>
            ))}
        </div>
    );
};