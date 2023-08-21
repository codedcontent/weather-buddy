"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center gap-4">
      <Link
        href="/"
        className="p-3 text-white bg-wb-primary outline-none rounded-md uppercase"
      >
        Home
      </Link>

      <Link
        href="/login"
        className="p-3 text-white bg-wb-primary outline-none rounded-md uppercase"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="p-3 text-white bg-wb-primary outline-none rounded-md uppercase"
      >
        register
      </Link>

      <Link
        href="/account"
        className="p-3 text-white bg-wb-primary outline-none rounded-md uppercase"
      >
        account
      </Link>
    </main>
  );
}
