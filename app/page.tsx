import { CreatePost } from "./components/post/CreatePost";
import { DisplayAllPost } from "./components/post/DisplayPost";

export default async function Home() {

    return (
        <main className="flex flex-col justify-center items-center">
            <h1>Collab'</h1>
            <CreatePost />
            <DisplayAllPost />
        </main>
    );
};
