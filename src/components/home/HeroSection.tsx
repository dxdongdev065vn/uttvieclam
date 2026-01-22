import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import slideTalkshow from "@/assets/slide-talkshow.jpg";
import slideStudents from "@/assets/slide-students.jpg";
import slideCampus from "@/assets/slide-campus.jpg";
const faculties = ["Khoa Công trình - Xây dựng", "Khoa Cơ khí - Ô tô", "Khoa Kinh tế, vận tải, logistics", "Khoa CNTT - Điện tử viễn thông", "Khoa CNKT môi trường", "Khoa Luật - Ngôn ngữ Anh"];
const majorsByFaculty: Record<string, string[]> = {
  "Khoa Công trình - Xây dựng": ["Xây dựng Cầu đường bộ", "Quy hoạch và kỹ thuật giao thông", "Quản lý dự án", "Quản lý chất lượng công trình xây dựng", "Xây dựng Đường sắt - Metro", "Xây dựng Cảng - Đường thủy và Công trình biển", "Xây dựng dân dụng và công nghiệp"],
  "Khoa Cơ khí - Ô tô": ["Công nghệ kỹ thuật Ô tô", "Cơ điện tử trên Ô tô", "Cơ khí Máy xây dựng", "Cơ khí chế tạo", "Tàu thủy và thiết bị nổi", "Đầu máy - toa xe và tàu điện Metro"],
  "Khoa Kinh tế, vận tải, logistics": ["Logistics và quản lý chuỗi cung ứng", "Thương mại điện tử", "Kế toán doanh nghiệp", "Hệ thống thông tin Kế toán tài chính", "Kinh tế xây dựng", "Quản trị doanh nghiệp", "Quản trị Marketing", "Quản trị Tài chính và đầu tư", "Tài chính - Ngân hàng", "Logistics và Vận tải đa phương thức"],
  "Khoa CNTT - Điện tử viễn thông": ["Cơ điện tử", "Công nghệ thông tin", "Hệ thống thông tin", "Mạng máy tính và truyền thông dữ liệu", "Điện tử - Viễn thông"],
  "Khoa CNKT môi trường": ["Công nghệ kỹ thuật môi trường", "Quản lý tài nguyên và môi trường"],
  "Khoa Luật - Ngôn ngữ Anh": ["Luật kinh tế", "Ngôn ngữ Anh"]
};
const slides = [{
  id: 0,
  image: slideCampus,
  alt: "Khuôn viên trường"
}, {
  id: 1,
  image: slideTalkshow,
  alt: "Talkshow du học Pháp"
}, {
  id: 2,
  image: slideStudents,
  alt: "Sinh viên UTT"
}];
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
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  return <section className="relative w-full h-[100svh] min-h-[600px]">
      {/* Full-width Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          </div>)}

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/60" />

        {/* Marquee text at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent py-6 overflow-hidden z-30">
          <div className="animate-marquee whitespace-nowrap text-white text-2xl md:text-3xl font-semibold drop-shadow-lg">
            <span className="mx-12">
              TRƯỜNG ĐẠI HỌC CÔNG NGHỆ GIAO THÔNG VẬN TẢI (UTT) mang sứ mạng đào tạo và cung cấp nguồn nhân lực chất lượng cao theo hướng ứng dụng, đa ngành, đa lĩnh vực, đồng thời đẩy mạnh nghiên cứu khoa học và chuyển giao công nghệ phục vụ phát triển ngành GTVT và đất nước. Tầm nhìn đến 2030, có một số ngành đào tạo ngang tầm các trường uy tín trong khu vực và thế giới, trở thành trung tâm nghiên cứu khoa học ứng dụng, chuyển giao công nghệ và hợp tác quốc tế trong lĩnh vực GTVT. Trong tương lai, trở thành trường đại học thông minh. UTT kiên định triết lý giáo dục "Ứng dụng – Thực học – Thực nghiệp": chương trình đào tạo theo định hướng ứng dụng; bảo đảm thực hành, thực tập từ 40% trở lên; gắn chặt nhu cầu doanh nghiệp để sinh viên sẵn sàng làm việc sau tốt nghiệp. Nhà trường tổ chức đào tạo qua các khoa: Công trình, Công nghệ thông tin, Quản trị, Kinh tế vận tải, Khoa học ứng dụng, Cơ sở kỹ thuật, Luật – Chính trị, với các nhóm ngành tiêu biểu như giao thông – xây dựng, cơ khí – ô tô, điện tử – viễn thông, CNTT/AI, logistics, kinh tế – quản trị, luật, ngôn ngữ…
            </span>
            <span className="mx-12">
              TRƯỜNG ĐẠI HỌC CÔNG NGHỆ GIAO THÔNG VẬN TẢI (UTT) mang sứ mạng đào tạo và cung cấp nguồn nhân lực chất lượng cao theo hướng ứng dụng, đa ngành, đa lĩnh vực, đồng thời đẩy mạnh nghiên cứu khoa học và chuyển giao công nghệ phục vụ phát triển ngành GTVT và đất nước. Tầm nhìn đến 2030, có một số ngành đào tạo ngang tầm các trường uy tín trong khu vực và thế giới, trở thành trung tâm nghiên cứu khoa học ứng dụng, chuyển giao công nghệ và hợp tác quốc tế trong lĩnh vực GTVT. Trong tương lai, trở thành trường đại học thông minh. UTT kiên định triết lý giáo dục "Ứng dụng – Thực học – Thực nghiệp": chương trình đào tạo theo định hướng ứng dụng; bảo đảm thực hành, thực tập từ 40% trở lên; gắn chặt nhu cầu doanh nghiệp để sinh viên sẵn sàng làm việc sau tốt nghiệp. Nhà trường tổ chức đào tạo qua các khoa: Công trình, Công nghệ thông tin, Quản trị, Kinh tế vận tải, Khoa học ứng dụng, Cơ sở kỹ thuật, Luật – Chính trị, với các nhóm ngành tiêu biểu như giao thông – xây dựng, cơ khí – ô tô, điện tử – viễn thông, CNTT/AI, logistics, kinh tế – quản trị, luật, ngôn ngữ…
            </span>
          </div>
        </div>
      </div>

      {/* Dots - positioned at bottom center on mobile, left on desktop */}
      <div className="absolute bottom-8 left-1/2 lg:left-[30%] -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-primary scale-125" : "bg-white/60 hover:bg-white/80"}`} />)}
      </div>

      {/* Search Panel Card - Overlay on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[420px] xl:w-[480px] flex items-center justify-center p-4 lg:p-0 z-10">
        <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl border border-border/50 p-6 lg:p-10 w-full max-w-md lg:max-w-none lg:mx-8 lg:my-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Tìm kiếm việc làm
          </h1>
          <p className="text-muted-foreground mb-6">
            Khám phá cơ hội nghề nghiệp phù hợp với bạn
          </p>

          {/* Search Form */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input type="text" placeholder="Tìm việc làm, công ty, vị trí..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-12 pr-4 py-7 text-base rounded-xl border-border" />
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-base font-semibold rounded-xl">
              Tìm kiếm
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Faculty & Major Dropdowns */}
          <div className="mt-8 space-y-4">
            <p className="text-sm font-medium text-foreground">Tìm nhanh theo chuyên ngành:</p>
            <div className="space-y-3">
              <Select value={selectedFaculty} onValueChange={handleFacultyChange}>
                <SelectTrigger className="w-full bg-background border-border py-6 rounded-xl">
                  <SelectValue placeholder="Chọn Khoa" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  {faculties.map(faculty => <SelectItem key={faculty} value={faculty}>
                      {faculty}
                    </SelectItem>)}
                </SelectContent>
              </Select>

              <Select value={selectedMajor} onValueChange={setSelectedMajor} disabled={!selectedFaculty}>
                <SelectTrigger className="w-full bg-background border-border py-6 rounded-xl">
                  <SelectValue placeholder="Chọn Ngành" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  {availableMajors.map(major => <SelectItem key={major} value={major}>
                      {major}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-8 pt-6 border-t border-border/50 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">Việc làm</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">200+</p>
              <p className="text-xs text-muted-foreground">Doanh nghiệp</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">10k+</p>
              <p className="text-xs text-muted-foreground">Sinh viên</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 lg:left-[30%] -translate-x-1/2 translate-y-12 z-20 animate-bounce hidden lg:block">
        
      </div>
    </section>;
};
export default HeroSection;