"use client";

import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
