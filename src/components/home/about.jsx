import { motion } from "framer-motion";
import Image from "next/image"
export function About(){
  return(
    <motion.main id="about" initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.3}} className="flex flex-col w-full relative">
      <Image 
        src="z-coder.jpg"
        layout="fill"
        objectFit="cover"
        className="z-[-10]"
      />
      <section className="w-full flex flex-col z-0">
        <h1 className="text-2xl text-black dark:text-white border-b-primary border-b-2 w-fit">About the Developer</h1>
        <p className="text-muted-foreground text-md">Built by a Teen, For Everyone</p>
        <section className="flex flex-col justify-center items-center w-full text-md">
          <p className="text-sm text-center">Zephyr was built by 17-year-old Daniel, a passionate MERN and Next.js developer. He’s poured his heart into creating a chat app that’s both powerful and easy to use. Zephyr is designed to help you connect with friends and family in a way that’s fun and intuitive, and we’re always working on new and exciting updates!</p>
        </section>
      </section>
    </motion.main>
  )
}