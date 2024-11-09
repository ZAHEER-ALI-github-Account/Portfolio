import Link from "next/link";
export default function Navbar() {
    return(
<div>
<div className="bg-slate-950 flex w-full px-12 py-8 justify-between items-center">
        <div>
            <h1 className="font-extrabold text-4xl text-violet-800">PORTFOLIO</h1>
            </div>
        <div className="flex gap-8 text-lg font-bold text-slate-600">
            <Link href="/" className="hover:underline hover:decoration-orange-600 hover:decoration-4">HOME</Link>
        <Link href="/about" className="hover:underline hover:decoration-orange-600 hover:decoration-4">ABOUT</Link>
        <Link href="/skills" className="hover:underline hover:decoration-orange-600 hover:decoration-4">SKILLS</Link>
        <Link href="/projects" className="hover:underline hover:decoration-orange-600 hover:decoration-4">PROJECTS</Link>
        </div>
    </div>
</div>
    )
}