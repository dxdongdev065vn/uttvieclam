import { User, GraduationCap, Award, MapPin, DollarSign, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";

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
  {
    id: 3,
    name: "Lê Hoàng C",
    birthYear: 2003,
    major: "Kỹ thuật Ô tô",
    graduationType: "Giỏi",
    avatar: candidate3,
    desires: {
      position: "Kỹ sư chẩn đoán ô tô",
      location: "Hà Nội",
      salary: "10-12 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 4,
    name: "Phạm Minh D",
    birthYear: 2004,
    major: "Logistics và Quản lý chuỗi cung ứng",
    graduationType: "Khá",
    avatar: candidate1,
    desires: {
      position: "Chuyên viên Logistics",
      location: "Hà Nội",
      salary: "8-10 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 5,
    name: "Vũ Thị E",
    birthYear: 2003,
    major: "Kinh tế vận tải",
    graduationType: "Xuất sắc",
    avatar: candidate2,
    desires: {
      position: "Chuyên viên kế hoạch vận tải",
      location: "Phú Thọ",
      salary: "10-15 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 6,
    name: "Đỗ Quang F",
    birthYear: 2004,
    major: "Kỹ thuật Điện - Điện tử",
    graduationType: "Giỏi",
    avatar: candidate3,
    desires: {
      position: "Kỹ sư điện tử",
      location: "Hà Nội",
      salary: "12-18 triệu",
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
              <div className="relative overflow-hidden lg:w-2/5 h-48 lg:h-full">
                <img 
                  src={candidate.avatar} 
                  alt={candidate.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Right side - Candidate Info */}
              <div className="lg:w-3/5 p-5 flex flex-col bg-card">
                {/* Header with Name */}
                <div className="mb-3 pb-3 border-b border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-bold text-foreground">{candidate.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-7">{candidate.major}</p>
                  <div className="flex items-center gap-2 mt-2 ml-7">
                    <Award className="w-4 h-4 text-primary" />
                    <p className="text-xs text-primary font-medium">Tốt nghiệp loại: {candidate.graduationType}</p>
                  </div>
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
