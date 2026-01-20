import { User, GraduationCap, Award, MapPin, DollarSign, Clock, FileText, ArrowRight, Heart, Star, Briefcase } from "lucide-react";
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
    isNew: true,
    skills: ["React", "Node.js", "Python"],
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
    isHot: true,
    skills: ["AutoCAD", "BIM", "Project Management"],
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
    skills: ["Chẩn đoán ô tô", "Bảo dưỡng", "ADAS"],
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
    isNew: true,
    skills: ["SAP", "Excel", "Supply Chain"],
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
    isHot: true,
    skills: ["Planning", "Analysis", "Communication"],
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
    skills: ["PLC", "SCADA", "Embedded Systems"],
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
    <section className="utt-section bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="utt-blob utt-blob-primary w-80 h-80 -top-40 -left-40 animate-float" />
      <div className="utt-blob utt-blob-secondary w-96 h-96 -bottom-48 -right-48 animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">
            <GraduationCap className="w-4 h-4 mr-1" />
            ỨNG VIÊN TIỀM NĂNG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Sinh Viên <span className="text-gradient-orange">Tài Năng</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kết nối với những ứng viên xuất sắc từ Đại học Công nghệ GTVT
          </p>
        </div>

        {/* Candidates Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="utt-card bg-card p-0 overflow-hidden group"
            >
              {/* Avatar Section - 2/3 height */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={candidate.avatar} 
                  alt={candidate.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-1.5">
                  {candidate.isHot && (
                    <span className="utt-badge-hot">
                      <Star className="w-3 h-3" />TOP
                    </span>
                  )}
                  {candidate.isNew && (
                    <span className="utt-badge-new">MỚI</span>
                  )}
                </div>

                {/* Save Button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-background transition-all">
                  <Heart className="w-4 h-4" />
                </button>

                {/* Name & Major - Bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <h3 className="font-bold text-foreground">{candidate.name}</h3>
                    <span className="ml-auto text-xs bg-primary/90 text-primary-foreground px-2 py-0.5 rounded-full">
                      {candidate.graduationType}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{candidate.major}</p>
                </div>
              </div>

              {/* Info Section - 1/3 height */}
              <div className="p-4 space-y-3">
                {/* Skills */}
                {candidate.skills && (
                  <div className="flex flex-wrap gap-1.5">
                    {candidate.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {/* Desires Info */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Briefcase className="w-3.5 h-3.5 text-primary" />
                    <span className="truncate">{candidate.desires.position}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{candidate.desires.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary font-semibold">
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>{candidate.desires.salary}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{candidate.desires.workType}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn">
                  <FileText className="w-4 h-4 mr-2" />
                  Xem CV chi tiết
                  <ArrowRight className="w-4 h-4 ml-auto group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
            Xem tất cả ứng viên
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;
