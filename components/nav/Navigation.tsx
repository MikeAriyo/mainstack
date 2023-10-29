"use client";

import MainstackLogo from "@/svgs/MainstackLogo";
import { NavLinkData } from "./data";
import { NavLink } from "./NavLink";
import Notification from "@/svgs/Notification";
import Message from "@/svgs/Message";
import Avi from "@/svgs/Avi";
import Menu from "@/svgs/Menu";

const Navigation: React.FC = () => {
  return (
    <div className="bg-white w-full shadow-md rounded-3xl mt-8 py-4 px-12 sticky">
      <div className="flex justify-between">
        <div>
          <MainstackLogo />
        </div>

        <nav className="flex flex-row space-x-8">
          {NavLinkData.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              icon={link.icon}
              isActive={link.isActive}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex space-x-3">
          <Notification />

          <div className="-mt-2">
            <Message />
          </div>

          <div className="bg-gray-300 rounded-3xl p-1 flex space-x-2 -mt-3">
            <div className="mt-1">
              <Avi />
            </div>

            <div className="mt-2">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
