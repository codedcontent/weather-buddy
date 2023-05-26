import { UserAccountProfileDetailsProps } from "@/types/user";
import React from "react";

interface ProfileCardProps {
  userAccountDetails: UserAccountProfileDetailsProps;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ userAccountDetails }) => {
  return (
    <div className="flex items-center space-x-5">
      <div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary flex-shrink-0"
        style={{
          background: "radial-gradient(circle, #252836 0%, #525298 100%)",
        }}
      />

      <div className="-space-y-1">
        <p className="font-bold capitalize">
          {/* {userAccountDetails.firstName} {userAccountDetails.lastName} */}
          John Doe
        </p>
        <p className="font-light">
          john@doe.com
          {/* {userAccountDetails.email} */}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
