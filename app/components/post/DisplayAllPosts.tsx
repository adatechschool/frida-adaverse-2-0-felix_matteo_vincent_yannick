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
    <div id="container" className="flex flex-col text-left gap-2 p-2 m-2 md:flex-row md:overflow-x-scroll lg:flex-row lg:md:overflow-x-scroll">
      {posts.map((item) => (
        <Link key={item.post.id} href={`/${item.post.id}`}>
          <div id="content" className="min-w-90 max-w-90 bg-[#EFEFEF] p-2 h-50 overflow-y-scroll rounded-xl no-scrollbar">

            <h3 className="justify-self-center">{item.post.title}</h3>

            <p className="italic justify-self-center">{item.user.name}</p>
            <br />
            <p>{item.post.content}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
