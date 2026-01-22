import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Award, 
  UserCheck, 
  Handshake, 
  GraduationCap, 
  Lightbulb, 
  Calendar, 
  Trophy,
  ArrowRight,
  Briefcase,
  MapPin,
  Star,
  Code,
  Rocket,
  DollarSign,
  Clock,
  Target,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";

// Cột 1: Cựu sinh viên thành công & Mentorship
const alumniList = [
  {
    id: 1,
    name: "Nguyễn Văn Hùng",
    batch: "K58",
    position: "CEO",
    company: "VinLogistics",
    location: "Hà Nội",
    isMentor: true,
    achievement: "Top 30 Under 30 Forbes Vietnam",
    avatar: candidate1,
  },
  {
    id: 2,
    name: "Trần Thị Mai Anh",
    batch: "K60",
    position: "CTO",
    company: "FPT Software",
    location: "Đà Nẵng",
    isMentor: true,
    achievement: "Nữ lãnh đạo công nghệ 2024",
    avatar: candidate2,
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    batch: "K62",
    position: "Senior Engineer",
    company: "Samsung Vietnam",
    location: "Bắc Ninh",
    isMentor: false,
    achievement: "Giải nhất VIFOTEC 2023",
    avatar: candidate3,
  },
];

// Cột 2: Câu lạc bộ (chỉ CLB, không có dự án)
const clubsList = [
  {
    id: 1,
    name: "CLB Nghiên cứu Khoa học",
    members: 45,
    isActive: true,
    description: "Nghiên cứu ứng dụng công nghệ mới",
  },
  {
    id: 2,
    name: "CLB Khởi nghiệp UTT",
    members: 120,
    isActive: true,
    description: "Ươm mầm ý tưởng khởi nghiệp SV",
  },
  {
    id: 3,
    name: "CLB Kỹ năng mềm",
    members: 85,
    isActive: true,
    description: "Phát triển kỹ năng giao tiếp, thuyết trình",
  },
];

// Cột 3: Học bổng & Quỹ đầu tư
const scholarshipsAndFunds = [
  {
    id: 1,
    name: "Học bổng Viettel Digital Talent",
    sponsor: "Viettel",
    value: "50 triệu",
    slots: 10,
    deadline: "30/03/2026",
    type: "Học bổng",
  },
  {
    id: 2,
    name: "Quỹ Khởi nghiệp UTT",
    sponsor: "Cựu SV đóng góp",
    value: "100 triệu",
    slots: 5,
    deadline: "Quanh năm",
    type: "Đầu tư",
  },
  {
    id: 3,
    name: "Học bổng Toyota Việt Nam",
    sponsor: "Toyota",
    value: "30 triệu",
    slots: 15,
    deadline: "15/04/2026",
    type: "Học bổng",
  },
];

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cộng đồng UTT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            KẾT NỐI <span className="text-primary">CỘNG ĐỒNG</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Xây dựng mạng lưới kết nối giữa các thế hệ sinh viên, câu lạc bộ và nguồn lực hỗ trợ
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Column 1: Mạng lưới Cựu sinh viên */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">MẠNG LƯỚI CỰU SV</h3>
                  <p className="text-white/80 text-sm">Stories thành công & Mentorship</p>
                </div>
              </div>
            </div>
            
            {/* Content - Alumni List */}
            <div className="p-4 flex-1 space-y-3">
              {alumniList.map((alumni) => (
                <Link
                  key={alumni.id}
                  to={`/cong-dong/cuu-sv/${alumni.id}`}
                  className="block bg-muted/50 hover:bg-muted rounded-xl p-3 transition-all hover:shadow-md group"
                >
                  <div className="flex items-start gap-3">
                    <img 
                      src={alumni.avatar} 
                      alt={alumni.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-foreground group-hover:text-blue-600 transition-colors">
                          {alumni.name}
                        </h4>
                        <Badge variant="outline" className="text-xs">{alumni.batch}</Badge>
                        {alumni.isMentor && (
                          <Badge className="text-xs bg-green-500">Mentor</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                        <Briefcase className="w-3 h-3" />
                        <span>{alumni.position} tại {alumni.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {alumni.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-amber-600 mt-1">
                        <Trophy className="w-3 h-3" />
                        <span className="line-clamp-1">{alumni.achievement}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 pt-0 space-y-2">
              <Link to="/cong-dong" className="block">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Kết nối cựu sinh viên
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/cong-dong?action=join" className="block">
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                  Tham gia mạng lưới
                </Button>
              </Link>
              <Link to="/cong-dong?action=contact" className="block">
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                  <Handshake className="w-4 h-4 mr-2" />
                  Liên hệ hợp tác
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2: CLB & Dự án sinh viên */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">CLB & HOẠT ĐỘNG</h3>
                  <p className="text-white/80 text-sm">Câu lạc bộ & Dự án sinh viên</p>
                </div>
              </div>
            </div>
            
            {/* Content - Clubs List */}
            <div className="p-4 flex-1 space-y-3">
              {clubsList.map((club) => (
                <Link
                  key={club.id}
                  to={`/cong-dong/clb/${club.id}`}
                  className="block bg-muted/50 hover:bg-muted rounded-xl p-3 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-rose-500">
                      <Heart className="w-3 h-3 mr-1" />
                      CLB
                    </Badge>
                    {club.isActive && (
                      <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                        Đang hoạt động
                      </Badge>
                    )}
                  </div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-rose-600 transition-colors mb-1">
                    {club.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-1">
                    {club.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {club.members} thành viên
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 pt-0 space-y-2">
              <Link to="/cong-dong?tab=clb" className="block">
                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">
                  Xem câu lạc bộ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/cong-dong?tab=clb&action=join" className="block">
                <Button variant="outline" className="w-full border-rose-200 text-rose-600 hover:bg-rose-50">
                  Tham gia hoạt động
                </Button>
              </Link>
              <Link to="/cong-dong?tab=clb&action=propose" className="block">
                <Button variant="outline" className="w-full border-rose-200 text-rose-600 hover:bg-rose-50">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Đề xuất câu lạc bộ mới
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 3: Quỹ đầu tư & Học bổng */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">QUỸ & HỌC BỔNG</h3>
                  <p className="text-white/80 text-sm">Tài trợ & Đầu tư cho SV</p>
                </div>
              </div>
            </div>
            
            {/* Content - Scholarships & Funds */}
            <div className="p-4 flex-1 space-y-3">
              {scholarshipsAndFunds.map((item) => (
                <Link
                  key={item.id}
                  to={`/cong-dong/hoc-bong/${item.id}`}
                  className="block bg-muted/50 hover:bg-muted rounded-xl p-3 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={item.type === "Học bổng" ? "bg-amber-500" : "bg-green-500"}>
                      {item.type === "Học bổng" ? <GraduationCap className="w-3 h-3 mr-1" /> : <Target className="w-3 h-3 mr-1" />}
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-600 border-green-300">
                      <DollarSign className="w-3 h-3 mr-1" />
                      {item.value}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-amber-600 transition-colors mb-1">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Building className="w-3 h-3" />
                    <span>Tài trợ bởi: {item.sponsor}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {item.slots} suất
                    </span>
                    <span className="text-amber-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Hạn: {item.deadline}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 pt-0 space-y-2">
              <Link to="/cong-dong?tab=quy" className="block">
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                  Góp quỹ / Tài trợ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/cong-dong?tab=quy&action=apply" className="block">
                <Button variant="outline" className="w-full border-amber-200 text-amber-600 hover:bg-amber-50">
                  Đăng ký nhận hỗ trợ
                </Button>
              </Link>
              <Link to="/cong-dong?tab=quy&action=partner" className="block">
                <Button variant="outline" className="w-full border-amber-200 text-amber-600 hover:bg-amber-50">
                  <Handshake className="w-4 h-4 mr-2" />
                  Đồng hành cùng trung tâm
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/cong-dong">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              Khám phá Cộng đồng UTT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
