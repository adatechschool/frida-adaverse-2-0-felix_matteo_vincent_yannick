import { getComment } from "./actions/comment/getComment";
import { getPost } from "./actions/post/getPost";


export default async function Home() {

    const postData = await getPost();
    console.log("🐷", postData)

    const commentData = await getComment();
    console.log("🤡", commentData)

    return (
        <main className="flex flex-col justify-center items-center">


        </main>
    );
}
