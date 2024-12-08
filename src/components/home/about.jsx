import { motion } from "framer-motion";

export function About(){
  return(
    <motion.main initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.3}} className="bg-muted flex flex-col">
      <h1 className="text-xl text-black dark:text-white border-b-primary border-b-2 w-fit">About the Developer</h1>
      <p className="text-muted-foreground text-sm">Built by a Teen, For Everyone</p>
      <section className="flex flex-col justify-center items-center w-full">
        <p className="text-sm text-center">Zephyr was built by 17-year-old Daniel, a passionate MERN and Next.js developer. He’s poured his heart into creating a chat app that’s both powerful and easy to use. Zephyr is designed to help you connect with friends and family in a way that’s fun and intuitive, and we’re always working on new and exciting updates!</p>
      </section>
    </motion.main>
  )
}