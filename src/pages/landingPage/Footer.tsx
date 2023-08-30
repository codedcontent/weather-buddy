import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full mt-20 border-t border-[#EAEAEA] py-12">
      <div className="max-w-6xl mx-auto flex lg:flex-row flex-col items-center justify-between lg:gap-32 gap-4">
        {/* Company CTA */}
        <div className="w-max lg:space-y-6 space-y-2">
          {/* Logo */}
          <Link href="/">
            <p className="font-black text-2xl w-max text-wb-primary">
              Weather Buddy
            </p>
          </Link>

          <div className="w-full text-wb-gray">
            {/* Copyright */}
            <p className="text-light text-xs">
              Copyright © 2023 Weather Buddy.
            </p>
            <p className="text-light text-xs">All rights reserved</p>
          </div>

          <SocialIcons />
        </div>

        <div className="lg:w-full w-max flex lg:flex-row flex-col justify-between items-start lg:gap-0 gap-4">
          {/* Product Info */}
          <div className="w-max lg:space-y-4 space-y-1">
            {/* Header */}
            <p className="font-medium">Product</p>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <Link href="/account">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Account
                </p>
              </Link>

              <Link href="/account/weather-alerts">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Weather Alerts
                </p>
              </Link>

              <Link href="/account/notifications">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Alert Preferences
                </p>
              </Link>

              <Link href="/#pricing">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Pricing
                </p>
              </Link>
            </div>
          </div>

          {/* Legal Info */}
          <div className="w-max lg:space-y-4 space-y-1">
            {/* Header */}
            <p className="font-medium">Legal</p>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <Link href="/pos">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Privacy Policy
                </p>
              </Link>

              <Link href="/tos">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Terms of Service
                </p>
              </Link>
            </div>
          </div>

          {/* Resources Info */}
          <div className="w-max lg:space-y-4 space-y-1">
            {/* Header */}
            <p className="font-medium">Resources</p>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <Link href="/faqs">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  FAQs
                </p>
              </Link>

              <Link href="/blog">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Blog
                </p>
              </Link>

              <Link href="/customer-stories">
                <p className="font-light text-sm text-wb-gray hover:underline">
                  Customer Stories
                </p>
              </Link>
            </div>
          </div>

          {/* Contact us Info */}
          <div className="w-max lg:space-y-4 space-y-1">
            {/* Header */}
            <p className="font-medium">Contact us</p>

            {/* Links */}
            <div className="flex flex-col gap-2">
              <p className="font-light text-sm text-wb-gray">
                weatherbuddy8@gmail.com
              </p>

              <p className="font-light text-sm text-wb-gray">
                +234 902 514 5332
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
