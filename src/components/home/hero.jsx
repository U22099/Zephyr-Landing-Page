export function Hero(){
  return(
    <main className="flex flex-col w-full h-80 justify-center items-center text-center relative z-0">
      <img
        src="/images/z-smillingman.jpg"
        alt="Zephyr Chat"
        className="object-cover top-0 left-0 w-full h-full absolute"
      />
      <div className="flex flex-col justify-center items-center text-center w-2/3 p-4 rounded backdrop-blur-xl z-[10]">
        <h1 className="text-2xl font-extrabold text-primary">Zephyr: Your All-in-One Chat App</h1>
        <h3 className="text-md text-black font-bold">Connect, chat, and create with seamless communication</h3>
      </div>
    </main>
  )
}