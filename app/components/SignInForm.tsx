"use client"

export const SignInForm = () => {

    return (
        <form action="" className="flex flex-col w-100 gap-1 p-1 border">
            <label htmlFor="username">Nom d'utilisateur·ice</label>
            <input name="username" type="text" />
            <label htmlFor="mail">E-mail</label>
            <input name="mail" type="text" />
            <label htmlFor="password">Mot de passe</label>
            <input name="password" type="text" />
            <button className="border-2 rounded-2xl">S'incrire</button>
        </form>
    );
}