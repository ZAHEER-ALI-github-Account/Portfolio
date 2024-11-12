import Image from "next/image";
import Logo from "@/app/public/Logo.png"
const eighth = () => {
    return (
        <div>
            <div className="w-[1263px] h-[400px] bg-[#043873] mt-20">
                <div className="py-[130px] px-14">
                    <Image src={Logo} alt="Logo"/>
                </div>
                <div className="mt-[-120px] ml-14">
                    <p className="text-white">whitepace was created for <br/> the new ways we live and <br/> work. We make a better <br/>workspace around the world</p>
                </div>
                <div className="mt-[-135px] ml-[450px]"><h1 className="font-bold text-lg">Products</h1></div>
                <div className="mt-3 ml-[450px] space-y-5">
                    <ul>
                        <li>Overview</li>
                        <li className="mt-2">Pricing</li>
                        <li className="mt-2">Customer stories</li>
                    </ul>
                </div>
                <div className="mt-[-125px] ml-[750px]"><h1 className="font-bold text-lg">Resources</h1></div>
                <div className="mt-4 ml-[750px]">
                    <ul>
                        <li>Blog</li>
                        <li className="mt-2">Guide & tutorials</li>
                        <li className="mt-2">Help center</li>
                    </ul>
                </div>
                <div className="mt-[-130px] ml-[1000px]"><h1 className="font-bold text-lg">Company</h1></div>
                <div className="mt-4 ml-[1000px] space-y-5">
                    <ul>
                        <li>About us</li>
                        <li className="mt-2">Careers</li>
                        <li className="mt-2">Media kit</li>
                    </ul>
                </div>
                <div className="items-center">
                <hr className="border-t-1 border-slate-500 my-6 w-[1200px] mt-[80px] ml-8" />
                </div>
                <div className="text-center mt-[-10px]">
                    <h4>&copy; 2021 Whitepace LLC</h4>
                </div>
            </div>
        </div>
    )
}
export default eighth;