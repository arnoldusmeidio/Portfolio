"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  const navMenu = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    // { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const pathName = usePathname();

  return (
    <header className="mb-10 mt-5 w-full max-w-7xl place-self-center px-4 text-2xl lg:mb-20">
      <nav className="flex w-full items-center justify-between">
        <Link href={"/"}>
          <p className="tracking-wider">Arnoldus Meidio</p>
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden items-center gap-10 text-xl md:flex">
            {navMenu.map((menu, index) => (
              <li key={index} className="hover:underline">
                {pathName === "/" ? (
                  menu.href == "/" ? null : (
                    <Link href={menu.href}>{menu.name}</Link>
                  )
                ) : (
                  <Link href={menu.href}>{menu.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Burger Menu */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex justify-center rounded-full"
              >
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="mr-10 grid w-36 divide-y px-0 py-0">
              <div>
                {navMenu.map((menu, index) => (
                  <li key={index} className="list-none">
                    <Button
                      variant={"ghost"}
                      className="w-full justify-start"
                      asChild
                    >
                      {pathName === "/" ? (
                        menu.href == "/" ? null : (
                          <Link href={menu.href}>{menu.name}</Link>
                        )
                      ) : (
                        <Link href={menu.href}>{menu.name}</Link>
                      )}
                    </Button>
                  </li>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
}
