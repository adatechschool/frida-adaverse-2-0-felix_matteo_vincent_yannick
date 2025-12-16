import { db } from "@/lib/db/drizzle";
import { post } from "@/lib/db/schema";
import TogglePost from "@/app/components/admin/TogglePost";

export default async function AdminPostsPage() {
    const allPosts = await db.select().from(post);
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Gestion des Posts</h1>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contenu</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {allPosts.map((post) => (
                            <tr key={post.id}>
                                <td className="px-6 py-4">{post.id}</td>
                                <td className="px-6 py-4">{post.content}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded ${post.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {post.isActive ? 'Actif' : 'Inactif'}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <TogglePost postId={post.id} isActive={post.isActive} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}