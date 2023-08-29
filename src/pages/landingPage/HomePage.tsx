import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div
      className="w-full flex justify-between items-center gap-10"
      style={{ height: "calc(100vh - 96px)" }}
    >
      <div className="space-y-6 w-1/2">
        <h1 className="text-6xl font-bold text-wb-primary">
          Stay Ahead of Mother Nature
        </h1>

        <p className="">
          Our cutting-edge platform delivers instant alerts that keep you in
          sync with the elements. But it doesn&apos;t stop there - our
          personalized recommendations adapt to your lifestyle, ensuring
          you&apos;re equipped for any forecast twist. Elevate your daily
          ventures with a new level of weather intelligence.
        </p>

        <div>
          <Link
            href="register"
            target="_blank"
            className="px-6 py-3 border bg-wb-primary rounded-full text-white text-sm"
          >
            Try it, it&apos;s free
          </Link>
        </div>
      </div>

      <div className="w-1/2">
        <Image
          src="/Hero Image.svg"
          width={500}
          height={500}
          className="w-full"
          alt="Weather Buddy Alerts"
        />
      </div>
    </div>
  );
};

export default HomePage;
