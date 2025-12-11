import { auth } from "@/auth";
import { getComment } from "./actions/comment/getComment";
import { getPost } from "./actions/post/getPost";
import { headers } from "next/headers";
import { CreatePost } from "./components/post/CreatePost";


export default async function Home() {

    const postData = await getPost();
    console.log("🐷", postData)

    const commentData = await getComment();
    console.log("🤡", commentData)

    const session = await auth.api.getSession({ headers: await headers() });
    console.log("🧜‍♀️", session?.user.id);

    return (
        <main className="flex flex-col justify-center items-center">
            <CreatePost/>
        </main>
    );
}
