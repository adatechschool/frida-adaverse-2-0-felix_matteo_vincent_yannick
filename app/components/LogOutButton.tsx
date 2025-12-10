"use client";

import { logOutAction } from "../actions/logOutAction";

export const LogOutButton = () => {

    return (
        <form action={logOutAction} className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <button className="bg-red-200">Se déconnecter</button>
        </form>
    );
};
