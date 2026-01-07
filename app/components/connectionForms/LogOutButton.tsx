"use client";

import { logOutAction } from "@/app/actions/connection/logOutAction";

export const LogOutButton = () => {

    return (
        <form action={logOutAction} className="flex flex-col w-100 gap-1">
            <button className="bg-red-200">Se déconnecter</button>
        </form>
    );
};
