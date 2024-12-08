import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header(){
  const [ menu, setMenu ] = useState(false);
  return(
    <motion.main initial={{x: -300, opacity: 0}} animate={{x: 0, opacity: 1}} className="flex w-full flex-col">
      <header className="mt-2 sticky top-0 left-0 flex justify-between w-full p-2 border-b backdrop-blur-sm">
        <h1 className="text-2xl text-primary font-bold">Zephyr</h1>
        {!menu ? <CiMenuFries className="text-xl" onClick={() => setMenu(false)}/> : <IoClose onClick={() => setMenu(true)}/>}
      </header>
      <motion.div initial={{y: -300, opacity: 0}} animate={{y: 0, opacity: 1}} className="fixed top-10 left-0 w-[80vw] md:w-full md:flex-row md:justify-between border p-3 justify-center items-center flex flex-col gap-2">
        <Button variant="outline" onClick={() => {
          setMenu(false);
        }}> <a href="#features">Features</a> </Button>
        <Button variant="outline" onClick={() => {
          setMenu(false);
        }}> <a href="#about">About</a> </Button>
        <Button variant="outline" onClick={() => {
          setMenu(false);
        }}> <a href="#comments">Comments</a> </Button>
        <Button variant="outline" onClick={() => {
          setMenu(false);
        }}> <a href="#contact">Contact</a> </Button>
        <Button onClick={() => {
          setMenu(false);
        }}> <a href={process.env.NEXT_PUBLIC_HOMEPAGE_URL}>Sign Up</a> </Button>
      </motion.div>
    </motion.main>
  )
}