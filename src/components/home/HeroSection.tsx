import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroCampus from "@/assets/hero-campus.jpg";
import slideTalkshow from "@/assets/slide-talkshow.jpg";
import slideStudents from "@/assets/slide-students.jpg";
import slideCampus from "@/assets/slide-campus.jpg";

const faculties = [
  "Khoa Công trình - Xây dựng",
  "Khoa Cơ khí - Ô tô",
  "Khoa Kinh tế, vận tải, logistics",
  "Khoa CNTT - Điện tử viễn thông",
  "Khoa CNKT môi trường",
  "Khoa Luật - Ngôn ngữ Anh",
];

const majorsByFaculty: Record<string, string[]> = {
  "Khoa Công trình - Xây dựng": [
    "Xây dựng Cầu đường bộ",
    "Quy hoạch và kỹ thuật giao thông",
    "Quản lý dự án",
    "Quản lý chất lượng công trình xây dựng",
    "Xây dựng Đường sắt - Metro",
    "Xây dựng Cảng - Đường thủy và Công trình biển",
    "Xây dựng dân dụng và công nghiệp",
  ],
  "Khoa Cơ khí - Ô tô": [
    "Công nghệ kỹ thuật Ô tô",
    "Cơ điện tử trên Ô tô",
    "Cơ khí Máy xây dựng",
    "Cơ khí chế tạo",
    "Tàu thủy và thiết bị nổi",
    "Đầu máy - toa xe và tàu điện Metro",
  ],
  "Khoa Kinh tế, vận tải, logistics": [
    "Logistics và quản lý chuỗi cung ứng",
    "Thương mại điện tử",
    "Kế toán doanh nghiệp",
    "Hệ thống thông tin Kế toán tài chính",
    "Kinh tế xây dựng",
    "Quản trị doanh nghiệp",
    "Quản trị Marketing",
    "Quản trị Tài chính và đầu tư",
    "Tài chính - Ngân hàng",
    "Logistics và Vận tải đa phương thức",
  ],
  "Khoa CNTT - Điện tử viễn thông": [
    "Cơ điện tử",
    "Công nghệ thông tin",
    "Hệ thống thông tin",
    "Mạng máy tính và truyền thông dữ liệu",
    "Điện tử - Viễn thông",
  ],
  "Khoa CNKT môi trường": [
    "Công nghệ kỹ thuật môi trường",
    "Quản lý tài nguyên và môi trường",
  ],
  "Khoa Luật - Ngôn ngữ Anh": [
    "Luật kinh tế",
    "Ngôn ngữ Anh",
  ],
};

const slides = [
  { id: 0, image: heroCampus, alt: "UTT Campus" },
  { id: 1, image: slideTalkshow, alt: "Talkshow du học Pháp" },
  { id: 2, image: slideStudents, alt: "Sinh viên UTT" },
  { id: 3, image: slideCampus, alt: "Khuôn viên trường" },
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFaculty, setSelectedFaculty] = useState<string>("");
  const [selectedMajor, setSelectedMajor] = useState<string>("");

  const availableMajors = selectedFaculty ? majorsByFaculty[selectedFaculty] || [] : [];

  // Reset major when faculty changes
  const handleFacultyChange = (value: string) => {
    setSelectedFaculty(value);
    setSelectedMajor("");
  };

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

  return (
    <section className="relative w-full h-[320px] md:h-[400px] lg:h-[450px]">
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
              index === currentSlide
                ? "bg-primary"
                : "bg-background/60 hover:bg-background/80"
            }`}
          />
        ))}
      </div>

      {/* Search Panel Card - Overlay on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/3 flex items-center justify-center p-4 lg:p-0 z-10">
        <div className="bg-background/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/50 p-6 lg:p-8 w-full max-w-md lg:max-w-none lg:mx-6 lg:my-8">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4">
            Tìm kiếm việc làm
          </h1>

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

          {/* Faculty & Major Dropdowns */}
          <div className="mt-6 space-y-3">
            <p className="text-sm text-muted-foreground mb-3">Tìm nhanh:</p>
            <div className="grid grid-cols-2 gap-3">
              <Select value={selectedFaculty} onValueChange={handleFacultyChange}>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="Chọn Khoa" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  {faculties.map((faculty) => (
                    <SelectItem key={faculty} value={faculty}>
                      {faculty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={selectedMajor}
                onValueChange={setSelectedMajor}
                disabled={!selectedFaculty}
              >
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue placeholder="Chọn Ngành" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  {availableMajors.map((major) => (
                    <SelectItem key={major} value={major}>
                      {major}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;