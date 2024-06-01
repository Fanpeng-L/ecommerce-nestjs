import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import cat from "../../public/cat.png";
import { ArrowRight, Check, Star } from "lucide-react";
import Phone from "@/components/Phone";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* Hero part */}
      <section className="max-w-full">
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pt-24 lg:pb-52 sm:pb-32 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-20 hidden lg:block">
                <Image alt="cat" src={cat} />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image, Your{" "}
                <span className="bg-indigo-400 px-2 text-white">Custom</span>{" "}
                Phone Case
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Design Your Case, Define Your Style –{" "}
                <span className="font-bold">It&apos;s Never Been Easier!</span>
              </p>

              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-indigo-500" />
                    High-quality, durable material
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-indigo-500" />5 year
                    print guarantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-indigo-500" />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4"></div>
              </div>
            </div>
          </div>

          {/* phone case demo */}
          <div className="relative md:max-w-xl col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block">
              <Image
                src="/your-image.png"
                alt="Your Image"
                width={150}
                height={100}
              />
            </div>
            <div className="absolute w-20 -left-2 -bottom-6 select-none">
              <Image
                src="/line.png"
                alt="Line Image"
                width={300}
                height={300}
              />
            </div>
            <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
