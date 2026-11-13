"use client"

import { Suspense, lazy, type ComponentType, type ReactNode } from "react"
import { Loader2 } from "lucide-react"

interface LazyComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>
  props?: Record<string, any>
  fallback?: ReactNode
}

export default function LazyComponent({
  component,
  props = {},
  fallback = (
    <div className="flex justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>
  ),
}: LazyComponentProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
