import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { status } = useSession();
  const logOutHandler = () => {
    signOut();
  };
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1> project</h1>
      {status === "authenticated" ? (
        <>
          <button>
            <Link href="/dashboard">Dashboard</Link>
          </button>
          <button onClick={logOutHandler}> Log out</button>
        </>
      ) : null}
      {status === "unauthenticated" ? (
        <>
          <button>
            <Link href="/signin">Login</Link>
          </button>
          <button>
            <Link href="/signUp">register</Link>
          </button>
        </>
      ) : null}
    </div>
  );
}
