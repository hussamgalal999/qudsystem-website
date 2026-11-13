import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Project Not Found</h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-md mb-8">
        The project you are looking for doesn't exist or has been moved to another location.
      </p>
      <Button asChild>
        <Link href="/projects">Return to Projects</Link>
      </Button>
    </div>
  )
}
