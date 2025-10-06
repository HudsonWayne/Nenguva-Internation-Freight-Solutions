import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
    </div>
  );
}
