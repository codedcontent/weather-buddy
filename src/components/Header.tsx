"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const MenuOverlay = () => {
    return (
      <div className="lg:hidden flex justify-between items-center w-full border-b border-b-wb-silver text-center px-6 py-4 mb-6">
        <p className="text-lg font-bold">Weather Buddy</p>

        <div
          className="text-xl"
          onClick={() => {
            setMenuExpanded(false);
          }}
        >
          <AiOutlineClose />
        </div>
      </div>
    );
  };

  //   if (menuExpanded) return <MenuOverlay />;

  return (
    <div
      className={`lg:hidden w-full ${
        menuExpanded && "absolute h-screen w-screen bg-wb-bgColor z-50"
      }`}
    >
      {/* Nav */}
      <div className="w-full flex justify-between items-center mb-6 border-b border-b-wb-silver px-6 py-4">
        <p className="text-lg font-bold">Weather Buddy</p>

        {menuExpanded ? (
          <div
            className="text-xl"
            onClick={() => {
              setMenuExpanded(false);
            }}
          >
            <AiOutlineClose />
          </div>
        ) : (
          <div
            className="text-xl"
            onClick={() => {
              setMenuExpanded(true);
            }}
          >
            <AiOutlineMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
