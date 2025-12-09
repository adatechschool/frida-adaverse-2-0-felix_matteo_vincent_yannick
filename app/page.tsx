import Image from "next/image";
import { SignInForm } from "../components/SignInForm";
import { LogInForm } from "../components/LogInForm";
import { LogOutButton } from "../components/LogOutButton";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <SignInForm />
      <br />
      <LogInForm />
      <br />
      <LogOutButton />
    </main>
  );
}
