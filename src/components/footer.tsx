import { social } from "@/config/footer";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <div className="bg-[#1C1D1F] text-white relative">
      <div className="flex flex-col gap-10 md:gap-8 pt-10 pb-5 md:py-16 px-6 mx-auto w-full max-w-7xl">
        <div className="flex flex-row justify-between">
          <Link
            aria-label="Home"
            className="flex items-center justify-center gap-2"
            href="/"
          >
            <Logo theme="dark" className="w-6 h-6" />
            <h1 className="font-bold whitespace-nowrap uppercase">progy</h1>
          </Link>
          <div className="flex md:hidden flex-row items-center">
            {social.map((social) => (
              <Link
                key={social.href}
                className="py-2 px-2 text-neutral-300 hover:text-white transition-colors"
                target="_blank"
                href={social.href}
                aria-label={social.label}
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="hidden md:block border-neutral-700" />
      <div className="pt-5 pb-14 px-8 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between text-neutral-500 text-xs">
          <div className="text-center">
            <span>
              © {new Date().getFullYear()} Progy. Todos os direitos reservados.
            </span>
          </div>
          <div className="flex flex-row gap-1 items-center justify-end text-xs">
            <Link
              className="transition-colors hover:text-neutral-400"
              href="/legal/terms"
            >
              Termos & Condições
            </Link>
            ·
            <Link
              className="transition-colors hover:text-neutral-400"
              href="/legal/privacy"
            >
              Política e Privacidade
            </Link>
            <div className="hidden pl-6 flex-row items-center md:flex">
              {social.map((social) => (
                <Link
                  key={social.href}
                  className="transition-colors hover:text-neutral-400"
                  target="_blank"
                  href={social.href}
                  aria-label={social.label}
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
