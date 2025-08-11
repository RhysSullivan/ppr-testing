import { headers } from "next/headers";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function SlowServerComponent() {
  // Simulate slow server operation (4 seconds)
  await delay(4000);
  await headers();

  const serverData = {
    timestamp: new Date().toISOString(),
    serverInfo: "This data was fetched on the server",
    processingTime: "4000ms",
    randomValue: Math.floor(Math.random() * 1000),
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-green-600">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-medium">
          Server component loaded successfully!
        </span>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-700">Generated at:</span>
            <div className="text-gray-600 font-mono">
              {serverData.timestamp}
            </div>
          </div>
          <div>
            <span className="font-medium text-gray-700">Processing time:</span>
            <div className="text-gray-600 font-mono">
              {serverData.processingTime}
            </div>
          </div>
          <div>
            <span className="font-medium text-gray-700">Random value:</span>
            <div className="text-gray-600 font-mono">
              {serverData.randomValue}
            </div>
          </div>
          <div>
            <span className="font-medium text-gray-700">Source:</span>
            <div className="text-gray-600">{serverData.serverInfo}</div>
          </div>
        </div>
      </div>

      <div className="text-xs text-gray-500 italic">
        This component demonstrates server-side rendering with streaming. The
        static shell loaded immediately while this component was being processed
        on the server.
      </div>
    </div>
  );
}
