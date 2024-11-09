import Navbar from "../component/navbar";
export default function skills(){
    return(
        <div>
            <Navbar/>
            <div className="w-full h-full text-center py-48 text-7xl bg-slate-950">
            <h1 className="font-bold mb-12 text-violet-900">SKILLS</h1>
            <h3 className="text-4xl text-orange-600 font-bold mb-5">LANGUAGE</h3>
            <div className="text-lg font-bold mb-12">
            <h6>HTML</h6>
            <h6>CSS</h6>
            <h6>Javascript</h6>
            <h6>Typescript</h6>
            </div>
            <h3 className="text-4xl text-orange-600 font-bold mb-5">FRAMEWORK</h3>
            <div className="text-lg font-bold mb-12">
            <h6>Nextjs</h6>
            <h6>Tailwind CSS</h6>
            </div>
            <h3 className="text-4xl text-orange-600 font-bold mb-5">TOOLS</h3>
            <div className="text-lg font-bold mb-12">
            <h6>Git</h6>
            <h6>GitHub</h6>
            <h6>Vercel</h6>
            <h6>Figma</h6>
            </div>
            </div>
        </div>
    )
}