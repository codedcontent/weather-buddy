import React from "react";

const ProfileCard: React.FC = () => {
  return (
    <div className="flex items-center space-x-5">
      <div
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary flex-shrink-0"
        style={{
          background: "radial-gradient(circle, #252836 0%, #525298 100%)",
        }}
      />

      <div className="-space-y-1">
        <p className="font-bold">John Doe</p>
        <p className="font-light">john@doe.com</p>
      </div>
    </div>
  );
};

export default ProfileCard;
