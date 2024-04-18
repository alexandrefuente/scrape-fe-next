import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full h-dvh max-w-5xl flex-col items-center justify-center font-mono text-sm lg:flex">
        <nav className="mb-6">
          <ul className="flex flex-row gap-3">
            <Link href={'/pageone'}>
              <li>Page 1</li>
            </Link>
            <Link href={'/pagetwo'}>
              <li>Page 2</li>
            </Link>
            <Link href={'/pagethree'}>
              <li>Page 3</li>
            </Link>
            <Link href={'/products'}>
              <li>Fetch API</li>
            </Link>
            <Link href={'/posts/hello-world'}>
              <li>Dynamic Page</li>
            </Link>
          </ul>
        </nav>
        <div>
          <h1 className="text-3xl">Hi, thanks for this opportunity</h1>
        </div>
      </div>
    </main>
  );
}
