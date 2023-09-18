import Link from "next/link";
import { Button } from "./button";

export function CookiesBox() {
  return (
    <div className="w-full fixed bottom-8 flex justify-center flex-row z-40 md:px-3 pointer-events-none">
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
          <Button className="w-full">Aceitar</Button>
          <Button variant="outline" className="w-full">
            Rejeitar
          </Button>
        </div>
      </div>
    </div>
  );
}
