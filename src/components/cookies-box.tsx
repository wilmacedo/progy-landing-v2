"use client";

import Link from "next/link";
import { Button } from "./button";

import { COOKIE_KEY, CookieDecision } from "@/config/cookies";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";

export function CookiesBox() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cookie = getCookie(COOKIE_KEY) as CookieDecision;
    if (
      !cookie ||
      cookie.length === 0 ||
      !Object.values(CookieDecision).includes(cookie)
    ) {
      setShow(true);
      return;
    }

    setShow(false);
  }, []);

  function handleAccept() {
    setCookie(COOKIE_KEY, CookieDecision.ALLOW);
    setShow(false);
  }

  function handleReject() {
    setCookie(COOKIE_KEY, CookieDecision.DENY);
    setShow(false);
  }

  return (
    <div
      data-show={show}
      className="w-full fixed hidden data-[show=true]:flex bottom-8 justify-center flex-row z-40 md:px-3 pointer-events-none"
    >
      <div className="mx-4 py-4 px-4 md:py-2 md:pl-4 md:pr-2 bg-white rounded-lg shadow-2xl md:shadow-lg flex flex-col md:flex-row gap-4 items-center pointer-events-auto">
        <span>
          Nós utilizamos cookies para melhorar sua experiência. Você pode optar
          por não aceitar alguns cookies. Saiba mais em nossa{" "}
          <Link
            href="/legal/privacy"
            target="_blank"
            className="underline hover:text-black/80"
          >
            política de privacidade
          </Link>
          .
        </span>
        <div className="w-full flex flex-col md:items-stretch md:w-auto md:flex-row gap-2">
          <Button className="w-full" onClick={handleAccept}>
            Aceitar
          </Button>
          <Button variant="outline" className="w-full" onClick={handleReject}>
            Rejeitar
          </Button>
        </div>
      </div>
    </div>
  );
}
