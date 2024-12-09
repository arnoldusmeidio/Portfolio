import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="-mt-5 flex h-screen w-full max-w-7xl flex-col items-center justify-center px-4">
      <section>
        <h1 className="mb-8 text-2xl font-bold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="mb-4">This page you are lookin for does not exists.</p>
        <Button asChild>
          <Link href={"/"}>Go Home</Link>
        </Button>
      </section>
    </main>
  );
}
