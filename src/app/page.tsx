import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Identity from "@/components/Identity";
import ServicesSection from "@/components/ServicesSection";
import DevelopmentDirection from "@/components/DevelopmentDirection";
import CompanyStatsAndConnection from "@/components/CompanyStatsAndConnection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Identity />
        <ServicesSection />
        <DevelopmentDirection />
        <CompanyStatsAndConnection />
      </main>
      <Footer />
    </>
  );
}
