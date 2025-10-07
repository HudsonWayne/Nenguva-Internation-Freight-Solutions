import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Companies from "@/components/companies"
import WhyUseNguva from "@/components/WhyUseNguva";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Companies/>
      <WhyUseNguva/>
    </div>
  );
}
