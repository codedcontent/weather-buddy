import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h2 className="text-9xl text-wb-primary font-black">404</h2>
      <p className="text-2xl font-light">That page was not found</p>
      <Link href="/" className="text-wb-primary underline mt-5">
        Return Home
      </Link>
    </div>
  );
}
