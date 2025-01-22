"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          rootMargin: "50px",
        }
      );

      const element = document.querySelector(`[data-image-src="${src}"]`);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [src, priority]);

  return (
    <div 
      className={cn("overflow-hidden relative", className)}
      data-image-src={src}
    >
      {(priority || isIntersecting) && (
        <Image
          src={src}
          alt={alt}
          width={width || 1200}
          height={height || 800}
          className={cn(
            "duration-700 ease-in-out",
            isLoading ? "scale-110 blur-lg" : "scale-100 blur-0"
          )}
          onLoadingComplete={() => setIsLoading(false)}
          priority={priority}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
        />
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
}