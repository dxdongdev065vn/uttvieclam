import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Search, MapPin, Building2, Flame, Clock, DollarSign, Briefcase, ChevronRight, Heart, Filter, Star, Users, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import company1 from "@/assets/company-1.jpg";
import company2 from "@/assets/company-2.jpg";

interface Job {
  id: number;
  title: string;
  company: string;
  logo?: string;
  location: string;
  salary: string;
  time: string;
  isHot: boolean;
  isNew: boolean;
  isUrgent: boolean;
  experience: string;
  type: string;
  benefits: string[];
}

const jobs: Job[] = [
  { 
    id: 1, 
    title: "Kỹ Sư Cầu Đường - Civil Engineer", 
    company: "CÔNG TY CỔ PHẦN XÂY DỰNG HẠ TẦNG ABC", 
    logo: company1,
    location: "Hà Nội", 
    salary: "15 - 25 triệu", 
    time: "Hôm nay", 
    isHot: true,
    isNew: true,
    isUrgent: false,
    experience: "1-3 năm",
    type: "Full-time",
    benefits: ["Bảo hiểm", "Du lịch", "Thưởng KPI"]
  },
  { 
    id: 2, 
    title: "Lập Trình Viên Backend NodeJS", 
    company: "CÔNG TY TNHH CÔNG NGHỆ VẬN TẢI THÔNG MINH", 
    logo: company2,
    location: "Hồ Chí Minh", 
    salary: "20 - 35 triệu", 
    time: "1 ngày trước", 
    isHot: true,
    isNew: false,
    isUrgent: true,
    experience: "2-5 năm",
    type: "Full-time",
    benefits: ["Remote", "Laptop", "13 tháng lương"]
  },
  { 
    id: 3, 
    title: "Chuyên Viên Logistics & Chuỗi Cung Ứng", 
    company: "TẬP ĐOÀN LOGISTICS VIỆT NAM", 
    logo: company1,
    location: "Hà Nội", 
    salary: "12 - 18 triệu", 
    time: "2 ngày trước", 
    isHot: false,
    isNew: true,
    isUrgent: false,
    experience: "Không yêu cầu",
    type: "Full-time",
    benefits: ["Xe đưa đón", "Bảo hiểm", "Đào tạo"]
  },
  { 
    id: 4, 
    title: "Kỹ Sư Ô Tô - Automotive Engineer", 
    company: "CÔNG TY CP SẢN XUẤT Ô TÔ VINFAST", 
    logo: company2,
    location: "Hải Phòng", 
    salary: "18 - 30 triệu", 
    time: "3 ngày trước", 
    isHot: true,
    isNew: false,
    isUrgent: false,
    experience: "1-3 năm",
    type: "Full-time",
    benefits: ["Nhà ở", "Bảo hiểm cao cấp", "Cổ phiếu"]
  },
  { 
    id: 5, 
    title: "Kỹ Sư Điện - Điện Tử", 
    company: "CÔNG TY TNHH SAMSUNG ELECTRONICS VIỆT NAM", 
    logo: company1,
    location: "Thái Nguyên", 
    salary: "15 - 22 triệu", 
    time: "4 ngày trước", 
    isHot: false,
    isNew: false,
    isUrgent: true,
    experience: "Không yêu cầu",
    type: "Full-time",
    benefits: ["Thưởng sản xuất", "Canteen", "Shuttle bus"]
  },
  { 
    id: 6, 
    title: "Nhân Viên Kinh Doanh Vận Tải", 
    company: "CÔNG TY VẬN TẢI ĐƯỜNG SẮT VIỆT NAM", 
    logo: company2,
    location: "Hà Nội", 
    salary: "10 - 15 triệu + Hoa hồng", 
    time: "5 ngày trước", 
    isHot: false,
    isNew: false,
    isUrgent: false,
    experience: "Không yêu cầu",
    type: "Full-time",
    benefits: ["Lương cứng", "Hoa hồng cao", "Đào tạo"]
  },
];

const industries = ["Tất cả ngành nghề", "Kỹ thuật", "Xây dựng", "Công nghệ thông tin", "Logistics", "Ô tô", "Điện - Điện tử"];
const locationOptions = ["Tất cả địa điểm", "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Thái Nguyên", "Phú Thọ"];
const experienceLevels = ["Không yêu cầu", "Dưới 1 năm", "1-3 năm", "3-5 năm", "Trên 5 năm"];
const salaryRanges = ["Dưới 10 triệu", "10 - 15 triệu", "15 - 20 triệu", "20 - 30 triệu", "Trên 30 triệu", "Thỏa thuận"];
const jobTypes = ["Full-time", "Part-time", "Remote", "Thực tập"];

const hotCategories = [
  { name: "Kỹ thuật Cầu đường", count: 45 },
  { name: "Công nghệ thông tin", count: 128 },
  { name: "Logistics & Vận tải", count: 67 },
  { name: "Kỹ thuật Ô tô", count: 34 },
  { name: "Điện - Điện tử", count: 56 },
];

const Jobs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <main className="flex-1">
        {/* Search Bar - JobsGO Style */}
        <div className="bg-gradient-to-r from-primary to-primary/80 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-center">
              Việc làm và tuyển dụng
            </h1>
            <div className="bg-background rounded-xl p-4 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Nhập từ khóa (vị trí, công ty, kỹ năng...)" 
                    className="pl-10 h-12 border-border"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-12 w-full lg:w-56 border-border">
                    <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Chọn ngành nghề" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12 w-full lg:w-48 border-border">
                    <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Nơi làm việc" />
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
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Việc làm và tuyển dụng" }]} />
          
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

                {/* Salary */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Mức lương</h4>
                  <div className="space-y-2">
                    {salaryRanges.map(range => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Loại hình</h4>
                  <div className="space-y-2">
                    {jobTypes.map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">Áp dụng bộ lọc</Button>
              </div>

              {/* Hot Categories */}
              <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Ngành nghề HOT
                </h3>
                <div className="space-y-2">
                  {hotCategories.map(cat => (
                    <a 
                      key={cat.name}
                      href="#"
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <span className="text-sm text-foreground group-hover:text-primary transition-colors">{cat.name}</span>
                      <Badge variant="secondary" className="text-xs">{cat.count}</Badge>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content - Job List */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground">
                  Tìm thấy <span className="text-primary font-bold">{jobs.length}</span> việc làm phù hợp
                </p>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-44 h-9">
                    <SelectValue placeholder="Sắp xếp" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Mới nhất</SelectItem>
                    <SelectItem value="salary-high">Lương cao nhất</SelectItem>
                    <SelectItem value="salary-low">Lương thấp nhất</SelectItem>
                    <SelectItem value="relevant">Phù hợp nhất</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {jobs.map(job => (
                  <div 
                    key={job.id} 
                    className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex gap-4">
                      {/* Company Logo */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-border">
                        {job.logo ? (
                          <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-muted flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-muted-foreground" />
                          </div>
                        )}
                      </div>

                      {/* Job Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-1.5 mb-1.5">
                              {job.isHot && (
                                <Badge className="bg-destructive text-destructive-foreground text-xs px-2 py-0">
                                  <Flame className="w-3 h-3 mr-1" />HOT
                                </Badge>
                              )}
                              {job.isNew && (
                                <Badge className="bg-secondary text-secondary-foreground text-xs px-2 py-0">
                                  <Star className="w-3 h-3 mr-1" />MỚI
                                </Badge>
                              )}
                              {job.isUrgent && (
                                <Badge className="bg-accent text-accent-foreground text-xs px-2 py-0">
                                  <Clock className="w-3 h-3 mr-1" />TUYỂN GẤP
                                </Badge>
                              )}
                            </div>
                            
                            {/* Title */}
                            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
                              {job.title}
                            </h3>
                            
                            {/* Company */}
                            <p className="text-muted-foreground text-sm line-clamp-1 mt-0.5">{job.company}</p>
                          </div>
                          
                          {/* Save Button */}
                          <Button variant="ghost" size="icon" className="shrink-0 text-muted-foreground hover:text-primary">
                            <Heart className="w-5 h-5" />
                          </Button>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm">
                          <span className="flex items-center gap-1 text-primary font-semibold">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            {job.experience}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {job.time}
                          </span>
                        </div>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {job.benefits.map((benefit, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default Jobs;
