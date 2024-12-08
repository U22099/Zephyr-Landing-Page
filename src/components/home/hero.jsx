import Image from "next/image";

export function Hero(){
  return(
    <main className="flex flex-col w-full h-40 justify-center items-center text-center relative">
      <Image
        src="/images/z-smillingman.jpg"
        objectFit="cover"
        layout="fill"
        alt="Zephyr Chat"
        className="z-[-10]"
      />
      <div className="flex flex-col justify-center items-center text-center w-fit p-4 rounded backdrop-blur-xl border">
        <h1 className="text-3xl font-extrabold text-primary">Zephyr: Your All-in-One Chat App</h1>
        <h3 className="text-xl text-muted-foreground font-bold">Connect, chat, and create with seamless communication</h3>
      </div>
    </main>
  )
}