import Image from "next/image";

export function Hero(){
  return(
    <main className="flex flex-col w-full h-80 justify-center items-center text-center relative">
      <Image
        src="/images/z-smillingman.jpg"
        objectFit="cover"
        layout="fill"
        alt="Zephyr Chat"
        className="z-[-10]"
      />
      <div className="flex flex-col justify-center items-center text-center w-2/3 p-4 rounded backdrop-blur-xl">
        <h1 className="text-3xl font-extrabold text-primary">Zephyr: Your All-in-One Chat App</h1>
        <h3 className="text-md text-black font-bold">Connect, chat, and create with seamless communication</h3>
      </div>
    </main>
  )
}