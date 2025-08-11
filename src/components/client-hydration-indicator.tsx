"use client"

import { useState, useEffect } from "react"

export function ClientHydrationIndicator() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [hydrationTime, setHydrationTime] = useState<number | null>(null)

  useEffect(() => {
    const startTime = performance.now()
    setIsHydrated(true)
    setHydrationTime(Math.round(performance.now() - startTime))
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-indigo-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">💧 Client Hydration Status</h2>
          <div className="flex items-center space-x-3">
            <div className={`flex items-center space-x-2 ${isHydrated ? "text-green-600" : "text-orange-600"}`}>
              <div
                className={`w-3 h-3 rounded-full ${isHydrated ? "bg-green-500" : "bg-orange-500"} ${!isHydrated ? "animate-pulse" : ""}`}
              ></div>
              <span className="font-medium">{isHydrated ? "Hydrated" : "Hydrating..."}</span>
            </div>
            {hydrationTime !== null && <span className="text-sm text-gray-600">({hydrationTime}ms)</span>}
          </div>
        </div>

        {isHydrated && (
          <button
            onClick={() => alert("Client-side JavaScript is working!")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Test Interactivity
          </button>
        )}
      </div>

      <p className="text-sm text-gray-600 mt-3">
        {isHydrated
          ? "Client-side JavaScript has taken over. Interactive elements are now functional."
          : "Waiting for client-side JavaScript to load and take over from the server-rendered HTML."}
      </p>
    </div>
  )
}

