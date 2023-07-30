import React from "react";
import AccountOption from "./AccountOption";

const AccountOptions = () => {
  return (
    <div className="space-y-6">
      <AccountOption
        title="account details"
        href="/account-details"
        subtitle="Personal information, Email"
      />

      <AccountOption
        title="weather alerts"
        href="/weather-alerts"
        subtitle="Personal information, Email"
      />

      <AccountOption
        title="notifications"
        href="/notifications"
        subtitle="Personal information, Email"
      />

      <AccountOption
        title="subscription plan"
        href="/subscription-plan"
        subtitle="Personal information, Email"
      />
    </div>
  );
};

export default AccountOptions;
