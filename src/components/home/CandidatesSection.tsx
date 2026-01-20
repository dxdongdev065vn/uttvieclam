import { User, GraduationCap, Award, MapPin, DollarSign, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";

const candidates = [
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
    id: 2,
    name: "Trần Thị B",
    birthYear: 2003,
    major: "Kỹ thuật Cầu đường",
    graduationType: "Xuất sắc",
    avatar: candidate2,
    desires: {
      position: "Kỹ sư thiết kế cầu",
      location: "Phú Thọ",
      salary: "12-15 triệu",
      workType: "Full-time"
    }
  },
];

const CandidatesSection = () => {
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

        {/* Candidates Grid - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-6">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]"
            >
              {/* Left side - Avatar */}
              <div className="relative overflow-hidden lg:w-1/2 h-48 lg:h-full">
                <img 
                  src={candidate.avatar} 
                  alt={candidate.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    {candidate.name}
                  </p>
                  <p className="text-xs opacity-90">{candidate.major}</p>
                </div>
              </div>

              {/* Right side - Candidate Info */}
              <div className="lg:w-1/2 p-5 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                  <Award className="w-4 h-4 text-primary" />
                  <p className="text-xs text-primary font-medium">Tốt nghiệp loại: {candidate.graduationType}</p>
                </div>

                {/* Info */}
                <div className="space-y-2 flex-1 overflow-hidden">
                  <div className="flex items-start gap-2">
                    <User className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Vị trí mong muốn</p>
                      <p className="text-sm font-semibold text-foreground">{candidate.desires.position}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Địa điểm</p>
                      <p className="text-sm font-semibold text-foreground">{candidate.desires.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Mức lương</p>
                      <p className="text-sm font-semibold text-primary">{candidate.desires.salary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Thời gian</p>
                      <p className="text-sm font-semibold text-foreground">{candidate.desires.workType}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  XEM CV CHI TIẾT
                </Button>
              </div>
            </div>
          ))}
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
