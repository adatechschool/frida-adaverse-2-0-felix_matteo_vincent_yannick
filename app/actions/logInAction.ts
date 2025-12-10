"use server"
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export const logInAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email && !password) {
        throw Error("email and password are required");
    }
    const response = await auth.api.signInEmail({
        body: {
            email,
            password,
        },
        asResponse: true,
    });
    if (!response.ok) {
        console.error("Sign in failed:", await response.json());
        redirect("/auth/signin?error=true");
    }
    redirect("/"); // on redirige vers la home page une fois connecté
};
export const signout = async () => {
    await auth.api.signOut({ headers: await headers() }); // attention à bien passer les headers !
};