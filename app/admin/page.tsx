import Link from "next/link"

export default function Admin (){


    return (
        <div className="flex flex-col">
            <h2>Admin</h2>
            <Link href="admin/posts">Administrer les annonces</Link>
            <Link href="admin/users">Administrer les utilisateurs</Link>
        </div>
    )
}