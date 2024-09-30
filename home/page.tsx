import Link from "next/link";
import Navbar from "../component/navbar";



export default function Home() {
  return (
    <>
      <Navbar />
      <h2 className="text-center  font-bold hover:text-blue-900">"Home Page"</h2>
      </>
  );
}