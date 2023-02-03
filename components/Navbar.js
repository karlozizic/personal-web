import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="textx-2xl font-medium z-20 relative">
            <ul className="flex justify-between"> 
                <Link href = {"/"}>
                    <li className = "bg-gradient-to-r from-bg-greenc100 to-greenc-500  bg-greenc-600 text-greenc-900 px-4 py-2 rounded-md">Home</li>
                </Link>
                <Link href = {"/projects"}>
                    <li className = "bg-gradient-to-r from-bg-greenc100 to-greenc-500 bg-greenc-600  text-greenc-900 px-4 py-2 rounded-md">Projects</li>
                </Link>
                <li className = "bg-gradient-to-r from-bg-greenc100 to-greenc-500 bg-greenc-600  text-greenc-900 px-4 py-2 rounded-md" >
                    <a className="btn content-download button-main button-scheme" href="Karlo_Zizic.pdf" download="Karlo_Zizic" >Resume</a>
                </li>
            </ul>
        </nav>
    )
}