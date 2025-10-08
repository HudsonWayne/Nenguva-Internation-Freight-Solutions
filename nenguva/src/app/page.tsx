import Image from "next/image";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import Companies from "@/components/companies"
import WhyUseNguva from "@/components/WhyUseNguva";
import PopularServices from "@/components/PopularServices";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Companies/>
      <WhyUseNguva/>
      <PopularServices />
      <Footer />
    </div>
  );
}
