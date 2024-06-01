import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Navbar/>
      <div className="flex flex-1 overflow-auto">
        <SideBar/>
        <Landing/>
      </div>
    </main>
  );
}
