import type { Metadata } from "next";
import "./globals.css";
import { Connection } from "./components/connectionForms/Connection";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Collab'",
  description: "Collab' est un site qui vous met en lien avec d'autres musiciens, afin de signer vos futures collaborations musicales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="">
        <div className="">
          <Connection />
        </div>
        <div id="layoutTitle" className="flex justify-center mb-5">
          <Link href="/">
            <h2 className="text-4xl">Collab'</h2>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
