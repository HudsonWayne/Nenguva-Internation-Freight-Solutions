import HeroSection from "@/components/HeroSection";
import Companies from "@/components/companies";
import WhyUseNguva from "@/components/WhyUseNguva";
import PopularServices from "@/components/PopularServices";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Companies />
      <WhyUseNguva />
      <PopularServices />
    </div>
  );
}
