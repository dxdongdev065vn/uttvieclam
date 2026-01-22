import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { MapPin, Globe, Briefcase, Gift, Building2, User, GraduationCap, Award, DollarSign, Clock, FileText, BookOpen, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import slideCampus from "@/assets/slide-campus.jpg";
import company1 from "@/assets/company-1.jpg";
import company2 from "@/assets/company-2.jpg";
import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";
import slideStudents from "@/assets/slide-students.jpg";

type Location = "hanoi" | "phutho" | "thainguyen";

interface Company {
  id: number;
  name: string;
  address: string;
  website: string;
  logo?: string;
  position: string;
  salary: string;
  benefits: string[];
  description: string;
}

const companiesByLocation: Record<Location, Company[]> = {
  hanoi: [
    {
      id: 1,
      name: "Công ty Cổ phần Xây dựng Hạ tầng ABC",
      address: "Cầu Giấy, Hà Nội",
      website: "www.abcconstruction.com.vn",
      position: "Kỹ sư Cầu đường / IT / Logistics",
      salary: "15.000.000 - 20.000.000 VNĐ",
      benefits: ["Bảo hiểm đầy đủ", "Du lịch hàng năm", "Thưởng Tết"],
      description: "Yêu cầu kinh nghiệm 1 năm trong lĩnh vực xây dựng cầu đường.",
      logo: company1,
    },
    {
      id: 2,
      name: "Tập đoàn Logistics Việt Nam",
      address: "Long Biên, Hà Nội",
      website: "www.vnlogistics.com",
      position: "Chuyên viên Vận tải / Điều phối",
      salary: "12.000.000 - 18.000.000 VNĐ",
      benefits: ["Bảo hiểm", "Xe đưa đón", "Thưởng KPI"],
      description: "Tìm kiếm ứng viên năng động, có khả năng làm việc dưới áp lực cao.",
      logo: company2,
    },
    {
      id: 3,
      name: "Công ty CP Công nghệ VinFast",
      address: "Gia Lâm, Hà Nội",
      website: "www.vinfast.vn",
      position: "Kỹ sư Ô tô / Cơ khí",
      salary: "18.000.000 - 30.000.000 VNĐ",
      benefits: ["Lương tháng 13", "Bảo hiểm cao cấp", "Nhà ở"],
      description: "Tuyển kỹ sư ô tô có kiến thức về hệ thống điện và cơ khí.",
      logo: company1,
    },
  ],
  phutho: [
    {
      id: 7,
      name: "Công ty TNHH Sản xuất XYZ",
      address: "KCN Thụy Vân, Phú Thọ",
      website: "www.xyzmanufacturing.com",
      position: "Kỹ sư Cơ khí / Điện tử",
      salary: "18.000.000 - 25.000.000 VNĐ",
      benefits: ["Nhà ở miễn phí", "Bảo hiểm", "Thưởng năng suất"],
      description: "Cần tuyển kỹ sư có kinh nghiệm vận hành máy CNC.",
      logo: company2,
    },
    {
      id: 8,
      name: "Công ty CP Hóa chất Việt Trì",
      address: "TP. Việt Trì, Phú Thọ",
      website: "www.vicaco.vn",
      position: "Kỹ sư Hóa học / Môi trường",
      salary: "12.000.000 - 18.000.000 VNĐ",
      benefits: ["Phụ cấp độc hại", "Bảo hiểm", "Xe đưa đón"],
      description: "Tuyển kỹ sư hóa học, môi trường làm việc tại nhà máy.",
      logo: company1,
    },
  ],
  thainguyen: [
    {
      id: 10,
      name: "Công ty CP Khai thác Khoáng sản TN",
      address: "TP. Thái Nguyên",
      website: "www.tnmining.com.vn",
      position: "Kỹ sư Mỏ / Địa chất",
      salary: "20.000.000 - 30.000.000 VNĐ",
      benefits: ["Phụ cấp độc hại", "Bảo hiểm cao cấp", "Thưởng dự án"],
      description: "Tuyển kỹ sư địa chất, mỏ có kinh nghiệm làm việc tại mỏ lộ thiên.",
      logo: company1,
    },
    {
      id: 11,
      name: "Công ty TNHH Samsung Electronics TN",
      address: "KCN Yên Bình, Thái Nguyên",
      website: "www.samsung.com/vn",
      position: "Kỹ sư Điện tử / QC",
      salary: "12.000.000 - 20.000.000 VNĐ",
      benefits: ["Shuttle bus", "Canteen", "Ký túc xá"],
      description: "Tuyển kỹ sư điện tử, kiểm soát chất lượng sản phẩm.",
      logo: company2,
    },
  ],
};

const locations: { key: Location; label: string; icon: string }[] = [
  { key: "hanoi", label: "HÀ NỘI", icon: "🏢" },
  { key: "phutho", label: "PHÚ THỌ", icon: "🏭" },
  { key: "thainguyen", label: "THÁI NGUYÊN", icon: "🏗️" },
];

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
];

const internshipPrograms = [
  {
    id: 1,
    name: "Chương trình Thực tập Hè 2025",
    company: "Samsung Electronics Vietnam",
    duration: "3 tháng",
    allowance: "5.000.000 VNĐ/tháng",
    positions: ["Kỹ sư phần mềm", "QA/QC", "R&D"],
    deadline: "30/04/2025",
    logo: company1,
  },
  {
    id: 2,
    name: "Học kỳ Doanh nghiệp - VinFast",
    company: "VinFast Auto",
    duration: "1 học kỳ",
    allowance: "4.000.000 VNĐ/tháng + Ký túc xá",
    positions: ["Kỹ sư ô tô", "Kỹ sư cơ khí", "Kỹ sư điện"],
    deadline: "15/05/2025",
    logo: company2,
  },
  {
    id: 3,
    name: "Thực tập sinh Logistics",
    company: "Tập đoàn Logistics Việt Nam",
    duration: "4 tháng",
    allowance: "3.500.000 VNĐ/tháng",
    positions: ["Chuyên viên vận tải", "Điều phối viên", "Kế hoạch"],
    deadline: "20/05/2025",
    logo: company1,
  },
];

const tabButtons = [
  { 
    key: "jobs", 
    label: "Việc làm và tuyển dụng", 
    icon: Briefcase,
    description: "Kết nối sinh viên với các cơ hội việc làm"
  },
  { 
    key: "candidates", 
    label: "Hồ sơ năng lực cá nhân", 
    icon: User,
    description: "Nơi sinh viên giới thiệu năng lực, kỹ năng"
  },
  { 
    key: "internship", 
    label: "Thực tập & Học kỳ doanh nghiệp", 
    icon: GraduationCap,
    description: "Các chương trình học tập gắn với doanh nghiệp"
  },
];

const SLIDE_DURATIONS: Record<string, number> = {
  jobs: 10000,
  candidates: 8000,
  internship: 8000,
};

const JobConnectionSection = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [isPaused, setIsPaused] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location>("hanoi");
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const companies = companiesByLocation[selectedLocation];
  const selectedCompany = companies[selectedCompanyIndex] || companies[0];

  const goToNextSlide = useCallback(() => {
    const tabKeys = tabButtons.map(t => t.key);
    const currentIndex = tabKeys.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabKeys.length;
    setActiveTab(tabKeys[nextIndex]);
  }, [activeTab]);

  useEffect(() => {
    if (isPaused) return;
    const duration = SLIDE_DURATIONS[activeTab] || 8000;
    const timer = setTimeout(goToNextSlide, duration);
    return () => clearTimeout(timer);
  }, [activeTab, isPaused, goToNextSlide]);

  const handleLocationChange = (loc: Location) => {
    setSelectedLocation(loc);
    setSelectedCompanyIndex(0);
  };

  const renderJobsContent = () => (
    <>
      <div className="grid lg:grid-cols-2 gap-6 items-start">
        {/* Left: Image + Location Selection */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row h-auto lg:h-[280px]">
          <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
            <div className="relative overflow-hidden h-2/3">
              <img src={slideCampus} alt="Cơ sở đào tạo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="h-1/3 bg-muted/50 flex items-center justify-center px-3">
              <p className="text-sm font-semibold text-foreground text-center">Cơ sở đào tạo UTT</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Chọn khu vực:</h3>
            <div className="flex flex-col gap-3">
              {locations.map((loc) => (
                <button
                  key={loc.key}
                  onClick={() => handleLocationChange(loc.key)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 text-left ${
                    selectedLocation === loc.key
                      ? "border-primary bg-primary/10 text-primary shadow-md"
                      : "border-border bg-muted/30 text-foreground hover:border-primary/50"
                  }`}
                >
                  <span className="text-xl">{loc.icon}</span>
                  <span className="font-medium">{loc.label}</span>
                  <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                    {companiesByLocation[loc.key].length} DN
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Job Details */}
        {selectedCompany && (
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]">
            <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
              <div className="relative overflow-hidden h-2/3">
                {selectedCompany.logo ? (
                  <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-primary" />
                  </div>
                )}
              </div>
              <div className="h-1/3 bg-muted/50 flex flex-col items-center justify-center px-3">
                <p className="text-sm font-semibold text-foreground text-center line-clamp-1">{selectedCompany.name}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />{selectedCompany.address}
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 p-5 flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                <Globe className="w-4 h-4 text-primary" />
                <p className="text-xs text-primary">{selectedCompany.website}</p>
              </div>
              <div className="space-y-2 flex-1 overflow-hidden">
                <div className="flex items-start gap-2">
                  <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Vị trí</p>
                    <p className="text-sm font-semibold text-foreground">{selectedCompany.position}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-sm">💰</span>
                  <div>
                    <p className="text-xs text-muted-foreground">Lương</p>
                    <p className="text-sm font-semibold text-primary">{selectedCompany.salary}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Gift className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Đãi ngộ</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedCompany.benefits.map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{benefit}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 text-sm">
                👉 ỨNG TUYỂN NGAY
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Company List */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Công ty tại {locations.find(l => l.key === selectedLocation)?.label} ({companies.length})
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {companies.map((company, index) => (
            <button
              key={company.id}
              onClick={() => setSelectedCompanyIndex(index)}
              className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                selectedCompanyIndex === index
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
              }`}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden mx-auto mb-2">
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
              <p className="text-xs font-medium text-foreground text-center line-clamp-2">{company.name}</p>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const renderCandidatesContent = () => (
    <div className="grid lg:grid-cols-2 gap-6">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]"
        >
          <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
            <div className="relative overflow-hidden h-2/3">
              <img src={candidate.avatar} alt={candidate.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="h-1/3 bg-muted/50 flex flex-col items-center justify-center px-3">
              <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                <GraduationCap className="w-4 h-4 text-primary" />
                {candidate.name}
              </p>
              <p className="text-xs text-muted-foreground text-center line-clamp-1">{candidate.major}</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
              <Award className="w-4 h-4 text-primary" />
              <p className="text-xs text-primary font-medium">Tốt nghiệp loại: {candidate.graduationType}</p>
            </div>
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
  );

  const renderInternshipContent = () => (
    <div className="grid lg:grid-cols-2 gap-6 items-start">
      {/* Left: Info Card */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row h-auto lg:h-[280px]">
        <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
          <div className="relative overflow-hidden h-2/3">
            <img src={slideStudents} alt="Sinh viên thực tập" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-1/3 bg-muted/50 flex items-center justify-center px-3">
            <p className="text-sm font-semibold text-foreground text-center">Chương trình Thực tập</p>
          </div>
        </div>
        <div className="lg:w-1/2 p-6 flex flex-col justify-center">
          <h3 className="text-lg font-semibold mb-3 text-foreground">Học kỳ Doanh nghiệp</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Chương trình kết hợp giữa học tập và làm việc thực tế tại doanh nghiệp, giúp sinh viên tích lũy kinh nghiệm trước khi tốt nghiệp.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">📚 Tích lũy tín chỉ</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">💼 Thực hành thực tế</span>
            <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">🎯 Cơ hội việc làm</span>
          </div>
        </div>
      </div>

      {/* Right: Current Program */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]">
        <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
          <div className="relative overflow-hidden h-2/3">
            <img src={internshipPrograms[0].logo} alt={internshipPrograms[0].company} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="h-1/3 bg-muted/50 flex flex-col items-center justify-center px-3">
            <p className="text-sm font-semibold text-foreground text-center line-clamp-1">{internshipPrograms[0].company}</p>
            <p className="text-xs text-muted-foreground">{internshipPrograms[0].duration}</p>
          </div>
        </div>
        <div className="lg:w-1/2 p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
            <Calendar className="w-4 h-4 text-primary" />
            <p className="text-xs text-primary font-medium">Hạn đăng ký: {internshipPrograms[0].deadline}</p>
          </div>
          <div className="space-y-2 flex-1 overflow-hidden">
            <div className="flex items-start gap-2">
              <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Chương trình</p>
                <p className="text-sm font-semibold text-foreground">{internshipPrograms[0].name}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Phụ cấp</p>
                <p className="text-sm font-semibold text-primary">{internshipPrograms[0].allowance}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Vị trí</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {internshipPrograms[0].positions.map((pos, idx) => (
                    <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{pos}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 text-sm">
            📝 ĐĂNG KÝ THỰC TẬP
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="utt-section bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 max-w-[1800px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">KẾT NỐI VIỆC LÀM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            KẾT NỐI <span className="text-primary">VIỆC LÀM</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Cầu nối giữa sinh viên UTT và cơ hội nghề nghiệp
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabButtons.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl border-2 transition-all duration-300 ${
                activeTab === tab.key
                  ? "border-primary bg-primary text-primary-foreground shadow-lg"
                  : "border-border bg-card text-foreground hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                activeTab === tab.key ? "bg-white/20" : "bg-primary/10"
              }`}>
                <tab.icon className={`w-5 h-5 ${activeTab === tab.key ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">{tab.label}</p>
                <p className={`text-xs ${activeTab === tab.key ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {tab.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {activeTab === "jobs" && renderJobsContent()}
          {activeTab === "candidates" && renderCandidatesContent()}
          {activeTab === "internship" && renderInternshipContent()}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link to="/viec-lam">
            <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Xem tất cả cơ hội việc làm
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobConnectionSection;
