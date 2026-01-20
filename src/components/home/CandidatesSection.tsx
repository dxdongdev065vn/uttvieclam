import { useState } from "react";
import { User, GraduationCap, Calendar, BookOpen, Award, Heart, MapPin, DollarSign, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";
import slideCampus from "@/assets/slide-campus.jpg";

type Major = "cntt" | "cauduong" | "logistics";

const candidatesByMajor: Record<Major, {
  id: number;
  name: string;
  birthYear: number;
  major: string;
  graduationType: string;
  avatar: string;
  desires: {
    position: string;
    location: string;
    salary: string;
    workType: string;
  };
}[]> = {
  cntt: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      birthYear: 2004,
      major: "Công nghệ thông tin",
      graduationType: "Giỏi",
      avatar: candidate1,
      desires: {
        position: "Lập trình viên Backend",
        location: "Hà Nội",
        salary: "> 10 triệu",
        workType: "Full-time"
      }
    },
    {
      id: 5,
      name: "Phạm Đức E",
      birthYear: 2003,
      major: "Công nghệ thông tin",
      graduationType: "Xuất sắc",
      avatar: candidate2,
      desires: {
        position: "Frontend Developer",
        location: "Hà Nội",
        salary: "15-20 triệu",
        workType: "Full-time"
      }
    },
  ],
  cauduong: [
    {
      id: 2,
      name: "Trần Thị B",
      birthYear: 2003,
      major: "Kỹ thuật Cầu đường",
      graduationType: "Xuất sắc",
      avatar: candidate2,
      desires: {
        position: "Kỹ sư thiết kế cầu",
        location: "Vĩnh Phúc",
        salary: "12-15 triệu",
        workType: "Full-time"
      }
    },
  ],
  logistics: [
    {
      id: 3,
      name: "Lê Minh C",
      birthYear: 2004,
      major: "Logistics và Quản lý chuỗi cung ứng",
      graduationType: "Khá",
      avatar: candidate3,
      desires: {
        position: "Chuyên viên Logistics",
        location: "Thái Nguyên",
        salary: "8-12 triệu",
        workType: "Part-time"
      }
    },
    {
      id: 4,
      name: "Hoàng Thị D",
      birthYear: 2004,
      major: "Logistics và Quản lý chuỗi cung ứng",
      graduationType: "Giỏi",
      avatar: candidate1,
      desires: {
        position: "Quản lý kho",
        location: "Hà Nội",
        salary: "10-14 triệu",
        workType: "Full-time"
      }
    },
  ],
};

const majors: { key: Major; label: string; icon: string }[] = [
  { key: "cntt", label: "CÔNG NGHỆ TT", icon: "💻" },
  { key: "cauduong", label: "CẦU ĐƯỜNG", icon: "🌉" },
  { key: "logistics", label: "LOGISTICS", icon: "📦" },
];

const CandidatesSection = () => {
  const [selectedMajor, setSelectedMajor] = useState<Major>("cntt");
  const candidates = candidatesByMajor[selectedMajor];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            ỨNG VIÊN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            SINH VIÊN TÀI NĂNG
          </h2>
          <p className="text-muted-foreground text-lg">
            Kết nối với những ứng viên tiềm năng từ Đại học Công nghệ GTVT
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Image + Major Selection - Fixed height */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row h-auto lg:h-[280px]">
            {/* Left side - Image */}
            <div className="relative overflow-hidden lg:w-1/2 h-48 lg:h-full">
              <img
                src={slideCampus}
                alt="Sinh viên UTT"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Sinh viên UTT</p>
              </div>
            </div>

            {/* Right side - Major Selection */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Chọn chuyên ngành:</h3>
              <div className="flex flex-col gap-3">
                {majors.map((major) => (
                  <button
                    key={major.key}
                    onClick={() => setSelectedMajor(major.key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedMajor === major.key
                        ? "border-primary bg-primary/10 text-primary shadow-md"
                        : "border-border bg-muted/30 text-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className="text-xl">{major.icon}</span>
                    <span className="font-medium">{major.label}</span>
                    {selectedMajor === major.key && (
                      <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        Đang chọn
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Candidate Details - Fixed height matching left card */}
          {candidates.length > 0 && (
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]">
              {/* Left side - Avatar */}
              <div className="relative overflow-hidden lg:w-1/2 h-48 lg:h-full">
                <img 
                  src={candidates[0].avatar} 
                  alt={candidates[0].name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {candidates[0].name}
                  </p>
                  <p className="text-xs opacity-90">{candidates[0].major}</p>
                </div>
              </div>

              {/* Right side - Candidate Info */}
              <div className="lg:w-1/2 p-5 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                  <Award className="w-4 h-4 text-primary" />
                  <p className="text-xs text-primary font-medium">Tốt nghiệp loại: {candidates[0].graduationType}</p>
                </div>

                {/* Info */}
                <div className="space-y-2 flex-1 overflow-hidden">
                  <div className="flex items-start gap-2">
                    <User className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Vị trí mong muốn</p>
                      <p className="text-sm font-semibold text-foreground">{candidates[0].desires.position}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Địa điểm</p>
                      <p className="text-sm font-semibold text-foreground">{candidates[0].desires.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Mức lương</p>
                      <p className="text-sm font-semibold text-primary">{candidates[0].desires.salary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Thời gian</p>
                      <p className="text-sm font-semibold text-foreground">{candidates[0].desires.workType}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  XEM CV CHI TIẾT
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Xem tất cả ứng viên
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
