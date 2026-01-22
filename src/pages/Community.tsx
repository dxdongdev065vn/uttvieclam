import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Users2, 
  Heart, 
  Award,
  MapPin,
  Building2,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Calendar,
  Star,
  TrendingUp,
  Gift,
  DollarSign,
  Trophy,
  ChevronRight,
  ExternalLink
} from "lucide-react";

// Alumni data
const alumni = [
  {
    id: 1,
    name: "Nguyễn Văn Thành",
    position: "CEO & Founder",
    company: "TechViet Solutions",
    batch: "K55 - CNTT",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    location: "Hà Nội",
    isEntrepreneur: true,
    achievements: ["Forbes 30 Under 30", "Startup của năm 2024"]
  },
  {
    id: 2,
    name: "Trần Thị Minh Anh",
    position: "Engineering Manager",
    company: "Google Singapore",
    batch: "K52 - KTPM",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    location: "Singapore",
    isEntrepreneur: false,
    achievements: ["Google Spotlight Award"]
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    position: "Director",
    company: "FPT Software",
    batch: "K50 - HTTT",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    location: "TP. Hồ Chí Minh",
    isEntrepreneur: false,
    achievements: ["Top 10 IT Leader Vietnam"]
  },
  {
    id: 4,
    name: "Phạm Thị Hương",
    position: "Co-Founder & CTO",
    company: "EduTech Startup",
    batch: "K56 - ATTT",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    location: "Đà Nẵng",
    isEntrepreneur: true,
    achievements: ["VinFuture Prize Nominee"]
  },
  {
    id: 5,
    name: "Hoàng Văn Đức",
    position: "Senior Architect",
    company: "Amazon Web Services",
    batch: "K48 - CNTT",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    location: "Seattle, USA",
    isEntrepreneur: false,
    achievements: ["AWS Hero"]
  },
  {
    id: 6,
    name: "Vũ Thị Lan",
    position: "Investment Director",
    company: "Vietnam Investments Group",
    batch: "K51 - QTKD",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    location: "Hà Nội",
    isEntrepreneur: false,
    achievements: ["Top 50 Business Women Vietnam"]
  }
];

// Clubs data
const clubs = [
  {
    id: 1,
    name: "CLB Tin học",
    description: "Nâng cao kỹ năng lập trình và công nghệ",
    members: 350,
    established: 2010,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
    category: "Học thuật",
    isActive: true
  },
  {
    id: 2,
    name: "CLB Tiếng Anh UTT",
    description: "Phát triển kỹ năng ngoại ngữ và giao tiếp quốc tế",
    members: 280,
    established: 2012,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    category: "Ngoại ngữ",
    isActive: true
  },
  {
    id: 3,
    name: "CLB Khởi nghiệp",
    description: "Ươm mầm ý tưởng và kết nối nhà đầu tư",
    members: 180,
    established: 2018,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    category: "Khởi nghiệp",
    isActive: true
  },
  {
    id: 4,
    name: "Đội tình nguyện UTT",
    description: "Hoạt động thiện nguyện và cộng đồng",
    members: 420,
    established: 2008,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
    category: "Tình nguyện",
    isActive: true
  },
  {
    id: 5,
    name: "CLB Nghệ thuật",
    description: "Ca hát, nhảy múa và các hoạt động văn nghệ",
    members: 150,
    established: 2015,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
    category: "Văn nghệ",
    isActive: true
  },
  {
    id: 6,
    name: "CLB Thể thao",
    description: "Bóng đá, bóng rổ, cầu lông và các môn thể thao",
    members: 300,
    established: 2006,
    image: "https://images.unsplash.com/photo-1461896836934- voices-of-hope?w=400&h=250&fit=crop",
    category: "Thể thao",
    isActive: true
  }
];

// Scholarships data
const scholarships = [
  {
    id: 1,
    name: "Học bổng Tài năng UTT",
    sponsor: "Trường ĐH Công nghệ GTVT",
    value: "50.000.000 VNĐ/năm",
    slots: 20,
    deadline: "30/03/2025",
    requirements: "GPA ≥ 3.6, hoạt động ngoại khóa xuất sắc",
    type: "Học bổng toàn phần"
  },
  {
    id: 2,
    name: "Học bổng FPT Software",
    sponsor: "FPT Software",
    value: "30.000.000 VNĐ",
    slots: 10,
    deadline: "15/04/2025",
    requirements: "Sinh viên năm 3-4 ngành CNTT, GPA ≥ 3.2",
    type: "Học bổng doanh nghiệp"
  },
  {
    id: 3,
    name: "Quỹ Hỗ trợ Sinh viên khó khăn",
    sponsor: "Hội Cựu sinh viên UTT",
    value: "10.000.000 - 20.000.000 VNĐ",
    slots: 50,
    deadline: "Quanh năm",
    requirements: "Sinh viên có hoàn cảnh khó khăn, kết quả học tập khá",
    type: "Quỹ hỗ trợ"
  },
  {
    id: 4,
    name: "Học bổng Nghiên cứu khoa học",
    sponsor: "Quỹ Đổi mới Sáng tạo UTT",
    value: "100.000.000 VNĐ/dự án",
    slots: 5,
    deadline: "01/05/2025",
    requirements: "Có đề tài nghiên cứu được duyệt, hướng dẫn bởi giảng viên",
    type: "Quỹ nghiên cứu"
  }
];

const Community = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "alumni";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Kết Nối Cộng Đồng
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Mạng lưới cựu sinh viên, câu lạc bộ và cơ hội học bổng
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Kết nối cộng đồng" }]} />

        <Tabs defaultValue={defaultTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-8">
            <TabsTrigger value="alumni" className="flex items-center gap-2">
              <Users2 className="w-4 h-4" />
              <span className="hidden sm:inline">Cựu sinh viên</span>
              <span className="sm:hidden">Alumni</span>
            </TabsTrigger>
            <TabsTrigger value="clb" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Câu lạc bộ</span>
              <span className="sm:hidden">CLB</span>
            </TabsTrigger>
            <TabsTrigger value="quy" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Học bổng</span>
              <span className="sm:hidden">Học bổng</span>
            </TabsTrigger>
          </TabsList>

          {/* Alumni Tab */}
          <TabsContent value="alumni">
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">15,000+</p>
                  <p className="text-sm text-muted-foreground">Cựu sinh viên</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Doanh nghiệp</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Quốc gia</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Doanh nhân</p>
                </div>
              </div>

              {/* Search & Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Tìm kiếm theo tên, công ty, khóa..." 
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm">Tất cả</Button>
                  <Button variant="outline" size="sm">Doanh nhân</Button>
                  <Button variant="outline" size="sm">Tech Leaders</Button>
                  <Button variant="outline" size="sm">Quốc tế</Button>
                </div>
              </div>

              {/* Alumni Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumni.map((person) => (
                  <div key={person.id} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <img 
                        src={person.avatar} 
                        alt={person.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{person.name}</h3>
                          {person.isEntrepreneur && (
                            <Trophy className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-primary font-medium">{person.position}</p>
                        <p className="text-sm text-muted-foreground">{person.company}</p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4" />
                        <span>{person.batch}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{person.location}</span>
                      </div>
                    </div>

                    {person.achievements.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1">
                        {person.achievements.map((achievement, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Linkedin className="w-4 h-4 mr-1" />
                        Kết nối
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Xem thêm cựu sinh viên
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Clubs Tab */}
          <TabsContent value="clb">
            <div className="space-y-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">Tất cả</Button>
                <Button variant="outline" size="sm">Học thuật</Button>
                <Button variant="outline" size="sm">Khởi nghiệp</Button>
                <Button variant="outline" size="sm">Tình nguyện</Button>
                <Button variant="outline" size="sm">Văn nghệ</Button>
                <Button variant="outline" size="sm">Thể thao</Button>
              </div>

              {/* Clubs Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((club) => (
                  <div key={club.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-40">
                      <img 
                        src={club.image} 
                        alt={club.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        {club.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-lg">{club.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{club.description}</p>
                      <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users2 className="w-4 h-4" />
                          <span>{club.members} thành viên</span>
                        </div>
                        <span>Từ {club.established}</span>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Tham gia ngay
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Thành lập CLB mới?</h3>
                  <p className="text-muted-foreground">
                    Bạn có ý tưởng thành lập câu lạc bộ mới? Liên hệ Phòng Công tác Sinh viên.
                  </p>
                </div>
                <Button>
                  Đăng ký thành lập
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Scholarships Tab */}
          <TabsContent value="quy">
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <Gift className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">2 tỷ+</p>
                  <p className="text-sm text-muted-foreground">VNĐ/năm</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Học bổng</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                  <Users2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">200+</p>
                  <p className="text-sm text-muted-foreground">SV nhận/năm</p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-4 text-center">
                  <Building2 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Nhà tài trợ</p>
                </div>
              </div>

              {/* Scholarships List */}
              <div className="space-y-4">
                {scholarships.map((scholarship) => (
                  <div key={scholarship.id} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                        <DollarSign className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div>
                            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${
                              scholarship.type === "Học bổng toàn phần" ? "bg-green-100 text-green-700" :
                              scholarship.type === "Học bổng doanh nghiệp" ? "bg-blue-100 text-blue-700" :
                              scholarship.type === "Quỹ hỗ trợ" ? "bg-purple-100 text-purple-700" :
                              "bg-orange-100 text-orange-700"
                            }`}>
                              {scholarship.type}
                            </span>
                            <h3 className="text-lg font-semibold text-foreground">{scholarship.name}</h3>
                            <p className="text-sm text-muted-foreground">Tài trợ: {scholarship.sponsor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary">{scholarship.value}</p>
                            <p className="text-sm text-muted-foreground">{scholarship.slots} suất</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-3 bg-muted rounded-lg">
                          <p className="text-sm">
                            <span className="font-medium">Điều kiện:</span> {scholarship.requirements}
                          </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>Hạn nộp: <strong className="text-foreground">{scholarship.deadline}</strong></span>
                          </div>
                          <Button>
                            Nộp hồ sơ
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Donor CTA */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Đóng góp Quỹ Học bổng</h3>
                    <p className="text-primary-foreground/80">
                      Cùng chung tay hỗ trợ sinh viên UTT vượt khó vươn lên
                    </p>
                  </div>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Đóng góp ngay
                    <Heart className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Community;
