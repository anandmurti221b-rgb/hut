import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <nav className="flex gap-6">
        <Link
          href="/counter"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Counter Page
        </Link>

        <Link
          href="/about"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          About Page
        </Link>
      </nav>
    </main>
  );
}