"use client"

export const LogInForm = () => {

    return (
        <form action="" className="flex flex-col w-100 gap-1 p-1 m-1 border">
            <label htmlFor="mail">E-mail</label>
            <input name="mail" type="text" />
            <label htmlFor="password">Mot de passe</label>
            <input name="password" type="text" />
            <button className=" bg-blue-200">Se connecter</button>
        </form>
    );
}