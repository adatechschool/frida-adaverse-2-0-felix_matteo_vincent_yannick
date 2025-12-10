"use client";

import { logInAction } from "@/app/actions/logInAction";

export const LogInForm = () => {

    return (
        <form action={logInAction} className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <label htmlFor="email">E-mail</label>
            <input name="email" type="text" />
            <label htmlFor="password">Mot de passe</label>
            <input name="password" type="password" />
            <button className=" bg-blue-200">Se connecter</button>
        </form>
    );
}
