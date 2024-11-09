import Navbar from "../component/navbar";
export default function About(){
    return(
        <div>
            <Navbar/>
            <div className="w-full h-full text-center py-48 text-7xl bg-slate-950">
            <h1 className="mb-3">ABOUT<span className="text-violet-800"> ME</span></h1>
            <h3 className="text-4xl mb-12 text-orange-600">GET TO KNOW ME</h3>
            <h3 className="text-3xl font-bold text-violet-800 mb-7">INTRODUCTION</h3>
            <p className="text-lg mb-12">Hello! I’m Zaheer Ali, a front-end developer with a passion for creating impactful web experiences. My journey began in GIAIC. I transitioned into front-end development with a strong interest in combining creativity with technology to solve real-world challenges.</p>
            <h3 className="text-3xl font-bold text-violet-800 mb-7">EXPERIENCE</h3>
            <p className="text-lg mb-12">Through my hands-on experience in building projects like a dynamic resume builder, and a modern landing page with animations, I have developed a keen eye for design, usability, and efficient code. Recently, I have applied these skills in projects.
Development Philosophy:
I believe that great web development goes beyond aesthetics; its about creating seamless, enjoyable experiences for users. I am dedicated to writing clean, maintainable code and implementing best practices in accessibility, performance, and cross-browser compatibility.</p>
            </div>
        </div>
    )
}
