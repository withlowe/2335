"use client"

import { Suspense, lazy } from "react"
import { Skeleton } from "@/components/ui/skeleton"

// Use React's lazy instead of next/dynamic in client components
const EditIndexEntryClient = lazy(() => import("./client"))

export default function EditWrapper({ id }: { id: string }) {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-4">Edit Index Entry</h1>
          <p className="text-muted-foreground mb-4">Loading form...</p>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-12 w-32 ml-auto" />
          </div>
        </div>
      }
    >
      <EditIndexEntryClient id={id} />
    </Suspense>
  )
}
