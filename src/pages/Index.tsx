import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import JobsSection from "@/components/home/JobsSection";
import CandidatesSection from "@/components/home/CandidatesSection";
import CareerGuideSection from "@/components/home/CareerGuideSection";
import ArticlesSection from "@/components/home/ArticlesSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <JobsSection />
        <CandidatesSection />
        <CareerGuideSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
