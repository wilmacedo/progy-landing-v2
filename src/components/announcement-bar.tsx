"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatedArrow } from "./animated-arrow";

export function AnnouncementBar() {
  const [show, setShow] = useState(true);

  const announcement = "A nova versão 2.0 do Progy já está disponível 🎉";

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <div
      data-show={show}
      className="flex w-full mx-auto pt-4 data-[show=false]:hidden"
    >
      <div className="group w-full flex rounded-xl px-3 py-1.5 cursor-pointer bg-primary hover:bg-button-primary-gradient">
        <Link
          href="https://app.progy.com.br"
          className="relative w-full flex flex-row gap-1 items-center justify-center"
        >
          <span className="font-medium text-center text-xs md:text-sm text-white">
            {announcement}
          </span>
          <AnimatedArrow />
        </Link>
        <button
          aria-label="Hide banner"
          className="relative ml-auto"
          onClick={handleClick}
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
