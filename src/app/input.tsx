"use client";
import { useState } from "react";

export function Input() {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <p className="text-lg font-medium text-gray-700">{value}</p>
      <input
        type="text"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition text-black"
        placeholder="Type something..."
      />
    </div>
  );
}
