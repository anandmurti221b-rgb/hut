import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>

      <p className="text-lg mb-6">This is the second page styled with Tailwind.</p>

      <Link href="/" className="text-blue-600 hover:underline">
        Back to Home
      </Link>
    </main>
  );
}