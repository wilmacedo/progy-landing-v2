import { routes } from "@/config/routes";

import { Menu } from "lucide-react";
import Link from "next/link";
import { AnnouncementBar } from "./announcement-bar";
import { Button } from "./button";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 transition-shadow duration-300 bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col-reverse md:flex-col">
        <AnnouncementBar />
        <div className="flex items-center py-4">
          <Link
            aria-label="Home"
            className="flex items-center justify-center gap-2"
            href="/"
          >
            <Logo className="w-7 h-7" />
            <h1 className="font-bold whitespace-nowrap text-xl uppercase">
              progy
            </h1>
          </Link>

          <nav className="hidden ml-11 flex-row gap-3 md:flex">
            {routes.map((route) => (
              <Link key={route.path} href={route.path} legacyBehavior>
                <Button
                  variant="ghost"
                  className="text-4xl md:text-base text-secondary font-normal"
                >
                  {route.name}
                </Button>
              </Link>
            ))}
          </nav>
          <nav className="hidden ml-auto flex-shrink-0 gap-3 md:flex">
            <Link href="https://app.progy.com.br" legacyBehavior>
              <Button asChild variant="outline">
                <span className="z-1 relative">Entrar</span>
              </Button>
            </Link>
            <Link href="https://app.progy.com.br/auth/register" legacyBehavior>
              <Button asChild>
                <span className="z-1 relative">Começar</span>
              </Button>
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-3 md:hidden">
            <Button variant="ghost">
              <Menu className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
