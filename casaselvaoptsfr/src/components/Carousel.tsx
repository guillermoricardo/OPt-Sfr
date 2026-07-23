"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface CarouselImage {
  src: string;
  alt: string;
}

export default function Carousel({
  images,
  autoAdvanceMs,
  heightClassName = "h-[70vh] min-h-[420px]",
  priority = false,
}: {
  images: CarouselImage[];
  autoAdvanceMs?: number;
  heightClassName?: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (i: number) => setIndex((i + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!autoAdvanceMs) return;
    const id = setInterval(() => goTo(index + 1), autoAdvanceMs);
    return () => clearInterval(id);
  }, [autoAdvanceMs, goTo, index]);

  if (images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden ${heightClassName}`}>
      {images.map((image, i) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={priority && i === 0}
          />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Anterior"
            className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-azul-noche/50 text-crema backdrop-blur hover:bg-azul-noche/70 transition-colors sm:flex"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Siguiente"
            className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-azul-noche/50 text-crema backdrop-blur hover:bg-azul-noche/70 transition-colors sm:flex"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-crema" : "w-2 bg-crema/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
