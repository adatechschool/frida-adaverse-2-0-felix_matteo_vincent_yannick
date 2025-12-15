import { auth } from "@/auth";
import { getComment } from "./actions/comment/getComment";
import { getPost } from "./actions/post/getPost";
import { headers } from "next/headers";
import { CreatePost } from "./components/post/CreatePost";


export default async function Home() {


    return (
        <main className="flex flex-col justify-center items-center">
            <h1>Collab'</h1>
        </main>
    );
}
