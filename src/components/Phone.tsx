import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

type PhoneProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc: string;
  dark?: boolean;
};

export default function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none z-50 select-none">
        <Image
          src={
            dark
              ? "/phone-template-dark-edges.png"
              : "/phone-template-white-edges.png"
          }
          alt="phone"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute -z-10 inset-0 object-cover">
        <Image
          src={imgSrc}
          alt="overlaying phone image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
