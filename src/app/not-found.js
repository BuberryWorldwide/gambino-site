// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-dvh grid place-items-center p-10 text-center text-neutral-200 bg-black">
      <div>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="mt-2 text-neutral-400">The page you’re looking for doesn’t exist.</p>
        <div className="mt-6">
          <Link href="/" className="rounded border border-yellow-500 px-4 py-2 text-yellow-500 hover:bg-yellow-500 hover:text-black">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
