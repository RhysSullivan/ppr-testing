import type React from "react";
interface StaticShellProps {
  children: React.ReactNode;
}

export function StaticShell({ children }: StaticShellProps) {
  return (
    <div className="static-shell">
      {/* Static header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PPR</span>
              </div>
              <span className="font-semibold text-gray-900">Next.js Demo</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Static Navigation</span>
              <div
                className="w-2 h-2 bg-green-500 rounded-full"
                title="Static content loaded"
              ></div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main>{children}</main>

      {/* Static footer */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-4xl mx-auto px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>This footer is part of the static shell and loads immediately</p>
            <p className="mt-1">
              Built with Next.js PPR • Static Generation + Streaming
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
