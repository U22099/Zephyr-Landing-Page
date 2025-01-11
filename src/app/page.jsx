"use client";

import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { About } from "@/components/home/about";
import { Comments } from "@/components/home/comments";
import { Contact } from "@/components/home/contact";

export default function Home() {
  console.log("Hey dev😉","careful with the tokens and storage data😂", "web github repo: https://github.com/U22099/Zephyr-Landing-Page")
  return (
    <main className="w-full flex flex-col">
      <Header />
      <Hero />
      <Features />
      <About />
      <Comments />
      <Contact />
    </main>
  );
}
