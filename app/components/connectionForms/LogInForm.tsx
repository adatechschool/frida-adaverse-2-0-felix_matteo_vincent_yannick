"use client";

import { useState } from "react";
import { logInAction } from "@/app/actions/connection/logInAction";
import Link from "next/link";

export const LogInForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative mt-1 ml-0">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="bg-blue-200 px-4 py-2 rounded"
            >
                Se connecter
            </button>
            <form 
                action={logInAction} 
                className={`absolute top-0 left-0 flex gap-2 p-0 bg-white border border-gray-300 rounded shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <label htmlFor="email" className="sr-only">E-mail</label>
                <input name="email" type="email" placeholder="E-mail" required className="px-0 py-0 border" />
                <label htmlFor="password" className="sr-only">Mot de passe</label>
                <input name="password" type="password" placeholder="Mot de passe" required className="px-2 py-1 border" />
                <button type="submit" className="bg-blue-200 px-3 py-1 rounded">Connexion</button>
                <button><Link href="inscription">Inscription</Link></button>
            </form>
        </div>
    );
};