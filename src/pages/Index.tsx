import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import MainNavSection from "@/components/home/MainNavSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import JobConnectionSection from "@/components/home/JobConnectionSection";
import TechnologySection from "@/components/home/TechnologySection";
import CareerGuideSection from "@/components/home/CareerGuideSection";
import CommunitySection from "@/components/home/CommunitySection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MainNavSection />
        <AboutSection />
        <StatsSection />
        <JobConnectionSection />
        <TechnologySection />
        <CareerGuideSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
