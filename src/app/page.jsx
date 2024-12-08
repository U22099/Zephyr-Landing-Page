"use client";

import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-3">
      <Header />
      <Hero />
    </main>
  );
}
