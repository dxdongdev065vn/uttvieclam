import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroCampus from "@/assets/hero-campus.jpg";
import slideTalkshow from "@/assets/slide-talkshow.jpg";
import slideStudents from "@/assets/slide-students.jpg";
import slideCampus from "@/assets/slide-campus.jpg";

const quickSearchTags = ["Kỹ sư", "IT", "Xây dựng", "Kinh tế", "Logistics"];

const slides = [
  { id: 0, image: heroCampus, alt: "UTT Campus" },
  { id: 1, image: slideTalkshow, alt: "Talkshow du học Pháp" },
  { id: 2, image: slideStudents, alt: "Sinh viên UTT" },
  { id: 3, image: slideCampus, alt: "Khuôn viên trường" },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px]">
      {/* Full-width Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
      </div>
      

      {/* Dots - positioned at bottom left of slide area */}
      <div className="absolute bottom-4 left-1/2 lg:left-1/3 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button 
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-background/60 hover:bg-background/80"
            }`}
          />
        ))}
      </div>

      {/* Search Panel Card - Overlay on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/3 flex items-center justify-center p-4 lg:p-0 z-10">
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 p-6 lg:p-8 w-full max-w-md lg:max-w-none lg:mx-6 lg:my-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Hơn 500 việc làm đang tuyển</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-2">
            <span className="text-primary">Kết nối </span>
            <span className="text-foreground">Tài năng với </span>
            <span className="text-primary">Cơ hội</span>
          </h1>

          <p className="text-sm text-muted-foreground mb-6">
            Cổng việc làm chính thức của <span className="font-semibold text-foreground">Trường ĐH Công nghệ GTVT</span>
          </p>

          {/* Search Form */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Tìm việc làm, công ty, vị trí..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-lg border-border"
              />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-lg">
              Tìm kiếm
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Quick Search Tags */}
          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-3">Tìm nhanh:</p>
            <div className="flex flex-wrap gap-2">
              {quickSearchTags.map((tag) => (
                <button 
                  key={tag}
                  className="px-4 py-1.5 text-sm border border-border rounded-full hover:border-primary hover:text-primary transition-colors bg-background"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
