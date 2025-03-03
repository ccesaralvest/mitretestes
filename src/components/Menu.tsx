"use client";
import React, { useState } from "react";
import { Menu as MenuIcon, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Menu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "HOME", href: "#homeHero" },
    { text: "PROFISSIONAIS", href: "#professionals" },
    { text: "GALERIA", href: "#galeria" },
    { text: "SERVIÇOS", href: "#services" },
    { text: "ÁREAS COMUNS", href: "#areasComuns" },
    { text: "PLANTAS", href: "#plantas-residenciais" },
    { text: "LOCALIZAÇÃO", href: "#maiorCrescimento" },
    { text: "GASTRONOMIA", href: "#gastronomia" },
   /*  { text: "SOBRE", href: "#showAboutUs" }, */
    { text: "CONTATO", href: "#contact" },
  ];

  return (
    <div>
      <div>
        <ul className="sm:flex justify-center items-center font-unineue text-black uppercase  header-ul-primary hidden">
          {menuItems.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`group relative text-sm sm:text-[.550em] md:text-[.700em] lg:text-[.875em] px-2 cursor-pointer transition-transform duration-300 hover:scale-[1.04] before:w-0 hover:before:content-[''] hover:before:absolute hover:before:bottom-0 hover:before:left-1/2 hover:before:-translate-x-1/2 before:border-b before:border-transparent before:transition-all before:duration-500 hover:before:w-[90%] hover:before:border-b-foreground`}
              >
                <a
                  href={menu.href}
                  className="flex justify-center items-center"
                >
                  {menu.text}
                </a>
              </li>

              {index < menuItems.length - 1 && (
                <span className={`text-black`}>|</span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="sm:hidden mt-4">
        <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
          <DropdownMenuTrigger asChild className="bg-foreground p-[2px] mr-8">
            {open ? (
              <ChevronDown className="text-white size-[27px]" />
            ) : (
              <MenuIcon className="text-white size-[27px]" />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-2">
            {menuItems.map((menu, index) => (
              <React.Fragment key={index}>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <a href={menu.href} className="flex items-center uppercase">
                      {menu.text}
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                {index !== menuItems.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
