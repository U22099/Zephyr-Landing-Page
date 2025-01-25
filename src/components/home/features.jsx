"use client";

import {
  Card,
  CardContent
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function Features(){
  const isMobile = useIsMobile();
  const features = [
    {header: "Personal Chats", content: "Seamless one-on-one chats with text, images, videos, and audio", image: isMobile ? "z-chats.jpg" : "z-chats-desktop.jpg"},
    {header: "Group Chat", content: "Create vibrant group chats and share the fun with friends", image: isMobile ? "z-newchats.jpg" : "z-newchats-desktop.jpg"},
    {header: "Video/Voice Calls", content: "Stay connected face-to-face or via voice calls", image: isMobile ? "z-call1.jpg" : "z-call1-desktop.jpg"},
    {header: "Status Updates", content: "Share memories and status post anywhere anytime", image: isMobile ? "z-status.jpg" : "z-status-desktop.jpg"},
    {header: "AI Chatbot and Customization", content: "Smart AI chatbot and fully customizable interface", image: isMobile ? "z-ai.jpg" : "z-ai-desktop.jpg"},
  ]
  return(
    <main id="features" className="mt-5 w-full gap-3 flex flex-col p-2">
      <motion.h1 initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.3}} className="text-xl font-bold text-black dark:text-white border-b-2 border-b-primary pb-1 mb-2 w-fit">What Makes Zephyr Awesome?</motion.h1>
      <section className="flex flex-col md:flex-row md:flex-wrap gap-2 w-full md:justify-center">
        {features.map((feature, i) => <FeatureCard key={i} content={feature.content} header={feature.header} image={feature.image}/>)}
      </section>
    </main>
  )
}

function FeatureCard({ header, content, image }){
  return(
    <motion.div initial = {{opacity: 0, y: 100}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 0.3}} classm="w-full md:w-1/3 p-3">
      <Card className="p-2 w-full">
        <CardContent className="flex flex-col items-center text-center">
          <img
            src={`/images/${image}`}
            alt={header}
            className="object-cover w-full h-48 rounded max-w-1/3"
          />
          <h1 className="text-xl font-bold text-black dark:text-white border-b-2 border-b-primary pb-1 w-fit">{header}</h1>
          <p className="text-muted-foreground">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}