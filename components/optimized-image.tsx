"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  sizes = "100vw",
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        className={cn("duration-700 ease-in-out", isLoading ? "scale-110 blur-sm" : "scale-100 blur-0")}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        sizes={sizes}
      />
    </div>
  )
}
