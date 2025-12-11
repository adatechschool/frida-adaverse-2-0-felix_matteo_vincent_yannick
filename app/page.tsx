import { CreatePost } from "./components/post/CreatePost";
import { CreateComment } from "./components/comment/CreateComment";



export default async function Home() {

    return (
        <main className="flex flex-col justify-center items-center">
            <CreatePost/>
            <CreateComment/>
            

        </main>
    );
}
