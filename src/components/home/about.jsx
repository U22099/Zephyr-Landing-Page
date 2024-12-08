import { motion } from "framer-motion";

export function About(){
  return(
    <motion.main id="about" initial = {{opacity: 0}} whileInView = {{opacity: 1}} transition = {{duration: 0.3}} className="flex flex-col w-full relative h-72 z-0 justify-center items-center">
      <img 
        src="/images/z-coder.jpg"
        className="z-[-10] object-cover top-0 left-0 w-full h-full absolute"
      />
      <section className="w-full flex flex-col z-0 backdrop-blur-sm p-2 w-[90%]">
        <h1 className="text-2xl text-black dark:text-white border-b-primary border-b-2 w-fit">About the Developer</h1>
        <p className="text-muted-foreground text-md">Built by a Teen, For Everyone</p>
        <section className="flex flex-col justify-center items-center w-full text-md">
          <p className="text-sm text-center">Zephyr was built by 17-year-old Daniel, a passionate MERN and Next.js developer. He’s poured his heart into creating a chat app that’s both powerful and easy to use. Zephyr is designed to help you connect with friends and family in a way that’s fun and intuitive, and we’re always working on new and exciting updates!</p>
        </section>
      </section>
    </motion.main>
  )
}