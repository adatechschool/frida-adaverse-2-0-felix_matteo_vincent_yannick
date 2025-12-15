import { getPost } from "@/app/actions/post/getPost";
import { DeleteOnePost } from "./DeleteOnePost";
import { EditPost } from "./EditPost";

export const DisplayAllPost = async () => {
    const posts =  await getPost();
return (
        <div className="flex flex-col w-full gap-2 p-2 m-2 border">
            {posts.map((item) => (
                <div key={item.post.id} className="border p-2">
                    <h2 className="text-xl font-bold">{item.post.title}</h2>
                    <p>{item.post.content}</p>
                    <DeleteOnePost post={item.post} />
                    <EditPost postId={item.post.id}/>
                </div>
            ))}
        </div>
    );
};