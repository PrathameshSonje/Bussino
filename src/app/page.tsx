import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import Image from "next/image";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Landing/>
    </>
        
  );
}
