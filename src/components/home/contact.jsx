import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Contact(){
  return(
    <main className="flex flex-col justify-center items-start text-start p-3 gap-2">
      <h2 className="text-2xl border-b-2 border-b-primary pb-1 font-bold">Contact The Developer</h2>
      <div className="flex gap-1 justify-start items-center">
        <MdAttachEmail className="text-xl"/>
        <span className="text-md font-bold">Email:</span>
        <a className="text-md font-bold text-primary underline" href="mailto:u22099dandev@gmail.com">u22099dandev@gmail.com</a>
      </div>
      <div className="flex gap-1 justify-start items-center">
        <IoLogoWhatsapp className="text-xl"/>
        <span className="text-md font-bold">WhatsApp:</span>
        <a className="text-md font-bold text-primary underline" href="https://wa.me/+2349033572229">+2349033572229</a>
      </div>
      <div className="flex gap-1 justify-start items-center">
        <FaGithub className="text-xl"/>
        <span className="text-md font-bold">GitHub:</span>
        <a className="text-md font-bold text-primary underline" href="https://github.com/U22099">Daniel</a>
      </div>
      <div className="flex gap-1 justify-start items-center">
        <FaXTwitter className="text-xl"/>
        <span className="text-md font-bold">X(formerly twitter):</span>
        <a className="text-md font-bold text-primary underline" href="https://x.com/dan_22099?s=21">Daniel</a>
      </div>
      <div className="flex gap-1 justify-start items-center">
        <FaLinkedin className="text-xl"/>
        <span className="text-md font-bold">LinkedIn:</span>
        <a className="text-md font-bold text-primary underline" href="https://linkedin.com/in/daniel-16496931a">Daniel</a>
      </div>
    </main>
  )
}