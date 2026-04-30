import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30">
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">About</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          DesignX Skool
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/75">
          This route is now served from the Next.js app router. The homepage
          lives in <code>/app/page.tsx</code>, and this page confirms nested
          routing through <code>/app/about/page.tsx</code>.
        </p>
        <p className="mt-4 text-white/65">
          Static assets are available from <code>/public</code>, so the
          existing landing page can keep using stable URLs without relying on
          the old Vite entry shell.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-neutral-950 transition hover:bg-white/90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
