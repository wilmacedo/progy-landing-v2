import { Button } from "@/components/button";
import { GridPattern } from "@/components/grid-pattern";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white pb-0 md:pb-5">
      <header className="w-full flex flex-col relative overflow-hidden md:pt-20">
        <div className="flex flex-col items-center z-10 pt-20 md:pt-0 relative px-6 md:px-3">
          <h1 className="font-bold text-5xl md:text-7xl text-center slide-down">
            Transforme <br />
            visões em realidade.
          </h1>
          <h2 className="mt-5 md:px-3 max-w-xl mx-auto text-xl leading-normal text-center slide-down animation-delay-[300ms]">
            Estratégia, visão e resultados. Progy transforma organiza e suas
            ações para um negócio mais eficiente.
          </h2>
          <div className="relative z-10 mt-8 flex flex-row justify-center gap-3 pb-2 slide-down animation-delay-[750ms]">
            <Link href="https://app.progy.com.br/" legacyBehavior>
              <Button size="lg">Começar</Button>
            </Link>
            <Link href="/contact" legacyBehavior>
              <Button variant="outline" size="lg">
                Contato
              </Button>
            </Link>
          </div>
          <div className="relative md:px-16 max-w-7xl grid items-center grid-cols-[1fr] grid-rows-[1fr] h-full">
            <GridPattern />
            <div className="relative [grid-area:1/1/1/1] justify-self-center mt-12 xl:mt-0 w-full fade-in animation-delay-[1000ms] max-w-4xl">
              <div className="relative flex rounded-md bg-gradient-to-b from-gray-100 to-gray-200 p-2 shadow-xl shadow-black/10 -translate-y-1.5">
                <div className="w-full rounded-sm border object-center">
                  <Image
                    src="/dashboard.png"
                    alt="Dashboard view"
                    height={622}
                    width={1106}
                    className="h-full w-full max-w-full rounded-sm border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
