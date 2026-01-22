import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  FileSearch, 
  Award,
  ArrowRight,
  Cpu,
  FlaskConical,
  Handshake,
  Search,
  Send,
  MessageCircle,
  BookOpen,
  Phone,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import articleCV from "@/assets/article-cv.jpg";
import articleInterview from "@/assets/article-interview.jpg";
import articleNetworking from "@/assets/article-networking.jpg";

const tabButtons = [
  { 
    key: "solutions", 
    label: "Danh mục Công nghệ & Giải pháp", 
    icon: Cpu, 
    description: "Sẵn sàng ứng dụng"
  },
  { 
    key: "research", 
    label: "Đặt hàng Nghiên cứu & Đổi mới", 
    icon: FlaskConical, 
    description: "DN đề xuất bài toán"
  },
  { 
    key: "transfer", 
    label: "Chuyển giao CN & Sở hữu trí tuệ", 
    icon: Handshake, 
    description: "Hỗ trợ thương mại hóa"
  },
];

const SLIDE_DURATIONS: Record<string, number> = {
  solutions: 8000,
  research: 7000,
  transfer: 7000,
};

const sectionContent = {
  solutions: {
    title: "Danh mục Công nghệ & Giải pháp",
    subtitle: "Các công nghệ sẵn sàng ứng dụng",
    description: "Khám phá danh mục các công nghệ, giải pháp kỹ thuật đã được nghiên cứu và phát triển bởi đội ngũ chuyên gia của trường, sẵn sàng chuyển giao và ứng dụng vào thực tiễn sản xuất.",
    image: articleCV,
    stats: [
      { value: "50+", label: "Giải pháp công nghệ" },
      { value: "120+", label: "Dự án triển khai" },
    ],
    features: [
      "Hệ thống giao thông thông minh (ITS)",
      "Giải pháp logistics và vận tải",
      "Công nghệ xây dựng hạ tầng",
      "Phần mềm quản lý chuyên ngành",
    ],
    buttons: [
      { label: "Xem danh mục", href: "/cong-nghe?tab=catalog", icon: BookOpen },
      { label: "Tìm giải pháp", href: "/cong-nghe?tab=catalog&action=search", icon: Search },
      { label: "Liên hệ tư vấn", href: "/lien-he?subject=technology", icon: Phone },
    ],
  },
  research: {
    title: "Đặt hàng Nghiên cứu & Đổi mới",
    subtitle: "Doanh nghiệp đề xuất bài toán",
    description: "Cầu nối giữa doanh nghiệp và đội ngũ nghiên cứu của trường. Doanh nghiệp có thể đặt hàng các dự án nghiên cứu, đổi mới sáng tạo để giải quyết các bài toán thực tiễn trong sản xuất kinh doanh.",
    image: articleInterview,
    stats: [
      { value: "30+", label: "Dự án đang thực hiện" },
      { value: "85%", label: "Tỷ lệ thành công" },
    ],
    features: [
      "Nghiên cứu theo đặt hàng của DN",
      "Đổi mới quy trình sản xuất",
      "Phát triển sản phẩm mới",
      "Tối ưu hóa vận hành",
    ],
    buttons: [
      { label: "Gửi yêu cầu", href: "/cong-nghe?tab=research&action=submit", icon: Send },
      { label: "Đặt hàng giải pháp", href: "/cong-nghe?tab=research&action=order", icon: FileSearch },
      { label: "Trao đổi chuyên gia", href: "/cong-nghe?tab=research&action=consult", icon: MessageCircle },
    ],
  },
  transfer: {
    title: "Chuyển giao CN & Sở hữu trí tuệ",
    subtitle: "Hỗ trợ thương mại hóa",
    description: "Hỗ trợ doanh nghiệp tiếp nhận công nghệ, bảo hộ quyền sở hữu trí tuệ và thương mại hóa các kết quả nghiên cứu. Đội ngũ tư vấn chuyên nghiệp đồng hành trong suốt quá trình.",
    image: articleNetworking,
    stats: [
      { value: "25+", label: "Bằng sáng chế" },
      { value: "40+", label: "Hợp đồng chuyển giao" },
    ],
    features: [
      "Đăng ký bảo hộ sáng chế",
      "Chuyển giao công nghệ trọn gói",
      "Tư vấn thương mại hóa R&D",
      "Hỗ trợ pháp lý SHTT",
    ],
    buttons: [
      { label: "Tìm hiểu chuyển giao", href: "/cong-nghe?tab=ip", icon: BookOpen },
      { label: "Tư vấn SHTT", href: "/cong-nghe?tab=ip&action=consult", icon: Award },
      { label: "Liên hệ Trung tâm", href: "/lien-he?subject=transfer", icon: Building },
    ],
  },
};

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState("solutions");
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useCallback(() => {
    const keys = Object.keys(sectionContent);
    const currentIndex = keys.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % keys.length;
    setActiveTab(keys[nextIndex]);
  }, [activeTab]);

  useEffect(() => {
    if (isPaused) return;

    const duration = SLIDE_DURATIONS[activeTab] || 8000;
    const timer = setTimeout(goToNextSlide, duration);

    return () => clearTimeout(timer);
  }, [activeTab, isPaused, goToNextSlide]);

  const currentContent = sectionContent[activeTab as keyof typeof sectionContent];

  return (
    <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-[1800px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            CÔNG NGHỆ VÀ ĐỔI MỚI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nghiên cứu & <span className="text-primary">Chuyển giao</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Kết nối doanh nghiệp với nguồn lực nghiên cứu, công nghệ của trường
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabButtons.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center gap-3 px-5 py-3 rounded-full font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105' 
                    : 'bg-background text-foreground border border-border hover:border-primary hover:text-primary shadow-md hover:shadow-lg'
                  }
                `}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-primary'}`} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{tab.label}</div>
                  <div className={`text-xs ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {tab.description}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content */}
        <div 
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={currentContent.image} 
                alt={currentContent.title}
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                {currentContent.stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex-1"
                  >
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {currentContent.subtitle}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                {currentContent.title}
              </h3>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {currentContent.description}
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {currentContent.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background rounded-xl px-4 py-3 border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {currentContent.buttons.map((btn, index) => {
                const BtnIcon = btn.icon;
                return (
                  <Link key={index} to={btn.href}>
                    <Button 
                      variant={index === 0 ? "default" : "outline"}
                      className={`
                        rounded-full px-5 py-2.5 font-medium transition-all
                        ${index === 0 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25' 
                          : 'border-border hover:border-primary hover:text-primary'
                        }
                      `}
                    >
                      <BtnIcon className="w-4 h-4 mr-2" />
                      {btn.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/cong-nghe">
            <Button className="utt-btn-primary">
              Khám phá Công nghệ & Đổi mới
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
