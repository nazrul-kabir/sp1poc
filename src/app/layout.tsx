import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import SessionProvider from "@/utils/SessionProvider";
import { getServerSession } from "next-auth";

import { Providers } from "./providers";
import Header from "@/components/ui/header";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maybank GenAI POC",
  description: "This is a generative AI proof of concept project for Maybank",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "min-h-screen")}>
        <Providers>
          <SessionProvider session={session}>
            {session ? (
              <Header />
            ) : (
              <></>
            )}
            <div>
              {children}
            </div>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
