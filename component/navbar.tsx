import Link from "next/link";

export default function Navbar() {
  return (
    <div id="text-blue-900">
    <h1> <b>IT'S MY ASSIGNMENT OF LINKING MULTIPLE PAGES THROUGH NEXT.JS</b></h1>
       


    <div className="space-x-9 bg-gray-800 p-7 ">
    <Link
      href="/home"
      className="text-red-1000 hover:text-white font-bold text-2xl">
        Home </Link>

         <Link
      href="/about"
      className="text-red-1000 hover:text-white font-bold text-2xl"><br></br>
         About </Link>
        
      

        <Link
          href="/contact"
          className="text-blue-800 hover:text-white font-bold text-2xl"
        ><br></br>
          Contact
        </Link>

        <Link
          href="/team"
          className="text-blue-800 hover:text-white font-bold text-2xl"
        >
          <br></br>
          Team
        </Link>

       

     </div>
      </div>
  
 ) }