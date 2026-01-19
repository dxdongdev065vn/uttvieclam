import { User, GraduationCap, Calendar, BookOpen, Award, Heart, MapPin, DollarSign, Clock, FileText } from "lucide-react";
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
      location: "Vĩnh Phúc",
      salary: "12-15 triệu",
      workType: "Full-time"
    }
  },
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
  }
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

        {/* Candidates List */}
        <div className="space-y-8">
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Column: Profile */}
                <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/10 border-r border-border">
                  <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                    <User className="w-5 h-5" />
                    HỒ SƠ ỨNG VIÊN
                  </h3>
                  
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-32 h-32 rounded-full border-4 border-primary/20 mb-4 overflow-hidden">
                      <img 
                        src={candidate.avatar} 
                        alt={candidate.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-bold text-xl text-foreground">{candidate.name}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">Năm sinh: <span className="text-foreground font-medium">{candidate.birthYear}</span></span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">Chuyên ngành: <span className="text-foreground font-medium">{candidate.major}</span></span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">Tốt nghiệp loại: <span className="text-primary font-bold">{candidate.graduationType}</span></span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Desires */}
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-primary mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    MONG MUỐN & NGUYỆN VỌNG
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Vị trí mong muốn</p>
                      <p className="text-xl font-bold text-foreground">{candidate.desires.position}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Địa điểm làm việc: <span className="text-foreground font-medium">{candidate.desires.location}</span></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Mức lương mong muốn: <span className="text-foreground font-medium">{candidate.desires.salary}</span></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">Thời gian: <span className="text-foreground font-medium">{candidate.desires.workType}</span></span>
                    </div>
                  </div>

                  <Button className="mt-8 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl">
                    <FileText className="w-5 h-5 mr-2" />
                    XEM CV CHI TIẾT
                  </Button>
                </div>
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
