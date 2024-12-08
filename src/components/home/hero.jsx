import Image from "next/image";

export function Hero(){
  return(
    <main className="flex flex-col justify-center items-center text-center w-full h-60">
      <Image
        src="/images/z-chats.jpg"
        objectFit="cover"
        layout="fill"
        alt="Zephyr Chat"
        className="z-[-10]"
      />
      <h1 className="text-3xl font-extrabold text-primary">Zephyr: Your All-in-One Chat App</h1>
      <h3 className="text-xl text-muted font-bold">Connect, chat, and create with seamless communication</h3>
    </main>
  )
}