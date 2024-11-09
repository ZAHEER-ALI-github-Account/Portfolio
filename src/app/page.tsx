import Navbar from "./component/navbar"
export default function home() {
  return(
    <div>
    <Navbar/>
    <div className="w-full h-screen text-center py-48 text-7xl bg-slate-950">
      <h1 className="mb-3">HI, I AM <span className="text-violet-800 font-bold">ZAHEER ALI</span></h1>
      <h3 className="text-4xl mb-3 text-orange-600">A FRONTENED DEVELOPER</h3>
      <h6 className="text-center text-sm font-bold">Building visually engaging, responsive websites that bring ideas to life.</h6>
      <h6 className="text-center text-sm font-bold">Specializing in HTML, CSS, JavaScript, and modern frameworks to craft seamless, user-focused web experiences.</h6>
    </div>
  </div>
  )
}