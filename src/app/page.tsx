import { Suspense } from "react";
import { StaticShell } from "@/components/static-shell";
import { SlowServerComponent } from "@/components/slow-server-component";
import { ClientHydrationIndicator } from "@/components/client-hydration-indicator";
import { Input } from "./input";

export default function PPRDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <StaticShell>
        <div className="max-w-4xl mx-auto p-8 space-y-8">
          {/* Static content that renders immediately */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              Next.js PPR Demo
            </h1>
            <p className="text-lg text-gray-600">
              Demonstrating Partial Prerendering with static shells, streaming
              server components, and client hydration
            </p>
          </div>

          {/* Client hydration indicator */}
          <ClientHydrationIndicator />

          {/* Static cards that render immediately */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                ⚡ Static Shell
              </h2>
              <p className="text-gray-600">
                This content is statically generated and appears immediately
                when the page loads. No waiting required!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                🔄 PPR Benefits
              </h2>
              <p className="text-gray-600">
                Fast initial page load with static content, while dynamic parts
                stream in progressively.
              </p>
            </div>
          </div>

          {/* Slow loading server component with suspense boundary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              🐌 Slow Server Component (4s delay)
            </h2>
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-12">
                  <div className="flex items-center space-x-3">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                    <span className="text-gray-600">
                      Loading server data...
                    </span>
                  </div>
                </div>
              }
            >
              <SlowServerComponent />
            </Suspense>
          </div>

          <Input />

          {/* More static content */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              📊 Performance Metrics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">~0ms</div>
                <div className="text-sm text-gray-600">Static Shell</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">~100ms</div>
                <div className="text-sm text-gray-600">Client Hydration</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">4000ms</div>
                <div className="text-sm text-gray-600">Server Component</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  Progressive
                </div>
                <div className="text-sm text-gray-600">Loading</div>
              </div>
            </div>
          </div>
        </div>
      </StaticShell>
    </div>
  );
}
