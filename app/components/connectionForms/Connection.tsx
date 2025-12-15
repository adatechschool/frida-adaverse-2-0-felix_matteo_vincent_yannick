"use server";

import { LogInForm } from "./LogInForm";
import { SignUpForm } from "./SignUpForm";
import { LogOutButton } from "./LogOutButton";
import { auth } from "@/auth";
import { headers } from "next/headers";
import Link from "next/link";

export const Connection = async () => {

  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <>
      {session ?
        <LogOutButton /> : (
            <LogInForm />
        )}
    </>
  );
};
