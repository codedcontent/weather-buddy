import React from "react";
import AccountOption from "./AccountOption";

type Props = {};

const AccountOptions = (props: Props) => {
  return (
    <div className="space-y-6">
      <AccountOption
        title="account details"
        href="/account-details"
        subtitle="Personal information, Email"
      />

      <AccountOption
        title="account details"
        href="/account-details"
        subtitle="Personal information, Email"
      />
    </div>
  );
};

export default AccountOptions;
