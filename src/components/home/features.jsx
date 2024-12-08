import {
  Card,
  CardContent
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export function Features(){
  const features = [
    {header: "Personal Chats", content: "Seamless one-on-one chats with text, images, videos, and audio", image: "z-chats.jpg"},
    {header: "Group Chat", content: "Create vibrant group chats and share the fun with friends", image: "z-newchats.jpg"},
    {header: "Video/Voice Calls", content: "Stay connected face-to-face or via voice calls", image: "z-call1.jpg"},
    {header: "Status Updates", content: "Share memories and status post anywhere anytime", image: "z-status.jpg"},
    {header: "AI Chatbot and Customization", content: "Smart AI chatbot and fully customizable interface", image: "z-ai.jpg"},
  ]
  return(
    <main id="features" className="mt-5 w-full gap-3 flex flex-col p-2">
      <motion.h1 initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.3}} className="text-xl font-bold text-black dark:text-white border-b-2 border-b-primary pb-1 mb-2 w-fit">What Makes Zephyr Awesome?</motion.h1>
      {features.map((feature, i) => <FeatureCard key={i} content={feature.content} header={feature.header} image={feature.image}/>)}
    </main>
  )
}

function FeatureCard({ header, content, image }){
  return(
    <motion.div initial = {{opacity: 0, y: 100}} whileInView = {{opacity: 1, y: 0}} transition = {{duration: 0.3}} classm="w-full p-3">
      <Card className="p-2 w-full">
        <CardContent className="flex flex-col items-center text-center">
          <div className="h-48 w-full relative rounded overflow-hidden z-0">
            <Image
              src={`/images/${image}`}
              objectFit="cover"
              layout="fill"
              alt={header}
              className="z-0"
            />
          </div>
          <h1 className="text-xl font-bold text-black dark:text-white border-b-2 border-b-primary pb-1 w-fit">{header}</h1>
          <p className="text-muted-foreground">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}