import Image from "next/image";
import apple from "@/app/public/Apple.png";
import microsoft from "@/app/public/microsoft.png";
import slack from "@/app/public/slack.png";
import google from "@/app/public/google.png";
const seventh = () => {
    return (
        <div>
            <div className="w-[1263px] h-[500px] bg-white mt-32">
            <h1 className="text-7xl font-bold text-black text-center py-20">Our sponser</h1>
            </div>
            <div className="mt-[-200px] ml-[100px]">
                <Image src={apple} alt="apple logo"/>
            </div>
            <div className="mt-[-65px] ml-[300px]">
                <Image src={microsoft} alt="microsoft logo"/>
            </div>
            <div className="mt-[-65px] ml-[650px]">
                <Image src={slack} alt="slack logo"/>
            </div>
            <div className="mt-[-65px] ml-[1000px]">
                <Image src={google} alt="google logo"/>
            </div>
        </div>
    )
}
export default seventh;