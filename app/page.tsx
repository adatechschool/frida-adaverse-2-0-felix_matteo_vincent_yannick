import { CreatePost } from "./components/post/CreatePost";
import { DisplayCategories } from "./components/post/DisplayCategories";

export default async function Home() {

    return (
        <main className="flex flex-col justify-center items-center">
            <h1>Collab'</h1>
            <CreatePost />
            <DisplayCategories />
        </main>
    );
};
