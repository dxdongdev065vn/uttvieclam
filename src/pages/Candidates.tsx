import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Search, MapPin, GraduationCap, Briefcase, DollarSign, Clock, Heart, Filter, TrendingUp, User, Star, FileText, Award } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";

interface Candidate {
  id: number;
  name: string;
  avatar: string;
  major: string;
  graduationType: string;
  location: string;
  position: string;
  salary: string;
  workType: string;
  experience: string;
  skills: string[];
  isTop: boolean;
  isNew: boolean;
  updatedAt: string;
}

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    avatar: candidate1,
    major: "Công nghệ thông tin",
    graduationType: "Giỏi",
    location: "Hà Nội",
    position: "Lập trình viên Backend",
    salary: "> 10 triệu",
    workType: "Full-time",
    experience: "Fresher",
    skills: ["React", "Node.js", "Python"],
    isTop: true,
    isNew: true,
    updatedAt: "Hôm nay"
  },
  {
    id: 2,
    name: "Trần Thị B",
    avatar: candidate2,
    major: "Kỹ thuật Cầu đường",
    graduationType: "Xuất sắc",
    location: "Phú Thọ",
    position: "Kỹ sư thiết kế cầu",
    salary: "12-15 triệu",
    workType: "Full-time",
    experience: "1-2 năm",
    skills: ["AutoCAD", "BIM", "SAP2000"],
    isTop: true,
    isNew: false,
    updatedAt: "1 ngày trước"
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    avatar: candidate3,
    major: "Kỹ thuật Ô tô",
    graduationType: "Giỏi",
    location: "Hà Nội",
    position: "Kỹ sư chẩn đoán ô tô",
    salary: "10-12 triệu",
    workType: "Full-time",
    experience: "Fresher",
    skills: ["Chẩn đoán", "Bảo dưỡng", "ADAS"],
    isTop: false,
    isNew: true,
    updatedAt: "2 ngày trước"
  },
  {
    id: 4,
    name: "Phạm Minh D",
    avatar: candidate1,
    major: "Logistics và Quản lý chuỗi cung ứng",
    graduationType: "Khá",
    location: "Hà Nội",
    position: "Chuyên viên Logistics",
    salary: "8-10 triệu",
    workType: "Full-time",
    experience: "Fresher",
    skills: ["SAP", "Excel", "Supply Chain"],
    isTop: false,
    isNew: false,
    updatedAt: "3 ngày trước"
  },
  {
    id: 5,
    name: "Vũ Thị E",
    avatar: candidate2,
    major: "Kinh tế vận tải",
    graduationType: "Xuất sắc",
    location: "Phú Thọ",
    position: "Chuyên viên kế hoạch vận tải",
    salary: "10-15 triệu",
    workType: "Full-time",
    experience: "1-2 năm",
    skills: ["Planning", "Analysis", "Communication"],
    isTop: true,
    isNew: false,
    updatedAt: "4 ngày trước"
  },
  {
    id: 6,
    name: "Đỗ Quang F",
    avatar: candidate3,
    major: "Kỹ thuật Điện - Điện tử",
    graduationType: "Giỏi",
    location: "Thái Nguyên",
    position: "Kỹ sư điện tử",
    salary: "12-18 triệu",
    workType: "Full-time",
    experience: "Fresher",
    skills: ["PLC", "SCADA", "Embedded"],
    isTop: false,
    isNew: true,
    updatedAt: "5 ngày trước"
  },
];

const majors = ["Tất cả chuyên ngành", "Công nghệ thông tin", "Kỹ thuật Cầu đường", "Kỹ thuật Ô tô", "Logistics", "Kinh tế vận tải", "Điện - Điện tử"];
const locationOptions = ["Tất cả địa điểm", "Hà Nội", "Phú Thọ", "Thái Nguyên", "Hồ Chí Minh"];
const experienceLevels = ["Fresher", "1-2 năm", "2-3 năm", "Trên 3 năm"];
const graduationTypes = ["Xuất sắc", "Giỏi", "Khá", "Trung bình"];
const workTypes = ["Full-time", "Part-time", "Remote", "Thực tập"];

const hotMajors = [
  { name: "Công nghệ thông tin", count: 128 },
  { name: "Kỹ thuật Cầu đường", count: 67 },
  { name: "Logistics & Vận tải", count: 54 },
  { name: "Kỹ thuật Ô tô", count: 45 },
  { name: "Điện - Điện tử", count: 38 },
];

const Candidates = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <main className="flex-1">
        {/* Search Bar - JobsGO Style */}
        <div className="bg-gradient-to-r from-primary to-primary/80 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-center">
              Tìm kiếm ứng viên tiềm năng
            </h1>
            <div className="bg-background rounded-xl p-4 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Nhập từ khóa (tên, kỹ năng, vị trí...)" 
                    className="pl-10 h-12 border-border"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-12 w-full lg:w-56 border-border">
                    <GraduationCap className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Chọn chuyên ngành" />
                  </SelectTrigger>
                  <SelectContent>
                    {majors.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 w-full lg:w-48 border-border">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Địa điểm" />
                  </SelectTrigger>
                  <SelectContent>
                    {locationOptions.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Search className="w-5 h-5 mr-2" />
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Ứng viên" }]} />
          
          <div className="flex flex-col lg:flex-row gap-6 mt-4">
            {/* Sidebar - Filters */}
            <aside className="lg:w-72 shrink-0 space-y-4">
              {/* Filter Card */}
              <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Filter className="w-4 h-4 text-primary" />
                  Bộ lọc tìm kiếm
                </h3>
                
                {/* Experience */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Kinh nghiệm</h4>
                  <div className="space-y-2">
                    {experienceLevels.map(level => (
                      <label key={level} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Graduation Type */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Xếp loại tốt nghiệp</h4>
                  <div className="space-y-2">
                    {graduationTypes.map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Work Type */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Loại hình</h4>
                  <div className="space-y-2">
                    {workTypes.map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">Áp dụng bộ lọc</Button>
              </div>

              {/* Hot Majors */}
              <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Chuyên ngành HOT
                </h3>
                <div className="space-y-2">
                  {hotMajors.map(major => (
                    <a 
                      key={major.name}
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{major.name}</span>
                      <Badge variant="secondary" className="text-xs">{major.count}</Badge>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content - Candidate List */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground">
                  Tìm thấy <span className="text-primary font-bold">{candidates.length}</span> ứng viên phù hợp
                </p>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-44 h-9">
                    <SelectValue placeholder="Sắp xếp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="experience">Kinh nghiệm</SelectItem>
                    <SelectItem value="graduation">Xếp loại cao nhất</SelectItem>
                    <SelectItem value="relevant">Phù hợp nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Candidate Cards */}
              <div className="space-y-4">
                {candidates.map(candidate => (
                  <div 
                    key={candidate.id} 
                    className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-border">
                        <img src={candidate.avatar} alt={candidate.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Candidate Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-1.5 mb-1.5">
                              {candidate.isTop && (
                                <Badge className="bg-destructive text-destructive-foreground text-xs px-2 py-0">
                                  <Star className="w-3 h-3 mr-1" />TOP
                                </Badge>
                              )}
                              {candidate.isNew && (
                                <Badge className="bg-secondary text-secondary-foreground text-xs px-2 py-0">
                                  MỚI
                                </Badge>
                              )}
                              <Badge variant="outline" className="text-xs px-2 py-0 border-primary/30 text-primary">
                                <Award className="w-3 h-3 mr-1" />{candidate.graduationType}
                              </Badge>
                            </div>
                            
                            {/* Name */}
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                              {candidate.name}
                            </h3>
                            
                            {/* Major */}
                            <p className="text-muted-foreground text-sm flex items-center gap-1 mt-0.5">
                              <GraduationCap className="w-4 h-4" />
                              {candidate.major}
                            </p>
                          </div>
                          
                          {/* Save Button */}
                          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-primary">
                            <Heart className="w-5 h-5" />
                          </Button>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm">
                          <span className="flex items-center gap-1 text-foreground font-medium">
                            <Briefcase className="w-4 h-4 text-primary" />
                            {candidate.position}
                          </span>
                          <span className="flex items-center gap-1 text-primary font-semibold">
                            <DollarSign className="w-4 h-4" />
                            {candidate.salary}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {candidate.location}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {candidate.updatedAt}
                          </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {candidate.skills.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                            {candidate.workType}
                          </span>
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                            {candidate.experience}
                          </span>
                        </div>
                      </div>

                      {/* Action Button - Desktop */}
                      <div className="hidden md:flex items-center">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                          <FileText className="w-4 h-4 mr-2" />
                          Xem CV
                        </Button>
                      </div>
                    </div>

                    {/* Action Button - Mobile */}
                    <div className="md:hidden mt-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <FileText className="w-4 h-4 mr-2" />
                        Xem CV chi tiết
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled>Trước</Button>
                <Button size="sm" className="bg-primary text-primary-foreground">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <span className="px-2 text-muted-foreground">...</span>
                <Button variant="outline" size="sm">10</Button>
                <Button variant="outline" size="sm">Sau</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Candidates;
