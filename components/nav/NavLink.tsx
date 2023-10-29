"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  icon?: React.FC; //Icon is an optional prop of type React.FC
  isActive?: boolean;
};

type NavButtonProps = {
  children: ReactNode;
  icon?: React.FC; // Icon is an optional prop of type React.FC
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  icon: Icon,
  isActive,
}) => {
  return (
    <Link href={href} passHref>
      <div
        className={`flex space-x-1 ${
          isActive && "bg-black py-2 px-3 rounded-3xl text-white -mt-2"
        }`}
      >
        {Icon && <Icon />}

        <span
          className={`ml-2 text-gray-800 font-semibold text-[13px] hover:font-bold ${
            isActive && "text-white"
          }`}
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

export const NavButton: React.FC<NavButtonProps> = ({
  children,
  icon: Icon,
}) => {
  return (
    <div>
      <div>
        {Icon && <Icon />}
        <span className="text-[#E74F48] group-hover:text-white ml-2">
          {children}
        </span>
      </div>
    </div>
  );
};
