"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Counter Page</h1>

      <p className="text-xl mb-4">Current Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>

      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
}