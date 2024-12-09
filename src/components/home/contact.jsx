export function Contact(){
  return(
    <main className="flex flex-col justify-center items-start text-start p-3">
      <h2 className="text-2xl border-b-2 border-b-primary pb-2 font-bold">Contact The Developer</h2>
      <div className="flex gap-1 justify-start">
        <span className="text-md font-bold">Email:</span>
        <a className="text-md font-bold text-primary underline" href="mailto:u22099dandev@gmail.com">u22099dandev@gmail.com</a>
      </div>
      <div className="flex gap-1 justify-start">
        <span className="text-md font-bold">WhatsApp:</span>
        <a className="text-md font-bold text-primary underline" href="https://wa.me/+2349033572229">+2349033572229</a>
      </div>
      <div className="flex gap-1 justify-start">
        <span className="text-md font-bold">GitHub:</span>
        <a className="text-md font-bold text-primary underline" href="https://github.com/U22099">Daniel</a>
      </div>
    </main>
  )
}