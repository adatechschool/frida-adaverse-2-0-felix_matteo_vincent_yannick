import { auth } from "@/auth";
import { getComment } from "./actions/comment/getComment";
import { getPost } from "./actions/post/getPost";
import { headers } from "next/headers";
import { CreatePost } from "./components/post/CreatePost";
import { DisplayAllPost } from "./components/post/DisplayPost";


export default async function Home() {

    return (
        <main className="flex flex-col justify-center items-center">
            <CreatePost/>
            <DisplayAllPost/>
        </main>
    );
}
