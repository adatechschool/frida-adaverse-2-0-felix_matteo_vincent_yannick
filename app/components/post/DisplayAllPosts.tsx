import { getPost } from "@/app/actions/post/getPost";
import Link from "next/link";

export const DisplayAllPosts = async ({
  category,
  posts: initialPosts,
}: {
  category: { title: string };
  posts?: any[];
}) => {
  const posts = initialPosts ?? (await getPost(category.title));
  if (!posts || posts.length === 0) return null;

  return (
    <div id="container" className="flex flex-row gap-2 p-2 m-2 border overflow-x-scroll text-left">
      {posts.map((item) => (
        <div key={item.post.id} id="content" className="min-w-90 max-w-90 border p-2 h-50 overflow-y-scroll">
          <Link href={`/${item.post.id}`}>
            <h3>{item.post.title}</h3>
          </Link>
          <p className="italic">{item.user.name}</p>
          <p>{item.post.content}</p>
        </div>
      ))}
    </div>
  );
};
