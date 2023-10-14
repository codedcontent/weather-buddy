import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div
      className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-10 gap-0"
      style={{ minHeight: "calc(100vh - 96px)" }}
      id="#"
    >
      <div className="flex flex-col lg:gap-y-6 gap-y-2 lg:w-1/2 w-full">
        <h1 className="lg:text-6xl text-4xl font-bold text-wb-primary">
          Stay Ahead of Mother Nature
        </h1>

        <p className="lg:text-base text-sm">
          Our cutting-edge platform delivers instant alerts that keep you in
          sync with the elements. But it doesn&apos;t stop there - our
          personalized recommendations adapt to your lifestyle, ensuring
          you&apos;re equipped for any forecast twist. Elevate your daily
          ventures with a new level of weather intelligence.
        </p>

        <div className="h-max w-max mt-4">
          <Link
            // href="register"
            href="https://weather-buddy-self.vercel.app/"
            target="_blank"
            className="px-6 py-3 border bg-wb-primary rounded-full text-white text-sm"
          >
            Try it, it&apos;s free
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 w-full">
        <Image
          src="/Hero Image.svg"
          width={500}
          height={500}
          className="w-full lg:h-full h-80"
          alt="Weather Buddy Alerts"
        />
      </div>
    </div>
  );
};

export default HomePage;
