import Image from "next/image";
import { SignUpForm } from "./components/SignUpForm";
import { LogInForm } from "./components/LogInForm";
import { LogOutButton } from "./components/LogOutButton";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <SignUpForm />
      <br />
      <LogInForm />
      <br />
      <LogOutButton />
    </main>
  );
}
