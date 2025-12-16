"use server";

import { getUser } from "@/app/actions/user/getUser";
import { ToggleBan } from "@/app/components/admin/ToggleBan";

interface userProps {
    name: string;
    email: string;
    createdAt: string;
}

export default async function adminUsers() {

    const allUsers = await getUser();

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Username</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Date d'inscription</th>
                    <th scope="col">Bannir/débannir</th>
                </tr>
            </thead>
            {allUsers.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <th scope="row">{item.name}</th>
                        <td>{item.email}</td>
                        <td>{item.createdAt.toDateString()}</td>
                        <td><ToggleBan userId={item.id} isBanned={item.isBanned}/></td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};
