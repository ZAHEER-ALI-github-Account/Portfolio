import "remixicon/fonts/remixicon.css"
const Hero = () => {
    return (
      <div>
        <div className="bg-[#043873] py-[110px] px-[200px] ">
          <div className="mt-28">
            <div>
                <div className="mx-[-40px]">
                    <h1 className="font-bold  text-6xl mt-[-80px]">Get More Done With</h1>
                    <h2 className="font-bold text-6xl mt-[20px]">Whitepace</h2>
                </div>
            </div>
            <div className="mx-[-40px] mt-5">
              <p className="">Project management software that enables your teams to collaborate, plan, <br/>analyze and manage everyday tasks</p>
            </div>
            <div className="py-[40px] pl-[16px] mx-[-54px]">
              <button className="bg-[#4F9CF9] rounded-lg w-48 h-14">Try Whitepace Free <i className="ri-arrow-right-line"></i></button>
            </div>
            <div className="mt-[-350px]">
            <div className="bg-[#C4DEFD] w-[450px] h-[400px] ml-[560px]"></div>
            </div>
            </div>
        </div>
      </div>  
    )
}
export default Hero;