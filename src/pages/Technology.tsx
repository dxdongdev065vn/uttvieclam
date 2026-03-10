import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Database, 
  Lightbulb, 
  Shield,
  Cpu,
  Cog,
  FlaskConical,
  FileCheck,
  Users,
  Building2,
  TrendingUp,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Mail,
  Phone
} from "lucide-react";

// Technology solutions
const technologies = [
  {
    id: 1,
    name: "Hệ thống IoT giám sát giao thông",
    category: "IoT & Smart City",
    description: "Giải pháp giám sát và điều khiển giao thông thông minh sử dụng cảm biến IoT",
    status: "Sẵn sàng chuyển giao",
    applications: ["Đô thị thông minh", "Quản lý giao thông", "An toàn đường bộ"],
    team: "Khoa CNTT - ĐH UTT",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    name: "AI phát hiện hư hỏng cầu đường",
    category: "AI & Machine Learning",
    description: "Hệ thống AI tự động phát hiện và phân loại hư hỏng kết cấu công trình giao thông",
    status: "Đang phát triển",
    applications: ["Bảo trì cầu đường", "Kiểm định công trình", "An toàn hạ tầng"],
    team: "Viện NC Công nghệ UTT",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    name: "Platform quản lý vận tải thông minh",
    category: "Logistics & Supply Chain",
    description: "Nền tảng tối ưu hóa vận tải và quản lý chuỗi cung ứng",
    status: "Sẵn sàng chuyển giao",
    applications: ["Logistics", "E-commerce", "Vận tải hàng hóa"],
    team: "Khoa Kinh tế Vận tải",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    name: "Phần mềm mô phỏng dòng chảy giao thông",
    category: "Simulation & Modeling",
    description: "Công cụ mô phỏng và dự đoán luồng giao thông cho quy hoạch đô thị",
    status: "Sẵn sàng chuyển giao",
    applications: ["Quy hoạch đô thị", "Nghiên cứu giao thông", "Tư vấn thiết kế"],
    team: "Khoa Công trình",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  }
];

// Research orders
const researchOrders = [
  {
    id: 1,
    title: "Phát triển vật liệu composite cho kết cấu nhẹ",
    client: "Công ty XYZ",
    budget: "500 triệu VNĐ",
    duration: "12 tháng",
    status: "Đang thực hiện",
    progress: 65
  },
  {
    id: 2,
    title: "Nghiên cứu hệ thống pin năng lượng mặt trời cho xe điện",
    client: "VinFast",
    budget: "1.2 tỷ VNĐ",
    duration: "24 tháng",
    status: "Đang tuyển cộng tác viên",
    progress: 30
  },
  {
    id: 3,
    title: "Xây dựng mô hình đánh giá an toàn cầu",
    client: "Bộ GTVT",
    budget: "800 triệu VNĐ",
    duration: "18 tháng",
    status: "Mới",
    progress: 10
  }
];

// IP & Patents
const patents = [
  {
    id: 1,
    title: "Thiết bị cảm biến áp lực đường bộ đa năng",
    type: "Bằng sáng chế",
    number: "VN1-2024-xxxxx",
    date: "15/06/2024",
    inventors: "TS. Nguyễn Văn A, ThS. Trần Thị B",
    status: "Đã cấp"
  },
  {
    id: 2,
    title: "Phương pháp phân tích dữ liệu giao thông theo thời gian thực",
    type: "Bằng sáng chế",
    number: "VN1-2024-xxxxx",
    date: "20/09/2024",
    inventors: "PGS.TS. Lê Hoàng C",
    status: "Đang xử lý"
  },
  {
    id: 3,
    title: "Phần mềm quản lý bảo trì hạ tầng GTCC",
    type: "Đăng ký bản quyền",
    number: "QTG-2024-xxxxx",
    date: "10/11/2024",
    inventors: "Nhóm NC Hạ tầng số",
    status: "Đã cấp"
  }
];

const Technology = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "danh-muc";

  const handleTabChange = (value: string) => {
    if (value === "danh-muc") {
      setSearchParams({});
    } else {
      setSearchParams({ tab: value });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary to-secondary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Hub - Đổi Mới Sáng Tạo
          </h1>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
            Sàn ý tưởng, nghiên cứu đổi mới, công nghệ & giải pháp, chuyển giao và khởi nghiệp
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Hub - Đổi mới sáng tạo" }]} />

        <Tabs value={currentTab} onValueChange={handleTabChange} className="mt-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-8">
            <TabsTrigger value="danh-muc" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Danh mục công nghệ</span>
              <span className="sm:hidden">Công nghệ</span>
            </TabsTrigger>
            <TabsTrigger value="dat-hang" className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              <span className="hidden sm:inline">Đặt hàng NC</span>
              <span className="sm:hidden">Đặt hàng</span>
            </TabsTrigger>
            <TabsTrigger value="chuyen-giao" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Sở hữu trí tuệ</span>
              <span className="sm:hidden">IP</span>
            </TabsTrigger>
          </TabsList>

          {/* Technology Catalog Tab */}
          <TabsContent value="danh-muc">
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Cpu className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Giải pháp</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <FlaskConical className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">30+</p>
                  <p className="text-sm text-muted-foreground">Đề tài NC</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Đối tác</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <FileCheck className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">Bằng sáng chế</p>
                </div>
              </div>

              {/* Search & Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Tìm kiếm công nghệ, giải pháp..." 
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm">Tất cả</Button>
                  <Button variant="outline" size="sm">IoT</Button>
                  <Button variant="outline" size="sm">AI/ML</Button>
                  <Button variant="outline" size="sm">Logistics</Button>
                </div>
              </div>

              {/* Technologies Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {technologies.map((tech) => (
                  <div key={tech.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={tech.image} 
                        alt={tech.name}
                        className="w-full h-full object-cover"
                      />
                      <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium ${
                        tech.status === "Sẵn sàng chuyển giao" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium">{tech.category}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-1">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{tech.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-3">
                        {tech.applications.map((app, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">{tech.team}</span>
                        <Button size="sm">
                          Chi tiết
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Xem tất cả công nghệ
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Research Orders Tab */}
          <TabsContent value="dat-hang">
            <div className="space-y-8">
              {/* CTA Banner */}
              <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Đặt hàng Nghiên cứu & Phát triển</h2>
                    <p className="text-primary-foreground/80">
                      Hợp tác cùng đội ngũ giảng viên, nghiên cứu sinh UTT giải quyết bài toán của doanh nghiệp
                    </p>
                  </div>
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Gửi yêu cầu
                    <Mail className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Current Projects */}
              <div>
                <h3 className="text-xl font-bold mb-4">Dự án đang triển khai</h3>
                <div className="space-y-4">
                  {researchOrders.map((order) => (
                    <div key={order.id} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <FlaskConical className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div>
                              <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mb-2 ${
                                order.status === "Đang thực hiện" ? "bg-blue-100 text-blue-700" :
                                order.status === "Đang tuyển cộng tác viên" ? "bg-green-100 text-green-700" :
                                "bg-yellow-100 text-yellow-700"
                              }`}>
                                {order.status}
                              </span>
                              <h4 className="text-lg font-semibold text-foreground">{order.title}</h4>
                              <p className="text-sm text-muted-foreground">Đối tác: {order.client}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-primary">{order.budget}</p>
                              <p className="text-sm text-muted-foreground">{order.duration}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Tiến độ</span>
                              <span className="font-medium">{order.progress}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary rounded-full transition-all"
                                style={{ width: `${order.progress}%` }}
                              />
                            </div>
                          </div>

                          {order.status === "Đang tuyển cộng tác viên" && (
                            <Button size="sm" variant="outline" className="mt-4">
                              Ứng tuyển cộng tác
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-xl font-bold text-center mb-8">Quy trình đặt hàng nghiên cứu</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: "Gửi yêu cầu", desc: "Mô tả bài toán và mục tiêu" },
                    { step: 2, title: "Tư vấn & Đánh giá", desc: "Đội ngũ chuyên gia phân tích" },
                    { step: 3, title: "Ký hợp đồng", desc: "Thống nhất phạm vi và ngân sách" },
                    { step: 4, title: "Triển khai & Bàn giao", desc: "Thực hiện và chuyển giao kết quả" }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                        {item.step}
                      </div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* IP Tab */}
          <TabsContent value="chuyen-giao">
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">15</p>
                  <p className="text-sm text-muted-foreground">Bằng sáng chế</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
                  <FileCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">25</p>
                  <p className="text-sm text-muted-foreground">Bản quyền</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">8</p>
                  <p className="text-sm text-muted-foreground">Chuyển giao</p>
                </div>
              </div>

              {/* Patents List */}
              <div>
                <h3 className="text-xl font-bold mb-4">Danh sách Sở hữu trí tuệ</h3>
                <div className="space-y-4">
                  {patents.map((patent) => (
                    <div key={patent.id} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          {patent.type === "Bằng sáng chế" ? (
                            <Shield className="w-6 h-6 text-primary" />
                          ) : (
                            <FileCheck className="w-6 h-6 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                                  {patent.type}
                                </span>
                                <span className={`text-xs px-2 py-0.5 rounded ${
                                  patent.status === "Đã cấp" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                                }`}>
                                  {patent.status}
                                </span>
                              </div>
                              <h4 className="font-semibold text-foreground">{patent.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">Số: {patent.number}</p>
                            </div>
                            <Button size="sm" variant="outline">
                              Chi tiết
                            </Button>
                          </div>
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {patent.inventors}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {patent.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-muted rounded-2xl p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quan tâm chuyển giao công nghệ?</h3>
                    <p className="text-muted-foreground">
                      Liên hệ Trung tâm Chuyển giao Công nghệ & Sở hữu trí tuệ UTT
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline">
                      <Phone className="w-4 h-4 mr-2" />
                      024-xxx-xxxx
                    </Button>
                    <Button>
                      <Mail className="w-4 h-4 mr-2" />
                      Liên hệ
                    </Button>
                  </div>
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

export default Technology;
