import Navbar from "../component/navbar";
export default function Project(){
    return(
        <div>
            <Navbar/>
            <div className="w-full h-full text-center py-48 text-7xl bg-slate-950">
            <h1 className="text-violet-800 font-bold mb-12">PROJECTS</h1>
            <h2 className="text-4xl text-orange-600 font-bold mb-5">TITLE</h2>
            <ul>
                <li className="text-lg">Image Slider</li>
                <li className="text-lg">Glowing button</li>
                <li className="text-lg">5 pages website</li>
                <li className="text-lg mb-6">Figma</li>
            </ul>
            <h2 className="text-4xl text-orange-600 font-bold mb-5">DESCRIPTION</h2>
            <p className="text-lg">Designed and developed a visually stunning 5-page website featuring an interactive image slider, sleek animations, and a captivating glowing button effect. Created using Figma, this project showcases my skills.</p>
            </div>
        </div>
    )
}