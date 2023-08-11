import React from "react";
import AccountOption from "./AccountOption";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Account Details",
    href: "/account/account-details",
    subtitle: "Update personal information",
  },
  {
    name: "Weather Alerts",
    href: "/account/weather-alerts",
    subtitle: "Update your weather alerts",
  },
  {
    name: "Notifications",
    href: "/account/notifications",
    subtitle: "Configure notification preferences",
  },
  {
    name: "Subscription Plan",
    href: "/account/subscription-plan",
    subtitle: "Manage your subscription plan",
  },
];

const AccountOptions = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-6">
      {navLinks.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <AccountOption
            key={index}
            title={link.name}
            href={link.href}
            subtitle={link.subtitle}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
};

export default AccountOptions;
