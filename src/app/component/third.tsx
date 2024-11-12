import Image from "next/image";
import Network from "@/app/public/network.jpg";
import "remixicon/fonts/remixicon.css";
const third = () => {
    return (
        <div>
            <div className="w-[1263px] h-[500px] bg-white">
               <Image src={Network} alt="network image" className="w-[500px] h-[450px] ml-28"/>
            </div>
            <div className="mt-[-380px] ml-[650px]">
                <h1 className="text-black text-6xl font-bold">Work Together</h1>
            </div>
            <div className="ml-[650px] mt-5">
                <p className="text-black">With whitepace, share your notes with your colleagues and collaborate on them.<br/>
                You can also publish a note to the internet and share the URL with others.</p>
            </div>
            <div className="ml-[650px] mt-5">
            <button className="rounded-lg bg-[#4F9CF9] w-28 h-12">Try it now<i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    )
}
export default third;