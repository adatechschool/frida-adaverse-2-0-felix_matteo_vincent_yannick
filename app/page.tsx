import Image from "next/image";
import { SignInForm } from "./components/SignInForm";
import { LogInForm } from "./components/LogInForm";
import { LogOutButton } from "./components/LogOutButton";

export default function Home() {
  return (
    <main>
      <SignInForm />
      <br />
      <LogInForm />
      <br />
      <LogOutButton />
      {/* <LogOutButton/> */}
    </main>
  );
}
