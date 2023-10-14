import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const linkStyles =
  "font-light text-wb-bgColor hover:text-wb-primary hover:font-medium";

const Header = () => {
  return (
    <header className="w-full lg:h-24 h-16 flex lg:justify-center justify-between items-center bg-white">
      {/* Logo */}
      <Link href="#">
        <p className="font-black text-xl text-wb-primary">Weather Buddy</p>
      </Link>

      <div className="flex-1 lg:flex hidden justify-between items-center">
        <div className="flex justify-center items-center w-full gap-10">
          <Link href="#features" className={`${linkStyles}`}>
            Features
          </Link>
          <Link href="#use-case" className={`${linkStyles}`}>
            Use Case
          </Link>
          <Link href="#how-it-works" className={`${linkStyles}`}>
            How it works
          </Link>
          <Link href="#pricing" className={`${linkStyles}`}>
            Pricing
          </Link>
        </div>

        <div className="flex gap-6 w-max">
          <Link
            // href="login"
            href="https://weather-buddy.ck.page/exclusive"
            target="_blank"
            className="px-12 py-1.5 border border-wb-primary rounded-2xl text-wb-primary text-sm"
          >
            <p className="w-max">Log in</p>
          </Link>

          <Link
            // href="register"
            href="https://weather-buddy.ck.page/exclusive"
            target="_blank"
            className="px-12 py-1.5 border bg-wb-primary rounded-2xl text-white text-sm"
          >
            <p className="w-max">Register</p>
          </Link>
        </div>
      </div>

      <div className="lg:hidden block text-2xl">
        <AiOutlineMenu />
      </div>
    </header>
  );
};

export default Header;
