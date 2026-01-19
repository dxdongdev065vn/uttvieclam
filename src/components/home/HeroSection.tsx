import { useState, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
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
    <section className="relative">
      <div className="flex flex-col lg:flex-row">
        {/* Image Carousel */}
        <div className="relative lg:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
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
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
        </div>

        {/* Search Panel */}
        <div className="lg:w-1/3 bg-background p-6 lg:p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Hơn 500 việc làm đang tuyển</span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
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
                  className="px-4 py-1.5 text-sm border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
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
