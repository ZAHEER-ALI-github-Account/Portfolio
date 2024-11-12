import Image from "next/image";
import Logo from "@/app/public/Logo.png"
const Navbar = () => {
    return(
        <div>
            <div className="w-[1263px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
                <div className="w-[150px] h-[34px] mx-[-50px]">
                    <Image src={Logo} alt="Logo"/>
                </div>
                <div className="w-[400px] h-[60px] flex justify-between">
                    <div className="w-[500px] h-[23px] mt-4">
                        <ul className="font-bold flex flew-row justify-between text-white">
                            <li className="ml-9">Products</li>
                            <li className="ml-4">Solution</li>
                            <li className="ml-4">Resources</li>
                            <li className="ml-4">Pricing</li>
                        </ul>
                    </div>
                    <div className="w-[126px] h-[60px] ml-24 mt-2">
                        <button className="px-6 py-2 rounded-lg bg-[#FFE492]">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;