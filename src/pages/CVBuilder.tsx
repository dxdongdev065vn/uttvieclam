import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award,
  Star,
  Download,
  Eye,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Layout,
  Palette,
  Zap,
  Shield,
  ChevronRight
} from "lucide-react";

// CV Templates
const templates = [
  {
    id: 1,
    name: "Modern Professional",
    description: "Thiết kế hiện đại, phù hợp ngành IT & Công nghệ",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop",
    color: "blue",
    popular: true
  },
  {
    id: 2,
    name: "Classic Elegant",
    description: "Phong cách cổ điển, chuyên nghiệp cho mọi ngành",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=400&fit=crop",
    color: "gray",
    popular: false
  },
  {
    id: 3,
    name: "Creative Design",
    description: "Sáng tạo nổi bật cho ngành Marketing & Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=400&fit=crop",
    color: "purple",
    popular: true
  },
  {
    id: 4,
    name: "Minimal Clean",
    description: "Tối giản, rõ ràng cho mọi vị trí",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=400&fit=crop",
    color: "green",
    popular: false
  }
];

// Features
const features = [
  {
    icon: Layout,
    title: "Mẫu CV đa dạng",
    description: "20+ mẫu CV chuyên nghiệp cho mọi ngành nghề"
  },
  {
    icon: Sparkles,
    title: "AI Gợi ý nội dung",
    description: "AI hỗ trợ viết mô tả công việc ấn tượng"
  },
  {
    icon: Palette,
    title: "Tùy chỉnh linh hoạt",
    description: "Màu sắc, font chữ, bố cục theo ý thích"
  },
  {
    icon: Download,
    title: "Xuất PDF miễn phí",
    description: "Tải CV định dạng PDF chất lượng cao"
  },
  {
    icon: Eye,
    title: "Xem trước real-time",
    description: "Thay đổi nội dung, thấy ngay kết quả"
  },
  {
    icon: Shield,
    title: "Bảo mật thông tin",
    description: "Dữ liệu được mã hóa an toàn"
  }
];

const CVBuilder = () => {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Tạo CV Chuyên Nghiệp
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Xây dựng CV ấn tượng trong vài phút với công cụ tạo CV thông minh
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Tạo CV" }]} />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">50,000+</p>
            <p className="text-sm text-muted-foreground">CV đã tạo</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">20+</p>
            <p className="text-sm text-muted-foreground">Mẫu CV</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">95%</p>
            <p className="text-sm text-muted-foreground">Hài lòng</p>
          </div>
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">5 phút</p>
            <p className="text-sm text-muted-foreground">Hoàn thành</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">Tính năng nổi bật</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Templates Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-2">Chọn mẫu CV của bạn</h2>
          <p className="text-muted-foreground text-center mb-8">
            Lựa chọn mẫu CV phù hợp với ngành nghề và phong cách của bạn
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div 
                key={template.id} 
                className={`bg-background border rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                  selectedTemplate === template.id ? 'border-primary ring-2 ring-primary' : 'border-border'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="relative">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-48 object-cover"
                  />
                  {template.popular && (
                    <span className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-0.5 rounded text-xs font-medium">
                      Phổ biến
                    </span>
                  )}
                  {selectedTemplate === template.id && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" disabled={!selectedTemplate}>
              Bắt đầu tạo CV
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Quick Form Preview */}
        <div className="mt-16 bg-muted rounded-2xl p-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Thử ngay - Nhập thông tin cơ bản</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Họ và tên</Label>
                  <Input id="fullName" placeholder="Nguyễn Văn A" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" className="mt-1" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input id="phone" placeholder="0xxx xxx xxx" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="position">Vị trí ứng tuyển</Label>
                  <Input id="position" placeholder="Software Developer" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="summary">Mục tiêu nghề nghiệp</Label>
                <Textarea 
                  id="summary" 
                  placeholder="Mô tả ngắn gọn về mục tiêu và định hướng nghề nghiệp của bạn..."
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Xem trước
                </Button>
                <Button>
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Gợi ý nội dung
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sẵn sàng tạo CV chuyên nghiệp?
          </h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Đăng ký miễn phí để truy cập đầy đủ tính năng và lưu trữ CV của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90">
              Đăng ký miễn phí
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Xem hướng dẫn
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CVBuilder;
