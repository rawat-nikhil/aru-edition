import type { ReactNode } from "react";
import Image from "next/image";

export function EditorialImage({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-neutral-300 ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${imageClassName ?? ""}`}
        sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
        priority={priority}
      />
    </div>
  );
}

export function RunningHeader({
  section,
  page,
}: {
  section: string;
  page: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-ink/20 pb-2 font-sans text-[10px] uppercase tracking-[0.28em] text-ink/65">
      <span>The Aru Edition</span>
      <span className="hidden sm:inline">{section}</span>
      <span>{page}</span>
    </div>
  );
}

export function MagazinePage({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-14 border-b border-ink/10 px-4 py-16 md:px-10 md:py-24 lg:px-16 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-350">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-aru-red">
      {children}
    </p>
  );
}

export function Barcode() {
  const bars = [2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 1, 3, 1, 2];
  return (
    <div className="flex h-9 items-end gap-px" aria-hidden>
      {bars.map((width, index) => (
        <span
          key={index}
          className="bg-current"
          style={{
            width,
            height: index % 8 === 0 ? "68%" : "100%",
          }}
        />
      ))}
    </div>
  );
}
