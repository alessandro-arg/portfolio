import Link from "next/link";

import { NotFoundIllustration } from "@/components/not-found/illustration";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="screen-line-bottom flex min-h-[calc(100vh-3.5rem)] items-center justify-center p-4 text-foreground"
    >
      <div className="flex w-full max-w-3xl flex-col-reverse items-center justify-center gap-6 md:flex-row md:gap-8">
        <div className="max-w-[32rem] text-center md:text-left">
          <p className="mb-2 font-mono text-xs text-muted-foreground">/404</p>

          <h1
            id="not-found-heading"
            className="text-balance text-3xl font-medium tracking-tight sm:text-4xl"
          >
            Page not found
          </h1>

          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved.
          </p>

          <div className="mt-5 text-sm text-muted-foreground">
            <p className="mb-2">Here&apos;s what might have happened:</p>

            <ul className="inline-flex flex-col gap-1.5 text-left">
              <li className="flex items-center">
                <span className="pr-3 pointer-events-none">&#8250;</span>
                You may have mistyped the URL
              </li>

              <li className="flex items-center">
                <span className="pr-3 pointer-events-none">&#8250;</span>
                The page was moved
              </li>

              <li className="flex items-center">
                <span className="pr-3 pointer-events-none">&#8250;</span>
                It never existed
              </li>
            </ul>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Double-check the URL, or{" "}
            <Link
              href="/"
              className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              go to the homepage
            </Link>
            .
          </p>
        </div>

        <div
          aria-hidden="true"
          className="aspect-square w-[min(70vw,20rem)] shrink-0 md:w-72"
        >
          <NotFoundIllustration
            statusCode={404}
            className="block h-full w-full select-none"
          />
        </div>
      </div>
    </section>
  );
}
