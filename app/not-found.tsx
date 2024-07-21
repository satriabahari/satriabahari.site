"use client";

import Container from "@/common/components/elements/Container";
import Error from "next/error";
import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <Container
          data-aos="fade-up"
          className="flex h-full flex-col items-center justify-center gap-y-4  transition-all duration-300"
        >
          <h1 className="text-6xl font-semibold text-neutral-700 dark:text-neutral-300">
            404
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Page not found
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            test
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            test
          </p>
          <Link
            href="/"
            className="rounded-full border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-700 hover:text-neutral-300 dark:border-neutral-300 hover:dark:bg-neutral-300 hover:dark:text-neutral-700"
          >
            Take me home
          </Link>
        </Container>
      </body>
    </html>
  );
}
